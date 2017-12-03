$(function () {
    $height = $('.top').height()
    $('nav').css({top:$height});
    $('.main').css({top:$height});
    $(window).resize(function () {          //当浏览器大小变化时

    });
    $('#go-top').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 800);
    });
    $storyLinkPos=$('#story-link').offset().top;
    $('.story-link').click(function () {
        $('html,body').animate({scrollTop: $storyLinkPos-$height}, 800);
    });
    $('.home-link').click(function () {
        $('html,body').animate({scrollTop: 0}, 800);
    });
    $joinusLinkPos=$('#joinus-link').offset().top;
    $('.joinus-link').click(function () {
        $('html,body').animate({scrollTop: $joinusLinkPos-$height}, 800);
    });
    $contactlink=$('#contact-link').offset().top;
    $('.contact-link').click(function () {
        $('html,body').animate({scrollTop: $contactlink-$height}, 800);
    });
    $(window).scroll(function() {
        $pos = $(document).scrollTop()
        // alert($pos);
        if($pos>=$height){
            $('.top').css({opacity:'0.8'})
        }else{
            $('.top').css({opacity:'1'})
        }
    });

    $('#bars').click(function () {
        if($('nav').hasClass('close')){
            $('nav').animate({left:'0'}).removeClass('close');
            $('.main').animate({left:'39%'});
        }else{
            $('nav').animate({left:'-39%'}).addClass('close');
            $('.main').animate({left:'0'});
        }
    });
    $('.main').click(function () {
        $('nav').animate({left:'-45%'}).addClass('close');
        $('.main').animate({left:'0'});
    });
    $('nav a').each(function () {
        $(this).click(function () {
            $('nav').css({left:'-39%'}).addClass('close');
            $('.main').css({left:'0'});
        });
    });
});