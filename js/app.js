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