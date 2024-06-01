$(function () {




    // main banner 슬라이드
    function slide() {
        $("main .allbanner .banner .slide_i:nth-child(1)").animate({ opacity: '0' }, 2800)
        $("main .allbanner .banner .slide_i:nth-child(2)").animate({ opacity: '1' }, 2800)
        $("main .allbanner .banner .slide_i:nth-child(3)").animate({ opacity: '0' }, 2800)
        $("main .allbanner .banner .slide_i:nth-child(4)").animate({ opacity: '0' }, 2800)

        $("main .allbanner .banner .slide_i:nth-child(1)").animate({ opacity: '0' }, 3800)
        $("main .allbanner .banner .slide_i:nth-child(2)").animate({ opacity: '0' }, 3800)
        $("main .allbanner .banner .slide_i:nth-child(3)").animate({ opacity: '1' }, 3800)
        $("main .allbanner .banner .slide_i:nth-child(4)").animate({ opacity: '0' }, 3800)

        $("main .allbanner .banner .slide_i:nth-child(1)").animate({ opacity: '0' }, 4800)
        $("main .allbanner .banner .slide_i:nth-child(2)").animate({ opacity: '0' }, 4800)
        $("main .allbanner .banner .slide_i:nth-child(3)").animate({ opacity: '0' }, 4800)
        $("main .allbanner .banner .slide_i:nth-child(4)").animate({ opacity: '1' }, 4800, slide)
    }
    slide();



    // product 클릭시 상품 바뀌는거
    $(".product .p_header .pro_menu ul li:nth-child(1)").click(function () {
        $(".product .p_header .pro_menu ul li:nth-child(1) span").animate().css({width:'60px'});
        $(".product .p_header .pro_menu ul li:nth-child(2) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(3) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(4) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(5) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(6) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(7) span").animate().css({width:'0px'});
        $(".product .m_box:nth-child(1)").animate().css({ display: 'block' });
        $(".product .m_box:nth-child(2)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(3)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(4)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(5)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(6)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(7)").animate().css({ display: 'none' });
    });

    $(".product .p_header .pro_menu ul li:nth-child(2)").click(function () {
        $(".product .p_header .pro_menu ul li:nth-child(2) span").animate().css({width:'60px'});
        $(".product .p_header .pro_menu ul li:nth-child(1) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(3) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(4) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(5) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(6) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(7) span").animate().css({width:'0px'});
        $(".product .m_box:nth-child(2)").animate().css({ display: 'block' });
        $(".product .m_box:nth-child(1)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(3)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(4)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(5)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(6)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(7)").animate().css({ display: 'none' });
    });

    $(".product .p_header .pro_menu ul li:nth-child(3)").click(function () {
        $(".product .p_header .pro_menu ul li:nth-child(3) span").animate().css({width:'60px'});
        $(".product .p_header .pro_menu ul li:nth-child(1) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(2) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(4) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(5) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(6) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(7) span").animate().css({width:'0px'});
        $(".product .m_box:nth-child(3)").animate().css({ display: 'block' });
        $(".product .m_box:nth-child(1)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(2)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(4)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(5)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(6)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(7)").animate().css({ display: 'none' });
    });

    $(".product .p_header .pro_menu ul li:nth-child(4)").click(function () {
        $(".product .p_header .pro_menu ul li:nth-child(4) span").animate().css({width:'60px'});
        $(".product .p_header .pro_menu ul li:nth-child(1) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(2) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(3) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(5) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(6) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(7) span").animate().css({width:'0px'});
        $(".product .m_box:nth-child(4)").animate().css({ display: 'block' });
        $(".product .m_box:nth-child(1)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(2)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(3)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(5)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(6)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(7)").animate().css({ display: 'none' });
    });

    $(".product .p_header .pro_menu ul li:nth-child(5)").click(function () {
        $(".product .p_header .pro_menu ul li:nth-child(5) span").animate().css({width:'60px'});
        $(".product .p_header .pro_menu ul li:nth-child(1) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(2) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(3) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(4) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(6) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(7) span").animate().css({width:'0px'});
        $(".product .m_box:nth-child(5)").animate().css({ display: 'block' });
        $(".product .m_box:nth-child(1)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(2)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(3)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(4)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(6)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(7)").animate().css({ display: 'none' });
    });

    $(".product .p_header .pro_menu ul li:nth-child(6)").click(function () {
        $(".product .p_header .pro_menu ul li:nth-child(6) span").animate().css({width:'60px'});
        $(".product .p_header .pro_menu ul li:nth-child(1) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(2) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(3) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(4) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(5) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(7) span").animate().css({width:'0px'});
        $(".product .m_box:nth-child(6)").animate().css({ display: 'block' });
        $(".product .m_box:nth-child(1)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(2)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(3)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(4)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(5)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(7)").animate().css({ display: 'none' });
    });

    $(".product .p_header .pro_menu ul li:nth-child(7)").click(function () {
        $(".product .p_header .pro_menu ul li:nth-child(7) span").animate().css({width:'60px'});
        $(".product .p_header .pro_menu ul li:nth-child(1) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(2) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(3) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(4) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(5) span").animate().css({width:'0px'});
        $(".product .p_header .pro_menu ul li:nth-child(6) span").animate().css({width:'0px'});
        $(".product .m_box:nth-child(7)").animate().css({ display: 'block' });
        $(".product .m_box:nth-child(1)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(2)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(3)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(4)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(5)").animate().css({ display: 'none' });
        $(".product .m_box:nth-child(6)").animate().css({ display: 'none' });
    });

    $(function () {
        $(".store .slide .slidebox").slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 0,
                        slidesToScroll: 0,
                        infinite: true,
                    }
                }

            ]

        });
    })


});