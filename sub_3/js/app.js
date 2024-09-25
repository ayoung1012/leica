$(function(){

    $(function(){
        $("header .menubar").click(function(){
            $(".submenu").stop().animate({right:'0'},1000);
        })
        $(".submenu .close").click(function(){
            $(".submenu").stop().animate({right:'-100%'},1000);
        });
    });
    
    })
    $(function(){
        $("#academy .allbox").slick({
            slide:'none',
            arrows:'none',
            responsive: [
                {
                    breakpoint:767,
                    settings: {
                        slide:'div',
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });