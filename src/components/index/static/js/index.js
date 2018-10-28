$(function () {
    let img=$('.lunbo > .img > img');
    let btn=$('.lunbo > .btn > li');
    let inputimg=$('.input img');
    let input=$('.input input');
    let dingwei=$('.search span');
    let index=0;
    setInterval(move,2000);
    function move () {
        index++;

        if (index==img.length){
            index=0
        } ;
        img.each(function (index,ele) {
            $(ele).css({opacity:0})
        });
        btn.each(function (index,ele) {
            $(ele).removeClass('hot')
        })
        $(img[index]).css({opacity:1});
        $(btn[index]).addClass('hot');
    }
    inputimg.on('click',function () {
        location.href = "./sun1.html";
    })
    dingwei.on('click',function () {
        location.href = "./adress.html";
    })
    input.focus(function () {
        location.href = "./sou.html";
    })


})