$('.banner').slick({
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});

// Slider product page home
$('.slider-padding').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.button-prev'),
    nextArrow: $('.button-next')
});

// Slider cate product page product
$('.content__product-box').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('#button-slider-cate-prev'),
    nextArrow: $('#button-slider-cate-next')
});



