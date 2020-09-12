//Catalog
let catalog = $('.js-catalog');
catalog.on('click', function () {
    let catalogList = $(".js-catalog-list");
    if (catalogList.hasClass('displayblock')) {
        catalogList.removeClass('displayblock');

    }
    else {
        catalogList.addClass('displayblock');

    }
});

//Burger
let burger = $('.burger');
burger.on('click', function () {
    burger.toggleClass('active');
    $('body').toggleClass('lock');
    let navMenu = $('.header-mobile__nav-menu');
    navMenu.toggleClass('active');
});


//Slider
$('.hero__slider').slick({
    dots: true,
    appendDots: $('.container-slider'),
    appendArrows: $('.container-slider'),
    responsive: [
        {
            breakpoint: 1450,
            settings: {
                appendDots: $('.slider__nav-inner'),
                appendArrows: $('.slider__nav-inner')
            }
        }
    ]
});
$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    appendArrows: $('.sell-leaders__arrow-place'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.slider2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    appendArrows: $('.sales__arrow-place'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.certificates-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    appendArrows: $('.certificates__arrows'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.partners-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    appendArrows: $('.partners__arrows'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.footer-col__title').click(function () {
    $(this).toggleClass('active').next().slideToggle(150);
});

// Range in filter
$(".range__slider").slider({
    classes: {
        // 'ui-slider': 'range__track',
        'ui-slider-handle': 'range__handle',

    },
    min: 400,
    max: 9000,
   values: [400, 9000],
    slide: function (event, ui) {
        let values = $('.range__slider').slider('values');
        $('.range__edge--min').val(values[0]);
        $('.range__edge--max').val(values[1]);

    },
});

