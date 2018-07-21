<template>
<div id="RefundTo">
    <!--中部开始-->
    <div class="middle">
        <!--等待处理开始-->
        <div class="x-await">
            <h1 id="x-h1">等待商家处理</h1>
            <div id="x-djs">
                <img src="./img/x-d-red.png" alt="" class="x-rimg">
                还剩 <span class="x-d-time"></span>
                天   <span class="x-d-time"></span>
                时   <span class="x-d-time"></span>
                分
                <img src="./img/x-d-red.png" alt="" class="x-rimg">
            </div>
            <p class="x-content" >您已成功发起退货申请，请耐心等待商家处理，此订单已投保运费险（商家同意退货后，选择上门取件，慢必赔）。</p>
            <p class="x-content">商家同意后，请按照给出的退货地址退货，并请记录退货运单号。</p>
            <p class="x-content">如商家拒绝，您可以修改申请后再次发起，商家会重新处理</p>
            <p class="x-content">如商家超时未处理</p>
            <div id="x-dis">
                <button class="x-but x-buta">撤销</button>
                <router-link :to="{name:'AmendApplication'}">
                <button class="x-but  x-but1">修改</button>
                </router-link>
                <button class="x-but x-but2">客服</button>
            </div>
        </div>
        <!--等待处理结束-->
        <!--退款详情开始-->
        <div class="x-DR">
            <div class="x-RI">
                <img src="./img/x-dian.png" alt="" id="x-dian">
                <div class="x-ms">退款</div>
                <div class="x-ms x-ms-g">信息</div>
            </div>
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
        </div>
        <!--退款详情结束-->
    </div>
    <!--中部结束-->
    <!--底部开始-->
    <footer>
        <div class="dialog-B">联系卖家</div>
    </footer>
    <!--底部结束-->
</div>
</template>
<script>
    export default {
        name: 'RefundTo',
        data() {
            return {}
        }
    }
</script>
<style scoped>
    /*中部内容开始*/
    .middle{
        position: absolute;
        top: 0.88rem;
        bottom: 0.98rem;
        left: 0;
        width:calc(100% - 0.48rem);
        margin: 0 0.24rem;
        overflow: hidden;
    }
    /*等待处理开始*/
    .x-await{
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #x-h1{
        width: 100%;
        height: 0.74rem;
        border-bottom: 0.01rem solid #c9cbcc;
        font-size: 0.3rem;
        color: #4f5b64;
        text-align: center;
    }
    #x-dis{
        width: 100%;
        height: 1.6rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #x-djs{
        width: 100%;
        height: 0.8rem;
        margin-bottom: 0.45rem;
        font-size: 0.3rem;
        color: #4f5b64;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .x-rimg{
        width: 0.1rem;
        height: 0.07rem;
        margin:0 0.1rem;
    }
    .x-d-time{
        color: #ff6666;
        font-size: 0.3rem;
    }
    .x-content{
        width: 100%;
        margin-bottom: 0.4rem;
        color: #646666;
        font-size: 0.25rem;
        text-align: left;
        line-height: 0.3rem;
    }
    .x-but{
        width: 1.65rem;
        height: 0.6rem;
        margin-left: 0.24rem;
        background: #3bacfe;
        box-shadow: 0 0.05rem 0.12rem rgba(59,172,254,0.43);
        border-radius: 3rem;
        border: none;
        color: #FFFFFF;
        outline: none;
    }
    .x-buta{
        background: #e7f6ff;
        color: #41b2fc;
        box-shadow: none;
    }
    /*等待处理结束*/
    /*退款信息开始*/
    .middle .x-DR{
        width: 100%;
        height: auto;
    }
    .middle .x-DR .x-RI{
        width: 100%;
        height: 0.91rem;
        display: flex;
        justify-content:flex-start;
        align-items: center;
    }
    #x-dian{
        width: 0.1rem;
        height: 0.07rem;
        margin-right: 0.1rem;
    }
    .middle .x-DR .x-RI .x-ms{
        font-size: 0.26rem;
        color: #4f5b64;
    }
    .middle .x-DR .x-RI .x-ms-g{
        color: #31d094;
    }
    .middle .x-DR .x-commodity{
        width: 100%;
        height:2.93rem ;
        display: flex;
        justify-content: flex-start;
    }
    #x-c-left{
        width:1.74rem ;
        height: 1.74rem;
        margin-right: 0.27rem;
    }
    .x-c-right{
        width: calc(100% - 2.01rem);
        height: 1.74rem;
        position: relative;
    }
    #x-name{
        width: 100%;
        margin-bottom: 0.24rem;
        font-size: 0.3rem;
        color: #4f5b64;
        text-align: left;
    }
    #x-li{
        width: 100%;
        height: 1.23rem;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    #x-jone{
        width: 100%;
        margin-bottom: 0.15rem;
        font-size: 0.18rem;
        color: #41b2fc;
        text-align: left;
    }
    #x-jtwo{
        width: 100%;
        margin-bottom: 0.24rem;
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
        bottom: 0;
    }
    #x-jfive{
        width: 100%;
        font-size: 0.3rem;
        color: #fbb548;
        text-align: left;
        position: absolute;
        left: calc(100% - 2.5rem);
        bottom: -0.8rem;
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
    /*退款信息结束*/
    /*中部内容结束*/
    /*底部开始*/
    footer{
        width: 100%;
        height: 0.98rem;
        position: fixed;
        bottom: 0;
        background: #f8fcff;
    }
    .dialog-B{
        width:4.54rem;
        height: 0.6rem;
        margin: 0.25rem auto;
        border-radius:3rem;
        background: linear-gradient(to right,#27d29c,#33e171);
        box-shadow:0 0.04rem 0.2rem rgba(55,223,116,0.75);
        color: #FFFFFF;
        font-size: 0.24rem;
        text-align: center;
        line-height: 0.68rem;
    }
    /*底部结束*/
</style>
