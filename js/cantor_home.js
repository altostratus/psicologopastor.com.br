jQuery(function ($) {

    $(function () {
        
        // carousel nos pastores da home
        $('.lista-cantores').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 7,
            slidesToScroll: 7,
            prevArrow: $('.move-cantores-left'),
            nextArrow: $('.move-cantores-right'),
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });      
        
    });
    
});