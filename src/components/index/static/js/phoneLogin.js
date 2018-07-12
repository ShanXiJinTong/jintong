$(function () {
   let p=$('.login p');
   let box=$('.bigbox');
    p.click(function () {
       p.removeClass('hot');
        $(this).addClass('hot')
   })

    box.on('click',function () {
        box.addClass("active");
        location.href="./dingdan.html";
    })
    let fanhui = $('.title img');
    fanhui.on('click',function () {
        history.back();
    })


})