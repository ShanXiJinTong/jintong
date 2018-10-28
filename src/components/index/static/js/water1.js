$(function () {
    let zonghe=$('.zonghe');
    let expand=$('.expand')
    let zhezhao=$('.zhezhao')
    let fanhui = $('.top .title img');
    let lis=$('.xuanze>li')
    let list = $('.list li');
    let span=$('.xuanze>li>span')
    let is=$('.xuanze>li>i')
    lis.on('click',function () {
        span.removeClass('hot')
        $(this).children('span').addClass('hot')
        is.removeClass('hot')
        $(this).children('i').addClass('hot')
    })
    zonghe.on('click',function () {
        zhezhao.toggle();
        expand.slideToggle(300);
    })
    fanhui.on('click',function () {
        history.back();
    })
    list.on('click',function () {
        location.href="./shopdetail.html";
    })

})