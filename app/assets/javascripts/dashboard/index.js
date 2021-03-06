var Index = function() {
    var a = function() {
            function a() {
                return Math.floor(21 * Math.random()) + 20
            }

            function b(a, b, c) {
                $('<div id="tooltip">' + c + "</div>").css({
                    position: "absolute",
                    display: "none",
                    top: b + 5,
                    left: a + 15,
                    border: "1px solid #333",
                    padding: "4px",
                    color: "#fff",
                    "border-radius": "3px",
                    "background-color": "#333",
                    opacity: .8
                }).appendTo("body").fadeIn(200)
            }
            var c = [
                    [1, a()],
                    [2, a()],
                    [3, 2 + a()],
                    [4, 3 + a()],
                    [5, 5 + a()],
                    [6, 10 + a()],
                    [7, 15 + a()],
                    [8, 20 + a()],
                    [9, 25 + a()],
                    [10, 30 + a()],
                    [11, 35 + a()],
                    [12, 25 + a()],
                    [13, 15 + a()],
                    [14, 20 + a()],
                    [15, 45 + a()],
                    [16, 50 + a()],
                    [17, 65 + a()],
                    [18, 70 + a()],
                    [19, 85 + a()],
                    [20, 80 + a()],
                    [21, 75 + a()],
                    [22, 80 + a()],
                    [23, 75 + a()],
                    [24, 70 + a()],
                    [25, 65 + a()],
                    [26, 75 + a()],
                    [27, 80 + a()],
                    [28, 85 + a()],
                    [29, 90 + a()],
                    [30, 95 + a()]
                ],
                d = [
                    [1, a() - 5],
                    [2, a() - 5],
                    [3, a() - 5],
                    [4, 6 + a()],
                    [5, 5 + a()],
                    [6, 20 + a()],
                    [7, 25 + a()],
                    [8, 36 + a()],
                    [9, 26 + a()],
                    [10, 38 + a()],
                    [11, 39 + a()],
                    [12, 50 + a()],
                    [13, 51 + a()],
                    [14, 12 + a()],
                    [15, 13 + a()],
                    [16, 14 + a()],
                    [17, 15 + a()],
                    [18, 15 + a()],
                    [19, 16 + a()],
                    [20, 17 + a()],
                    [21, 18 + a()],
                    [22, 19 + a()],
                    [23, 20 + a()],
                    [24, 21 + a()],
                    [25, 14 + a()],
                    [26, 24 + a()],
                    [27, 25 + a()],
                    [28, 26 + a()],
                    [29, 27 + a()],
                    [30, 31 + a()]
                ],
                e = ($.plot($("#placeholder-h1"), [{
                    data: c,
                    label: "Unique Visits"
                }, {
                    data: d,
                    label: "Page Views"
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .05
                                }, {
                                    opacity: .01
                                }]
                            }
                        },
                        points: {
                            show: !1
                        },
                        shadowSize: 2
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "#eee",
                        borderWidth: 0
                    },
                    colors: ["#d12610", "#37b7f3", "#52e136"],
                    xaxis: {
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        ticks: 11,
                        tickDecimals: 0
                    }
                }), null);
            $("#placeholder-h1").bind("plothover", function(a, c, d) {
                if ($("#x").text(c.x.toFixed(2)), $("#y").text(c.y.toFixed(2)), d) {
                    if (e != d.dataIndex) {
                        e = d.dataIndex, $("#tooltip").remove();
                        var f = d.datapoint[0].toFixed(2),
                            g = d.datapoint[1].toFixed(2);
                        b(d.pageX, d.pageY, d.series.label + " of " + f + " = " + g)
                    }
                } else $("#tooltip").remove(), e = null
            })
        },
        b = function() {
            function a(a, b) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + a + "<br/>" + Math.round(b.percent) + "%</div>"
            }
            for (var b = [], c = Math.floor(6 * Math.random()) + 3, d = 0; c > d; d++) b[d] = {
                label: "Series" + (d + 1),
                data: Math.floor(100 * Math.random()) + 1
            };
            $.plot("#placeholder-h2", b, {
                series: {
                    pie: {
                        show: !0,
                        radius: 1,
                        tilt: .5,
                        label: {
                            show: !0,
                            radius: 1,
                            formatter: a,
                            background: {
                                opacity: .8
                            }
                        },
                        combine: {
                            color: "#999",
                            threshold: .1
                        }
                    }
                },
                legend: {
                    show: !1
                }
            })
        },
        c = function() {
            function a() {
                for (c.length > 0 && (c = c.slice(1)); c.length < d;) {
                    var a = c.length > 0 ? c[c.length - 1] : 50,
                        b = a + 10 * Math.random() - 5;
                    0 > b ? b = 0 : b > 100 && (b = 100), c.push(b)
                }
                for (var e = [], f = 0; f < c.length; ++f) e.push([f, c[f]]);
                return e
            }

            function b() {
                f.setData([a()]), f.draw(), setTimeout(b, e)
            }
            var c = [],
                d = 300,
                e = 30;
            $("#updateInterval").val(e).change(function() {
                var a = $(this).val();
                a && !isNaN(+a) && (e = +a, 1 > e ? e = 1 : e > 2e3 && (e = 2e3), $(this).val("" + e))
            });
            var f = $.plot("#placeholder-h3", [a()], {
                grid: {
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                series: {
                    shadowSize: 0
                },
                yaxis: {
                    min: 0,
                    max: 100
                },
                xaxis: {
                    show: !1
                }
            });
            b()
        },
        d = function() {
            $(".sparkline_line_good span").sparkline("html", {
                type: "line",
                fillColor: "#B1FFA9",
                lineColor: "#459D1C",
                width: "50",
                height: "24"
            }), $(".sparkline_line_bad span").sparkline("html", {
                type: "line",
                fillColor: "#FFC4C7",
                lineColor: "#BA1E20",
                width: "50",
                height: "24"
            }), $(".sparkline_line_neutral span").sparkline("html", {
                type: "line",
                fillColor: "#CCCCCC",
                lineColor: "#757575",
                width: "50",
                height: "24"
            }), $(".sparkline_bar_good span").sparkline("html", {
                type: "bar",
                barColor: "#459D1C",
                barWidth: "5",
                height: "24"
            }), $(".sparkline_bar_bad span").sparkline("html", {
                type: "bar",
                barColor: "#BA1E20",
                barWidth: "5",
                height: "24"
            }), $(".sparkline_bar_neutral span").sparkline("html", {
                type: "bar",
                barColor: "#757575",
                barWidth: "5",
                height: "24"
            })
        },
        e = function() {
            (isIE8 || isIE9) && (Function.prototype.bind || (Function.prototype.bind = function(a) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var b = Array.prototype.slice.call(arguments, 1),
                    c = this,
                    d = function() {},
                    e = function() {
                        return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
                    };
                return d.prototype = this.prototype, e.prototype = new d, e
            })), $(".easy-pie-chart .bounce").easyPieChart({
                animate: 1e3,
                size: 70
            }), $(".easy-pie-chart .cpu").easyPieChart({
                animate: 1e3,
                lineWidth: 3,
                barColor: "#35aa47",
                size: 70
            })
        },
        f = function() {
            var a = $("#event-management");
            $("#event-categories div.event-category").each(function() {
                var a = {
                    title: $.trim($(this).text())
                };
                $(this).data("eventObject", a), $(this).draggable({
                    zIndex: 999,
                    revert: !0,
                    revertDuration: 50
                })
            });
            var b = new Date,
                c = b.getDate(),
                d = b.getMonth(),
                e = b.getFullYear(),
                f = "",
                g = $("#calendar").fullCalendar({
                    themeButtonIcons: {
                        prev: '<i class="fa fa-angle-left"></i>',
                        next: '<i class="fa fa-angle-right"></i>'
                    },
                    header: {
                        left: "prev,next today",
                        center: "title",
                        right: "month,agendaWeek,agendaDay"
                    },
                    events: [{
                        title: "Meeting with Boss",
                        start: new Date(e, d, 1),
                        className: "label-default"
                    }, {
                        title: "Bootstrap Seminar",
                        start: new Date(e, d, c - 5),
                        end: new Date(e, d, c - 2),
                        className: "label-teal"
                    }, {
                        title: "Lunch with Nicole",
                        start: new Date(e, d, c - 3, 12, 0),
                        className: "label-green",
                        allDay: !1
                    }],
                    editable: !0,
                    droppable: !0,
                    drop: function(a, b) {
                        var c = $(this).data("eventObject"),
                            d = $(this).attr("data-class"),
                            e = $.extend({}, c);
                        e.start = a, e.allDay = b, d && (e.className = [d]), $("#calendar").fullCalendar("renderEvent", e, !0), $("#drop-remove").is(":checked") && $(this).remove()
                    },
                    selectable: !0,
                    selectHelper: !0,
                    select: function(b, c, d) {
                        a.modal({
                            backdrop: "static"
                        }), f = $("<form></form>"), f.append("<div class='row'></div>"), f.find(".row").append("<div class='col-md-6'><div class='form-group'><label class='control-label'>New Event Name</label><input class='form-control' placeholder='Insert Event Name' type=text name='title'/></div></div>").append("<div class='col-md-6'><div class='form-group'><label class='control-label'>Category</label><select class='form-control' name='category'></select></div></div>").find("select[name='category']").append("<option value='label-default'>Work</option>").append("<option value='label-green'>Home</option>").append("<option value='label-purple'>Holidays</option>").append("<option value='label-orange'>Party</option>").append("<option value='label-yellow'>Birthday</option>").append("<option value='label-teal'>Generic</option>").append("<option value='label-beige'>To Do</option>"), a.find(".remove-event").hide().end().find(".save-event").show().end().find(".modal-body").empty().prepend(f).end().find(".save-event").unbind("click").click(function() {
                            f.submit()
                        }), a.find("form").on("submit", function() {
                            return title = f.find("input[name='title']").val(), $categoryClass = f.find("select[name='category'] option:checked").val(), null !== title && g.fullCalendar("renderEvent", {
                                title: title,
                                start: b,
                                end: c,
                                allDay: d,
                                className: $categoryClass
                            }, !0), a.modal("hide"), !1
                        }), g.fullCalendar("unselect")
                    },
                    eventClick: function(b, c, d) {
                        var e = $("<form></form>");
                        e.append("<label>Change event name</label>"), e.append("<div class='input-group'><input class='form-control' type=text value='" + b.title + "' /><span class='input-group-btn'><button type='submit' class='btn btn-success'><i class='fa fa-check'></i> Save</button></span></div>"), a.modal({
                            backdrop: "static"
                        }), a.find(".remove-event").show().end().find(".save-event").hide().end().find(".modal-body").empty().prepend(e).end().find(".remove-event").unbind("click").click(function() {
                            g.fullCalendar("removeEvents", function(a) {
                                return a._id == b._id
                            }), a.modal("hide")
                        }), a.find("form").on("submit", function() {
                            return b.title = e.find("input[type=text]").val(), g.fullCalendar("updateEvent", b), a.modal("hide"), !1
                        })
                    }
                })
        };
    return {
        init: function() {
            a(), b(), c(), d(), e(), f()
        }
    }
}();