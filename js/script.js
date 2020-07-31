// Hrefs Scrolling

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

// Video Play Button

$('a.play-video').click(function(){
    $('.video').css({ 'opacity': '1', 'visibility': 'visible'});
    return false;
});
$('.video .close').click(function(){
    $('.video').css({'opacity': '0', 'visibility': 'hidden'});
    return false;
});

// Reviews Slider

$(document).ready(function() {
    $(".slider").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find("span").first().addClass("on");
    });
});
function sliderJS (obj, sl) {
    var ul = $(sl).find("ul");
    var bl = $(sl).find("li.slider"+obj);
    var step = $(bl).width();
    $(ul).animate({marginLeft: "-"+step*obj}, 500);
}
$(document).on("click", ".slider .nav span", function() {
    var sl = $(this).closest(".slider");
    $(sl).find("span").removeClass("on");
    $(this).addClass("on");
    var obj = $(this).attr("rel");
    sliderJS(obj, sl);
    return false;
});

// Transplation To Other Page

$('a.new-page').click(function (e) {
    e.preventDefault();
    $('.curtain').css('transform', 'translateY(0)');
    let href = $(this).attr('href');
    setTimeout(function () {
        $(location).attr('href', href);
    }, 1500);
});

// Image Large Click

$('.gallery .item').click(function(){
    let src = $(this).css('background-image');
    $('.img-big .img').css('background-image', src);
    $('.img-big').css({ 'opacity': '1', 'visibility': 'visible'});
    return false;
});
$('.img-big .close').click(function(){
    $('.img-big').css({'opacity': '0', 'visibility': 'hidden'});
    return false;
});