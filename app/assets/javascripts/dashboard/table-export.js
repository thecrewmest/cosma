var TableExport = function() {
    "use strict";
    var a = function() {
        function a(a, b) {
            for (var c = a.fnGetData(b), d = $(">td", b), e = 0, f = d.length; f > e; e++) a.fnUpdate(c[e], b, e, !1);
            a.fnDraw()
        }

        function b(a, b) {
            var c = a.fnGetData(b),
                d = $(">td", b);
            d[0].innerHTML = '<input type="text" class="form-control" value="' + c[0] + '">', d[1].innerHTML = '<input type="text" class="form-control" value="' + c[1] + '">', d[2].innerHTML = '<input type="text" class="form-control" value="' + c[2] + '">', d[3].innerHTML = '<a class="save-row" href="">Save</a>', d[4].innerHTML = '<a class="cancel-row" href="">Cancel</a>'
        }

        function c(a, b) {
            var c = $("input", b);
            a.fnUpdate(c[0].value, b, 0, !1), a.fnUpdate(c[1].value, b, 1, !1), a.fnUpdate(c[2].value, b, 2, !1), a.fnUpdate('<a class="edit-row" href="">Edit</a>', b, 3, !1), a.fnUpdate('<a class="delete-row" href="">Delete</a>', b, 4, !1), a.fnDraw(), d = !1, e = null
        }
        var d = !1,
            e = null;
        $("body").on("click", ".add-row", function(c) {
            if (c.preventDefault(), 0 == d) {
                e && a(f, e), d = !0;
                var g = f.fnAddData(["", "", "", "", ""]),
                    h = f.fnGetNodes(g[0]);
                b(f, h), e = h
            }
        }), $("#sample-table-2").on("click", ".cancel-row", function(b) {
            if (b.preventDefault(), d) {
                d = !1, e = null;
                var c = $(this).parents("tr")[0];
                f.fnDeleteRow(c)
            } else a(f, e), e = null
        }), $("#sample-table-2").on("click", ".delete-row", function(a) {
            a.preventDefault(), d && e && (f.fnDeleteRow(e), d = !1);
            var b = $(this).parents("tr")[0];
            bootbox.confirm("Are you sure to delete this row?", function(a) {
                a && ($.blockUI({
                    message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
                }), $.mockjax({
                    url: "/tabledata/delete/webservice",
                    dataType: "json",
                    responseTime: 1e3,
                    responseText: {
                        say: "ok"
                    }
                }), $.ajax({
                    url: "/tabledata/delete/webservice",
                    dataType: "json",
                    success: function(a) {
                        $.unblockUI(), "ok" == a.say && f.fnDeleteRow(b)
                    }
                }))
            })
        }), $("#sample-table-2").on("click", ".save-row", function(a) {
            a.preventDefault();
            var b = $(this).parents("tr")[0];
            $.blockUI({
                message: '<i class="fa fa-spinner fa-spin"></i> Do some ajax to sync with backend...'
            }), $.mockjax({
                url: "/tabledata/add/webservice",
                dataType: "json",
                responseTime: 1e3,
                responseText: {
                    say: "ok"
                }
            }), $.ajax({
                url: "/tabledata/add/webservice",
                dataType: "json",
                success: function(a) {
                    $.unblockUI(), "ok" == a.say && c(f, b)
                }
            })
        }), $("#sample-table-2").on("click", ".edit-row", function(c) {
            c.preventDefault(), e && (d ? (f.fnDeleteRow(e), d = !1) : a(f, e));
            var g = $(this).parents("tr")[0];
            b(f, g), e = g
        });
        var f = $("#sample-table-2").dataTable({
            dom: "lBfrtip",
            buttons: [{
                extend: "pdf",
                exportOptions: {
                    columns: ".col-to-export"
                },
                title: "export-table-pdf"
            }, {
                extend: "excel",
                exportOptions: {
                    columns: ".col-to-export"
                },
                title: "export-table-excel"
            }, {
                extend: "csv",
                exportOptions: {
                    columns: ".col-to-export"
                },
                title: "export-table-csv"
            }, {
                extend: "copy",
                exportOptions: {
                    columns: ".col-to-export"
                }
            }, {
                extend: "print",
                exportOptions: {
                    columns: ".col-to-export"
                }
            }],
            aoColumnDefs: [{
                aTargets: [0]
            }],
            oLanguage: {
                sLengthMenu: "Show _MENU_ Rows",
                sSearch: "",
                oPaginate: {
                    sPrevious: "&laquo;",
                    sNext: "&raquo;"
                }
            },
            aaSorting: [
                [1, "asc"]
            ],
            aLengthMenu: [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"]
            ],
            iDisplayLength: 10,
            sPaginationType: "full_numbers",
            sPaging: "pagination"
        });
        $("#sample-table-2_wrapper .dataTables_filter input").addClass("form-control input-sm").attr("placeholder", "Search"), $("#sample-table-2_wrapper .dataTables_length select").addClass("m-wrap small"), $("#sample-table-2_wrapper .dataTables_length select").select2(), $('#sample-table-2_column_toggler input[type="checkbox"]').change(function() {
            var a = parseInt($(this).attr("data-column")),
                b = f.fnSettings().aoColumns[a].bVisible;
            f.fnSetColumnVis(a, !b)
        })
    };
    return {
        init: function() {
            a()
        }
    }
}();