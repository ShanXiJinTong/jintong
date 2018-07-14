<template>
<div id="Refund">
    <!--内容部分开始-->
    <div class="x-commodity">
        <img src="./img/tou.png" alt="" id="x-c-left">
        <div class="x-c-right">
            <div id="x-name"><b>潜水艇高端龙头</b></div>
            <ul id="x-li">
                <li class="x-blue" id="x-jone"><b>ECC01-001Lw</b></li>
                <li class="x-blue" id="x-jtwo">商品规格潜水艇高端龙头</li>
                <li class="x-blue" id="x-jthree">¥60.00</li>
                <li class="x-green" id="x-jfour">×1</li>
                <li class="x-green" id="x-jfive">实付款：¥60.00</li>
            </ul>
        </div>
    </div>
    <div class="tui">
        <div class="kuan">
            <div class="top">
                <div class="fang"></div>
                <h1>仅退款</h1>
            </div>
            <div class="zi">
                <h2>未收到货（包括未签收），或与卖家协商同意前提下</h2>
            </div>
        </div>

        <div class="huo">
            <div class="top">
                <div class="fang"></div>
                <h1>退货退款</h1>
            </div>
            <div class="zi">
                <h2>已收到货，需要退换已收到的货物</h2>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'Refund',
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .x-commodity{
        width: 100%;
        height:3.55rem ;
        display: flex;
        justify-content: flex-start;
        border-bottom: 0.02rem solid rgb(241,244,245);
    }
    #x-c-left{
        width:1.74rem ;
        height: 1.74rem;
        margin-right: 0.27rem;
        margin-top: 0.5rem;
    }
    .x-c-right{
        width: calc(100% - 2.01rem);
        height: 2.55rem;
        position: relative;
        margin-top: 0.5rem;
    }
    #x-name{
        width: 100%;
        font-size: 0.3rem;
        color: #4f5b64;
        text-align: left;
    }
    #x-li{
        width: 100%;
        height: 1.95rem;
        position: absolute;
        left: 0;
        top: 0.5rem;
    }
    #x-jone{
        width: 100%;
        margin-bottom: 0.1rem;
        font-size: 0.18rem;
        color: #41b2fc;
        text-align: left;
    }
    #x-jtwo{
        width: 100%;
        margin-bottom: 0.15rem;
        font-size: 0.22rem;
        color: #c9cbcc;
        text-align: left;
    }
    #x-jthree{
        width: 100%;
        font-size: 0.22rem;
        color: #646666;
        text-align: left;
    }
    #x-jfour{
        width: 100%;
        font-size: 0.22rem;
        color: #646666;
        text-align: left;
        position: absolute;
        left: calc(100% - 0.7rem);
        bottom: 0.7rem;
    }
    #x-jfive{
        width: 100%;
        font-size: 0.3rem;
        color: #fbb548;
        text-align: left;
        position: absolute;
        left: calc(100% - 2.5rem);
        bottom: 0rem;
    }
    .x-blue:before{
        content: "\02022";
        color: #41b2fc;
        margin-right: 0.1rem;
    }
    .x-green:before{
        content: "\02022";
        color: #31d094;
        margin-right: 0.1rem;
    }
    .tui{
        width: auto;
        height: 1.92rem;
        margin: 0.65rem 0.24rem 0;
    }
    .tui .kuan{
        width: 100%;
        height: 0.65rem;

    }
    .tui .kuan .top{
        width: 100%;
        height: 0.26rem;
        overflow: hidden;
    }
    .tui .kuan .top .fang{
        width: 0.1rem;
        height: 0.05rem;
        border-radius: 0.01rem;
        background: rgb(65,178,252);
        margin-top: 0.08rem;
        float: left;
    }
    .tui .kuan .top h1{
        display: block;
        margin-left: 0.1rem;
        color:rgb(65,178,252);
        font-size: 0.26rem;
        line-height: 0.26rem;
        float: left;
    }
    .tui .kuan .zi{
        width: 100%;
        height: 0.39rem;
        /*background: red;*/
    }
    .tui .kuan .zi h2{
        color:rgb(175,177,178);
        font-size:0.2rem;
        line-height: 0.2rem;
        margin-left: 0.2rem;
        margin-top: 0.15rem;
    }
    .tui .huo{
        width: 100%;
        height: 0.65rem;
        margin-top: 0.62rem;

    }
    .tui .huo .top{
        width: 100%;
        height: 0.26rem;
        overflow: hidden;
    }
    .tui .huo .top .fang{
        width: 0.1rem;
        height: 0.05rem;
        border-radius: 0.01rem;
        background: rgb(68,217,138);
        margin-top: 0.08rem;
        float: left;
    }
    .tui .huo .top h1{
        display: block;
        margin-left: 0.1rem;
        color:rgb(68,217,138);
        font-size: 0.26rem;
        line-height: 0.26rem;
        float: left;
    }
    .tui .huo .zi{
        width: 100%;
        height: 0.39rem;
        /*background: red;*/
    }
    .tui .huo .zi h2{
        color:rgb(175,177,178);
        font-size:0.2rem;
        line-height: 0.2rem;
        margin-left: 0.2rem;
        margin-top: 0.15rem;
    }
</style>
