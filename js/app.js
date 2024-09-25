$(function () {

    $(function () {
        $("header .menubar").click(function () {
            $(".submenu").stop().animate({ right: '0' }, 1000);
        })
        $(".submenu .close").click(function () {
            $(".submenu").stop().animate({ right: '-100%' }, 1000);
        });
    });



    // main banner 슬라이드
    function slide() {
        $("main #allbanner .banner .slide_i:nth-child(1)").animate({ opacity: '0' }, 2800)
        $("main #allbanner .banner .slide_i:nth-child(2)").animate({ opacity: '1' }, 2800)
        $("main #allbanner .banner .slide_i:nth-child(3)").animate({ opacity: '0' }, 2800)
        $("main #allbanner .banner .slide_i:nth-child(4)").animate({ opacity: '0' }, 2800)

        $("main #allbanner .banner .slide_i:nth-child(1)").animate({ opacity: '0' }, 3800)
        $("main #allbanner .banner .slide_i:nth-child(2)").animate({ opacity: '0' }, 3800)
        $("main #allbanner .banner .slide_i:nth-child(3)").animate({ opacity: '1' }, 3800)
        $("main #allbanner .banner .slide_i:nth-child(4)").animate({ opacity: '0' }, 3800)

        $("main #allbanner .banner .slide_i:nth-child(1)").animate({ opacity: '0' }, 4800)
        $("main #allbanner .banner .slide_i:nth-child(2)").animate({ opacity: '0' }, 4800)
        $("main #allbanner .banner .slide_i:nth-child(3)").animate({ opacity: '0' }, 4800)
        $("main #allbanner .banner .slide_i:nth-child(4)").animate({ opacity: '1' }, 4800, slide)
    }
    slide();


    // product button
    $(function () {
        $(".product .p_header li").on({
            mouseover: function () {
                $(this).find("span").css({ width: '100%' })
            },
            mouseout: function () {
                $(this).find("span").css({ width: "0%" })
            }
        });
    });




    $(function () {
        $(".product .p_header li:nth-child(1)").on({
            click: function () {
                $(".product .allbox .box:nth-child(1)").fadeIn()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header li:nth-child(2)").on({
            click: function () {
                $(".product .allbox .box:nth-child(2)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header li:nth-child(3)").on({
            click: function () {
                $(".product .allbox .box:nth-child(3)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header li:nth-child(4)").on({
            click: function () {
                $(".product .allbox .box:nth-child(4)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header li:nth-child(5)").on({
            click: function () {
                $(".product .allbox .box:nth-child(5)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });


        $(".product .p_header li:nth-child(6)").on({
            click: function () {
                $(".product .allbox .box:nth-child(6)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });


        $(".product .p_header li:nth-child(7)").on({
            click: function () {
                $(".product .allbox .box:nth-child(7)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
            }
        });

    });




    $(function () {
        $(".product .p_header .sel option:nth-child(1)").on({
            click: function () {
                $(".product .allbox .box:nth-child(1)").fadeIn()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header .sel option:nth-child(2)").on({
            click: function () {
                $(".product .allbox .box:nth-child(2)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header .sel option:nth-child(3)").on({
            click: function () {
                $(".product .allbox .box:nth-child(3)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header .sel option:nth-child(4)").on({
            click: function () {
                $(".product .allbox .box:nth-child(4)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });


        $(".product .p_header .sel option:nth-child(5)").on({
            click: function () {
                $(".product .allbox .box:nth-child(5)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });

        $(".product .p_header .sel option:nth-child(6)").on({
            click: function () {
                $(".product .allbox .box:nth-child(6)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(7)").fadeOut()
            }
        });


        $(".product .p_header .sel option:nth-child(7)").on({
            click: function () {
                $(".product .allbox .box:nth-child(7)").fadeIn()
                $(".product .allbox .box:nth-child(1)").fadeOut()
                $(".product .allbox .box:nth-child(2)").fadeOut()
                $(".product .allbox .box:nth-child(3)").fadeOut()
                $(".product .allbox .box:nth-child(4)").fadeOut()
                $(".product .allbox .box:nth-child(5)").fadeOut()
                $(".product .allbox .box:nth-child(6)").fadeOut()
            }

        });

    });





    // store slide
    $(function () {
        $(".store .slide .slidebox").slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        cssEase: 'linear',
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }

            ]

        });
    });


});