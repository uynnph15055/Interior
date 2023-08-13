$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
});

$("#back-top").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
});

 $(document).ready(function() {
    let countClick = 1;
    $('#search-all-text').on('click' , function(){
        countClick++;
        if(countClick % 2 == 0){
            $(this).find('.header__main-in-search-select-cate').removeClass('d-hide');
        }else{
            $(this).find('.header__main-in-search-select-cate').addClass('d-hide');
        }
    });

    $('.header__main-in-search-select-cate .item').on('click', function(){
        $('.all-text').text($(this).text());
        $('#cate-value').val($(this).text());
    });
 });
