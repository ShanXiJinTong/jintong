<template>
<div id="WaitZz">
    <div class="main">
        <div class="list">
            <div class="left">
                <div class="yuanhuan yh1">
                    <div class="yuan yu1"></div>
                </div>
                <div class="xian xian1"></div>
                <div class="yuanhuan">
                    <div class="yuan"></div>
                </div>
                <div class="xian"></div>
                <div class="yuanhuan">
                    <div class="yuan"></div>
                </div>
            </div>
            <div class="right">
                <div class="box">
                    <span class="title">等待商家接单</span>
                    <span class="content">商家最晚将在2018年05月29日&nbsp14:15确认您的订单</span>
                    <div class="data">
                        <div class="img"></div>
                        <span>2018年5月29日&nbsp14:15</span>
                    </div>
                </div>
                <div class="box">
                    <span class="title1">订单支付成功</span>
                    <span class="content1">请耐心等待商家上门</span>
                    <div class="data">
                        <div class="img"></div>
                        <span>2018年5月29日&nbsp14:15</span>
                    </div>
                </div>
                <div class="box">
                    <span class="title1">订单提交成功</span>
                    <span class="content1">订单编号：58DOP0O358088</span>
                    <div class="data">
                        <div class="img"></div>
                        <span>2018年5月29日&nbsp14:15</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <button class="button">联系客服</button>
</div>
</template>
<script>
    export default {
        name: 'WaitZz',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('订单');
        }
    }
</script>
<style scoped>
    .main{
        padding: 0.24rem;
        box-sizing: border-box;
        /*height:100% ;*/
    }
    .list{
        display: flex;
        flex-direction: row;
    }
    .list .left{
        margin-top: 0.1rem;
        width: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
    }
    .left .yuanhuan{
        width: 0.25rem;
        height: 0.25rem;
        border-radius: 50%;
        border: 0.04rem solid #e5e5e5;
        box-sizing: border-box;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .left .yh1{
        border: 0.04rem solid #36a8fe;
    }
    .yuanhuan .yuan{
        width:0.09rem ;
        height: 0.09rem;
        background: #e5e5e5;
        border-radius: 50%;

    }
    .yuanhuan .yu1{
        background: #fbb548;
    }
    .list .left .xian{
        width: 0.02rem;
        height: 1.5rem;
        background: #e5e5e5;
    }
    .list .left .xian1{
        height: 1.45rem;
    }
    .list .right{
        flex-grow: 1;
        /*background: #41b2fc;*/
        margin-left: 0.3rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .list .right .box{
        width: 100%;
        height: 1.12rem;
        /*background: red;*/
        display: flex;
        flex-direction: column;
        margin-bottom: 0.6rem;
    }
    .list .right .box .title{
        font-size: 0.3rem;
        color: #41b2fc;
        margin-bottom: 0.12rem;
    }
    .list .right .box .content {
        font-size: 0.22rem;
        color: #646666;
        margin-bottom: 0.2rem;
    }
    .list .right .box .data {
        margin-top: 0.24rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .list .right .box .data .img{
        width: 0.05rem;
        height: 0.05rem;
        border-radius: 50%;
        background: #41b2fc;
        margin-right: 0.1rem;
    }
    .list .right .box .data span{
        font-size: 0.18rem;
        color: #c9cbcc;
    }
    .list .right .box .title1 {
        font-size: 0.3rem;
        margin-bottom: 0.12rem;
        color: #4f5b64;
    }
    .list .right .box .content1 {
        color: #646666;
        font-size: 0.22rem;
        margin-bottom: 0.2rem;
    }
    .button{
        border: none;
        width: 1.66rem;
        height: 0.6rem;
        background: #e7f6ff;
        border-radius: 0.3rem;
        position: absolute;
        bottom: 0.3rem;
        right: 0.24rem;
        font-size: 0.3rem;
        color: #41b2fc;
    }
</style>
