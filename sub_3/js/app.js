$(function(){
    
    let slider = $("#academy .allbox");
    let slickOptions = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    $(window).on('load resize', function(){
        if($(window).width() > 575){
            slider.slick('unslick');            
        }else{
            slider.not('.slick-initialized').slick(slickOptions);
        }
    })
});