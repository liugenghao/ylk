$(function () {
    $height = $('.top').height()
    $('nav').css({top:$height});
    $('.main').css({top:$height});
    $(window).resize(function () {          //当浏览器大小变化时

    });
    $storyLinkPos=$('#story-link').offset().top;
    $joinusLinkPos=$('#joinus-link').offset().top;
    $contactlink=$('#contact-link').offset().top;
    $('#go-top').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 800,function () {
            $('nav a').removeClass('actived');
            $('.home-link').addClass('actived')
        });
    });
    $('.story-link').click(function () {
        $('html,body').animate({scrollTop: $storyLinkPos-$height}, 800,function () {
            $('nav a').removeClass('actived');
            $('.story-link').addClass('actived')
        });
    });
    $('.home-link').click(function () {
        $('html,body').animate({scrollTop: 0}, 800,function () {
            $('nav a').removeClass('actived');
            $('.home-link').addClass('actived')
        });
    });
    $('.joinus-link').click(function () {
        $('html,body').animate({scrollTop: $joinusLinkPos-$height}, 800,function () {
            $('nav a').removeClass('actived');
            $('.joinus-link').addClass('actived')
        });
    });
    $('.contact-link').click(function () {
        $('html,body').animate({scrollTop: $contactlink-$height}, 800,function(){
            $('nav a').removeClass('actived');
            $('.contact-link').addClass('actived')
        });
    });
    $(window).scroll(function() {
        $pos = $(document).scrollTop()
        // alert($pos);
        if($pos>$height){
            $('.top').css({opacity:'0.8'})
            if($pos>=$storyLinkPos-$height&$pos<$joinusLinkPos-$height){
                $('nav a').removeClass('actived');
                $('.story-link').addClass('actived')
            }else if($pos>=$joinusLinkPos-$height){
                $('nav a').removeClass('actived');
                $('.joinus-link').addClass('actived')
            }
        }else {
            $('.top').css({opacity:'1'})
            $('nav a').removeClass('actived');
            $('.home-link').addClass('actived')
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
    $('footer').click(function () {
        $('nav').animate({left:'-45%'}).addClass('close');
        $('.main').animate({left:'0'});
    });
    $('nav a').each(function () {
        $(this).click(function () {
            $('nav').animate({left:'-39%'},600).addClass('close');
            $('.main').animate({left:'0'},600);
            // $('nav a').removeClass('actived');
            // $(this).addClass('actived')
        });
    });
});