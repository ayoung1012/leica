$(function(){
    $("header .menubar").click(function(){
        $(".submenu").stop().animate({right:'0'},1000);
    })
    $(".submenu .close").click(function(){
        $(".submenu").stop().animate({right:'-100%'},1000);
    });
});

$(function(){
    // $(".box").on({
    //     mouseover:function(){
    //         $(this).find(".all").stop().slideDown();
    //     },
    //     mouseout:function(){
    //         $(this).find(".all").stop().slideUp();
    //     }
    // });

$(document).ready(function(){
    $("h2").click(function(){
        $(this).next(".all").toggleClass("all_r");
    });
});

});