$(function () {

    $(function () {
        $("header .menubar").click(function () {
            $(".submenu").stop().animate({ right: '0' }, 1000);
        })
        $(".submenu .close").click(function () {
            $(".submenu").stop().animate({ right: '-100%' }, 1000);
        });
    });

    $("#contents .box").on({
        mouseover: function () {
            $(this).find("#contents .box img").css({ width: '100%' })
        },
        mouseout: function () {
            $(this).find("contents .box img").css({ width: '50%' })
        }
    })
});