<template>
<div id="OrderEvaluate">
    <div class="pingjia">
        <ul class="miaoshu">
            <li class="li1">
                <div class="left">
                    <div class="zuo">
                        <div class="wb-yuan1"></div>
                        <p>描述相符 </p>
                    </div>
                    <div class="you">
                        <div class="xing">
                            <img src="./img/wujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                    </div>
                </div>
                <span>非常差</span>
            </li>
            <li class="li2">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </li>
            <li class="li3">
                <img src="./img/xiangji.png" alt="">
            </li>
            <li class="li4">
                <span>添加图片</span>
            </li>
            <li class="li5">
                <div class="zuo5">
                    <img src="./img/huan.png" alt="">
                    <span>匿名</span>
                </div>
                <span>您的评论能帮助其他小伙伴哦</span>
            </li>
        </ul>
        <ul class="pingfen">
            <div class="dianpu">
                <div class="wb-yuan1"></div>
                <p>店铺评分</p>
            </div>
            <div class="fuwu">
                <div class="left">
                    <div class="zuo">
                        <p>物流服务</p>
                    </div>
                    <div class="you">
                        <div class="xing">
                            <img src="./img/wujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/wujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                    </div>
                </div>
                <span>不满意</span>
            </div>
            <div class="taidu">
                <div class="left">
                    <div class="zuo">
                        <p>服务态度</p>
                    </div>
                    <div class="you">
                        <div class="xing">
                            <img src="./img/wujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/wujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/wujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                        <div class="xing">
                            <img src="./img/huiwujiao.png" alt="">
                        </div>
                    </div>
                </div>
                <span>还可以</span>
            </div>
        </ul>
        <div class="di">
            <div class="fabu">发布</div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'OrderEvaluate',
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .pingjia{
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column;
        padding: 0 0.24rem;
        box-sizing: border-box;
    }
    .pingjia .miaoshu{
        width: 100%;
        height: 6.51rem;
        display: flex;
        flex-flow: column;
    }
    .pingjia .miaoshu li{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pingjia .miaoshu .li1{
        width: 100%;
        height: 1.03rem;
    }
    .pingjia .miaoshu .li1 .left{
        width: 4.33rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pingjia .miaoshu .li1 p{
        font-size: 0.22rem;
        color: #41b2fc;
    }
    .pingjia .miaoshu .li1 span{
        font-size: 0.22rem;
        color: #fbb548;
    }
    .pingjia .miaoshu .li1 .left .zuo{
        display: flex;
        align-items: center;
    }
    .pingjia .miaoshu .li1 .left .you{
        width: 2.8rem;
        height: 0.41rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .xing{
        width: 0.43rem;
        height: 0.41rem;
        display: flex;
    }
    .pingjia .miaoshu .li1 .left .you img{
        width: 0.43rem;
        height: 0.41rem;
    }
    .pingjia .miaoshu .li2{
        width: 100%;
        height: 3rem;
        background: #fff;
        border-radius: 0.1rem;
        box-shadow: 0 0.01rem 0.21rem rgba(223,223,223,0.43);
    }
    .pingjia .miaoshu .li3{
        width: 1.2rem;
        height: 1.2rem;
        margin-top: 0.24rem;
        background: #fff;
        box-shadow: 0 0.01rem 0.21rem rgba(223,223,223,0.75);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pingjia .miaoshu .li3 img{
        width: 0.49rem;
        height: 0.35rem;
    }
    .pingjia .miaoshu .li4 span{
        font-size: 0.22rem;
        color: #c9cbcc;
        margin: 0.17rem;
    }
    .pingjia .miaoshu .li5{
        width: 100%;
        height: 0.24rem;
        margin-top: 0.24rem;
    }
    .pingjia .miaoshu .li5 span{
        font-size: 0.22rem;
        color: #c9cbcc;
    }
    .pingjia .miaoshu .li5 .zuo5{
        width: 0.8rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pingjia .miaoshu .li5 .zuo5 img{
        width: 0.24rem;
        height: 0.24rem;
    }
    .pingjia .pingfen{
        width: 100%;
        height: 2.91rem;
        display: flex;
        flex-flow: column;
    }
    .pingjia .pingfen .dianpu{
        width: 100%;
        height: 0.86rem;
        margin-top: 0.24rem;
        display: flex;
        align-items: center;
    }
    .pingjia .pingfen .dianpu p{
        font-size: 0.26rem;
        color: #41b2fc;
    }
    .pingjia .pingfen .fuwu{
        width: 100%;
        height: 0.41rem;
        display: flex;
        justify-content: space-between;
    }
    .pingjia .pingfen .fuwu p{
        font-size: 0.22rem;
        color: #c9cbcc;
        margin-left: 0.12rem;
    }
    .pingjia .pingfen .fuwu span{
        font-size: 0.22rem;
        color: #fbb548;
    }
    .pingjia .pingfen .fuwu .left{
        width: 4.33rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .pingjia .pingfen .fuwu .left .zuo{
        display: flex;
    }
    .pingjia .pingfen .fuwu .left .you{
        width: 2.8rem;
        height: 0.41rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pingjia .pingfen .fuwu .left .you img{
        width: 0.43rem;
        height: 0.41rem;
    }
    .pingjia .pingfen .taidu{
        width: 100%;
        height: 0.41rem;
        margin-top: 0.24rem;
        display: flex;
        justify-content: space-between;
    }
    .pingjia .pingfen .taidu p{
        font-size: 0.22rem;
        color: #c9cbcc;
        margin-left: 0.12rem;
    }
    .pingjia .pingfen .taidu span{
        font-size: 0.22rem;
        color: #fbb548;
    }
    .pingjia .pingfen .taidu .left{
        width: 4.33rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .pingjia .pingfen .taidu .left .zuo{
        display: flex;
    }
    .pingjia .pingfen .taidu .left .you{
        width: 2.8rem;
        height: 0.41rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pingjia .pingfen .taidu .left .you img{
        width: 0.43rem;
        height: 0.41rem;
    }
    .wb-yuan1 {
        width: 0.05rem;
        height: 0.05rem;
        border-radius: 50%;
        background: #44b5ff;
        box-shadow: 0 0.02rem 0.5rem rgba(68, 181, 255, 0.43);
        margin-right: 0.1rem;
    }
    .di{
        width: 100%;
        height: 2.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .di .fabu{
        width: 3.8rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        font-size: 0.18rem;
        text-align: center;
        line-height: 0.6rem;
        color: #ffffff;
        background: linear-gradient(90deg,#37e06f,#32d69a);
        box-shadow: 0 0.04rem 0.2rem rgba(55,223,116,0.75);
    }
    textarea{
       width: 100%;
        height: 100%;
        border-radius: 0.1rem;
        padding:0.2rem;
        box-sizing: border-box;
        resize: none;
        outline: none;
    }
</style>
