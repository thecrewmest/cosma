var isIE8 = !1,
    isIE9 = !1,
    $windowWidth, $windowHeight, $pageArea, isMobile = !1;
! function(a, b) {
    var c = function(a, b, c) {
        var d;
        return function() {
            function e() {
                c || a.apply(f, g), d = null
            }
            var f = this,
                g = arguments;
            d ? clearTimeout(d) : c && a.apply(f, g), d = setTimeout(e, b || 100)
        }
    };
    jQuery.fn[b] = function(a) {
        return a ? this.on("resize", c(a)) : this.trigger(b)
    }
}(jQuery, "clipresize");
var Main = function() {
    var a = function() {
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var a = new Number(RegExp.$1);
                8 == a ? isIE8 = !0 : 9 == a && (isIE9 = !0)
            }
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (isMobile = !0)
        },
        b = function() {
            $windowWidth = $(window).width(), $windowHeight = $(window).height(), $pageArea = $windowHeight - $("body > .navbar").outerHeight() - $("body > .footer").outerHeight(), isMobile || $(".sidebar-search input").removeAttr("style").removeClass("open"), c()
        },
        c = function() {
            mainContainer = $(".main-content > .container"), mainNavigation = $(".main-navigation"), 760 > $pageArea && ($pageArea = 760), mainContainer.outerHeight() < mainNavigation.outerHeight() && mainNavigation.outerHeight() > $pageArea ? mainContainer.css("min-height", mainNavigation.outerHeight()) : mainContainer.css("min-height", $pageArea), 768 > $windowWidth && mainNavigation.css("min-height", $windowHeight - $("body > .navbar").outerHeight()), $("#page-sidebar .sidebar-wrapper").css("height", $windowHeight - $("body > .navbar").outerHeight()).scrollTop(0).perfectScrollbar("update")
        },
        d = function() {
            $(".todo-actions").length && $(".todo-actions").click(function() {
                return $(this).find("i").hasClass("fa-square-o") || $(this).find("i").hasClass("icon-check-empty") ? ($(this).find("i").hasClass("fa") ? $(this).find("i").removeClass("fa-square-o").addClass("fa-check-square-o") : $(this).find("i").removeClass("icon-check-empty").addClass("fa fa-check-square-o"), $(this).parent().find("span").css({
                    opacity: .25
                }), $(this).parent().find(".desc").css("text-decoration", "line-through")) : ($(this).find("i").removeClass("fa-check-square-o").addClass("fa-square-o"), $(this).parent().find("span").css({
                    opacity: 1
                }), $(this).parent().find(".desc").css("text-decoration", "none")), !1
            })
        },
        e = function() {
            $(".tooltips").length && $(".tooltips").tooltip()
        },
        f = function() {
            $(".sb-toggle").on("click", function(a) {
                $("body").hasClass("rtl") ? $(this).hasClass("open") ? ($(this).not(".sidebar-toggler ").find(".fa-outdent").removeClass("fa-outdent").addClass("fa-indent"), $(".sb-toggle").removeClass("open"), $("#page-sidebar").css({
                    left: -$("#page-sidebar").outerWidth()
                })) : ($(this).not(".sidebar-toggler ").find(".fa-indent").removeClass("fa-indent").addClass("fa-outdent"), $(".sb-toggle").addClass("open"), $("#page-sidebar").css({
                    left: 0
                })) : $(this).hasClass("open") ? ($(this).not(".sidebar-toggler ").find(".fa-indent").removeClass("fa-indent").addClass("fa-outdent"), $(".sb-toggle").removeClass("open"), $("#page-sidebar").css({
                    right: -$("#page-sidebar").outerWidth()
                })) : ($(this).not(".sidebar-toggler ").find(".fa-outdent").removeClass("fa-outdent").addClass("fa-indent"), $(".sb-toggle").addClass("open"), $("#page-sidebar").css({
                    right: 0
                })), a.preventDefault()
            }), $("#page-sidebar .media a").on("click", function(a) {
                $(this).closest(".tab-pane").css({
                    right: $("#page-sidebar").outerWidth()
                }), a.preventDefault()
            }), $("#page-sidebar .sidebar-back").on("click", function(a) {
                $(this).closest(".tab-pane").css({
                    right: 0
                }), a.preventDefault()
            }), $("#page-sidebar .sidebar-wrapper").perfectScrollbar({
                wheelSpeed: 50,
                minScrollbarLength: 20,
                suppressScrollX: !0
            }), $("#sidebar-tab a").on("shown.bs.tab", function(a) {
                $("#page-sidebar .sidebar-wrapper").perfectScrollbar("update")
            })
        },
        g = function() {
            $(".popovers").length && $(".popovers").popover()
        },
        h = function() {
            $(".show-tab").length && $(".show-tab").on("click", function(a) {
                a.preventDefault();
                var b = $(this).attr("href");
                $(b).length && $('a[href="' + b + '"]').tab("show")
            }), p("tabId").length && $('a[href="#' + p("tabId") + '"]').tab("show")
        },
        i = function() {
            $(".panel-scroll").length && $(".panel-scroll").perfectScrollbar({
                wheelSpeed: 50,
                minScrollbarLength: 20,
                suppressScrollX: !0
            })
        },
        j = function() {
            $(".accordion").length && $(".accordion .panel-collapse").each(function() {
                $(this).hasClass("in") || $(this).prev(".panel-heading").find(".accordion-toggle").addClass("collapsed")
            }), $(".accordion").collapse().height("auto");
            $(".accordion .accordion-toggle").on("click", function() {
                currentTab = $(this), $("html,body").animate({
                    scrollTop: currentTab.offset().top - 100
                }, 1e3)
            })
        },
        k = function() {
            $(".navigation-toggler").on("click", function() {
                $("body").hasClass("navigation-small") ? $("body").removeClass("navigation-small") : $("body").addClass("navigation-small")
            })
        },
        l = function() {
            $(".panel-tools .panel-expand").on("click", function(a) {
                $(".panel-tools a").not(this).hide(), $("body").append('<div class="full-white-backdrop"></div>'), $(".main-container").removeAttr("style"), backdrop = $(".full-white-backdrop"), wbox = $(this).parents(".panel"), wbox.removeAttr("style"), wbox.hasClass("panel-full-screen") ? backdrop.fadeIn(200, function() {
                    $(".panel-tools a").show(), wbox.removeClass("panel-full-screen"), backdrop.fadeOut(200, function() {
                        backdrop.remove()
                    })
                }) : ($("body").append('<div class="full-white-backdrop"></div>'), backdrop.fadeIn(200, function() {
                    $(".main-container").css({
                        "max-height": $(window).outerHeight() - $("header").outerHeight() - $(".footer").outerHeight() - 100,
                        overflow: "hidden"
                    }), backdrop.fadeOut(200), backdrop.remove(), wbox.addClass("panel-full-screen").css({
                        "max-height": $(window).height(),
                        overflow: "auto"
                    })
                }))
            }), $(".panel-tools .panel-close").on("click", function(a) {
                $(this).parents(".panel").remove(), a.preventDefault()
            }), $(".panel-tools .panel-refresh").on("click", function(a) {
                var b = $(this).parents(".panel");
                b.block({
                    overlayCSS: {
                        backgroundColor: "#fff"
                    },
                    message: '<img src="assets/images/loading.gif" /> Just a moment...',
                    css: {
                        border: "none",
                        color: "#333",
                        background: "none"
                    }
                }), window.setTimeout(function() {
                    b.unblock()
                }, 1e3), a.preventDefault()
            }), $(".panel-tools .panel-collapse").on("click", function(a) {
                a.preventDefault();
                var b = jQuery(this).parent().closest(".panel").children(".panel-body");
                $(this).hasClass("collapses") ? ($(this).addClass("expand").removeClass("collapses"), b.slideUp(200)) : ($(this).addClass("collapses").removeClass("expand"), b.slideDown(200))
            })
        },
        m = function() {
            $(".main-navigation-menu li.active").addClass("open"), $(".main-navigation-menu > li a").on("click", function() {
                $(this).parent().children("ul").hasClass("sub-menu") && (!$("body").hasClass("navigation-small") || 767 > $windowWidth || !$(this).parent().parent().hasClass("main-navigation-menu")) && ($(this).parent().hasClass("open") ? $(this).parent().hasClass("active") ? $(this).parent().parent().children("li.open").removeClass("open").children("ul").slideUp(200, function() {
                    c()
                }) : $(this).parent().parent().children("li.open").not($(".main-navigation-menu > li.active")).removeClass("open").children("ul").slideUp(200, function() {
                    c()
                }) : ($(this).parent().addClass("open"), $(this).parent().parent().children("li.open").not($(this).parent()).not($(".main-navigation-menu > li.active")).removeClass("open").children("ul").slideUp(200), $(this).parent().children("ul").slideDown(200, function() {
                    c()
                })))
            })
        },
        n = function() {
            $(".go-top").on("click", function(a) {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow"), a.preventDefault()
            })
        },
        o = function() {
            $(".dropdown-menu.dropdown-enduring").length && $(".dropdown-menu.dropdown-enduring").click(function(a) {
                a.stopPropagation()
            })
        },
        p = function(a) {
            a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
                c = b.exec(location.search);
            return null == c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
        },
        q = function() {
        },
        r = function() {
            var a = $(".sidebar-search input"),
                b = $(".sidebar-search button");
            $(".sidebar-search");
            a.attr("data-default", $(a).outerWidth()).focus(function() {
                $(this).animate({
                    width: 200
                }, 200)
            }).blur(function() {
                "" == $(this).val() && ($(this).hasClass("open") ? $(this).animate({
                    width: 0,
                    opacity: 0
                }, 200, function() {
                    $(this).hide()
                }) : $(this).animate({
                    width: $(this).attr("data-default")
                }, 200))
            }), b.on("click", function() {
                if ($(a).is(":hidden")) $(a).addClass("open").css({
                    width: 0,
                    opacity: 0
                }).show().animate({
                    width: 200,
                    opacity: 1
                }, 200).focus();
                else if ($(a).hasClass("open") && "" == $(a).val()) $(a).removeClass("open").animate({
                    width: 0,
                    opacity: 0
                }, 200, function() {
                    $(this).hide()
                });
                else {
                    if ("" != $(a).val()) return;
                    $(a).focus()
                }
                return !1
            })
        },
        s = function() {
            $(".style-toggle").on("click", function() {
                $("#style_selector").toggleClass("close-style"), $(this).hasClass("open") ? $(this).removeClass("open").addClass("close") : $(this).removeClass("close").addClass("open")
            }), t(), v(), w(), x(), y(), u()
        };
    $(".drop-down-wrapper").perfectScrollbar({
        wheelSpeed: 50,
        minScrollbarLength: 20,
        suppressScrollX: !0
    }), $(".navbar-tools .dropdown").on("shown.bs.dropdown", function() {
        $(this).find(".drop-down-wrapper").scrollTop(0).perfectScrollbar("update")
    });
    var t = function() {
            $(".icons-color a").on("click", function() {
                return $(".icons-color img").each(function() {
                    $(this).removeClass("active")
                }), $(this).find("img").addClass("active"), "stylesheet/less" == $("#skin_color").attr("rel") && ($("#skin_color").next("style").remove(), $("#skin_color").attr("rel", "stylesheet")), $("#skin_color").attr("href", "assets/css/theme/" + $(this).attr("id") + ".min.css"), !1
            })
        },
        u = function() {
            $(".boxed-patterns a").on("click", function() {
                if ($("body").hasClass("layout-boxed")) {
                    var a = $("body").attr("class").split(" ").filter(function(a) {
                        return -1 === a.indexOf("bg_style_") ? a : ""
                    });
                    $("body").attr("class", a.join(" ")), $(".boxed-patterns img").each(function() {
                        $(this).removeClass("active")
                    }), $(this).find("img").addClass("active"), $("body").addClass($(this).attr("id"))
                } else swal({
                    title: "Style selector",
                    text: "Select boxed layout!",
                    type: "error"
                });
                return !1
            })
        },
        v = function() {
            $('select[name="layout"]').change(function() {
                "boxed" == $('select[name="layout"] option:selected').val() ? $("body").addClass("layout-boxed") : $("body").removeClass("layout-boxed")
            })
        },
        w = function() {
            $('select[name="header"]').change(function() {
                "default" == $('select[name="header"] option:selected').val() ? $("body").addClass("header-default") : $("body").removeClass("header-default")
            })
        },
        x = function() {
            $('select[name="footer"]').change(function() {
                "fixed" == $('select[name="footer"] option:selected').val() ? $("body").addClass("footer-fixed") : $("body").removeClass("footer-fixed")
            })
        },
        y = function() {
            $('select[name="orientation"]').change(function() {
                "rtl" == $('select[name="orientation"] option:selected').val() ? ($("body").addClass("rtl"), $("head").append('<link title="rtl" href="assets/css/rtl-version.min.css" rel="stylesheet" />')) : ($("body").removeClass("rtl"), $('link[title="rtl"]').remove())
            })
        },
        z = function(a, c, d) {
            $(window).clipresize(function() {
                b()
            })
        },
        A = function() {
            $(".save_style").on("click", function() {
                var a = new Object;
                $("body").hasClass("rtl") ? a.rtl = !0 : a.rtl = !1, $("body").hasClass("layout-boxed") ? (a.layoutBoxed = !0, $("body[class]").filter(function() {
                    for (var b = this.className.split(/\s+/), c = 0; c < b.length; ++c) "bg_style_" === b[c].substr(0, 9) && (a.bgStyle = b[c])
                })) : a.layoutBoxed = !1, $("body").hasClass("header-default") ? a.headerDefault = !0 : a.headerDefault = !1, $("body").hasClass("footer-fixed") ? a.footerDefault = !1 : a.footerDefault = !0, a.skinClass = $("#skin_color").attr("href"), $.cookie("clip-setting", JSON.stringify(a));
                var b = $("#style_selector_container");
                return b.block({
                    overlayCSS: {
                        backgroundColor: "#fff"
                    },
                    message: '<img src="assets/images/loading.gif" /> Just a moment...',
                    css: {
                        border: "none",
                        color: "#333",
                        background: "none"
                    }
                }), window.setTimeout(function() {
                    b.unblock()
                }, 1e3), !1
            })
        },
        B = function() {
            if ($.cookie("clip-setting")) {
                var a = jQuery.parseJSON($.cookie("clip-setting"));
                a.layoutBoxed && ($("body").addClass("layout-boxed"), $('#style_selector select[name="layout"]').find('option[value="boxed"]').attr("selected", "true")), a.headerDefault && ($("body").addClass("header-default"), $('#style_selector select[name="header"]').find('option[value="default"]').attr("selected", "true")), a.footerDefault || ($("body").addClass("footer-fixed"), $('#style_selector select[name="footer"]').find('option[value="fixed"]').attr("selected", "true")), $("#style_selector").length && $("#skin_color").attr("href", a.skinClass), a.rtl && ($('#style_selector select[name="orientation"]').find('option[value="rtl"]').attr("selected", "true"), $("body").addClass("rtl"), $("head").append('<link title="rtl" href="assets/css/rtl-version.min.css" rel="stylesheet" />')), $("body").addClass(a.bgStyle)
            } else D()
        },
        C = function() {
            $(".clear_style").on("click", function() {
                return $.removeCookie("clip-setting"), $("body").removeClass("layout-boxed header-default footer-fixed"), $("body")[0].className = $("body")[0].className.replace(/\bbg_style_.*?\b/g, ""), $(".icons-color img").first().trigger("click"), D(), location.reload(), !1
            })
        },
        D = function() {
            $('#style_selector select[name="layout"]').val("default"), $('#style_selector select[name="header"]').val("fixed"), $('#style_selector select[name="footer"]').val("default"), $("		.boxed-patterns img").removeClass("active")
        },
        E = function() {
            var a = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
            "" == a && (a = "index.html"), $(".main-navigation-menu li a").each(function() {
                $(this).attr("href") != a && "" != $(this).attr("href") || ($(this).closest("ul").hasClass("sub-menu") ? $(this).parent().addClass("active open").closest("ul").parent().addClass("active open") : $(this).parent().addClass("active open"))
            })
        },
        F = function() {
            $(".set-boxed-layout").on("click", function() {
                return $("body").addClass("layout-boxed"), !1
            }), $(".set-footer-fixed").on("click", function() {
                return $("body").addClass("footer-fixed"), !1
            }), $(".close-sidebar-left").on("click", function() {
                return $("body").addClass("navigation-small"), !1
            })
        };
    return {
        init: function() {
            z(), a(), s(), r(), b(), d(), k(), m(), n(), l(), o(), e(), g(), i(), h(), j(), q(), A(), B(), C(), f(), F(), E()
        }
    }
}();