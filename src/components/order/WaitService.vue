<template>
<div id="WaitService">
    <div class="mid">
        <div class="left">
            <img src="./img/juxing.png" alt="">
            <span>待接单</span>
        </div>
        <router-link :to="{name:'WaitZz'}">
        <div class="right" id="x-r-img">
            <span>订单跟踪</span>
            <img src="./img/Backcopy.png" alt="" >
        </div>
        </router-link>
    </div>
    <div class="content">
        <img src="./img/sltou.png" alt="" id="water">
        <ul>
            <li>
                <span>厨房下水清洁疏通</span>
                <span>待接单</span>
            </li>
            <li>
                <img src="./img/blueLot.png" alt="" class="landain">
                <span>预约日期</span>
                <span>2018.05.28&nbsp14:00</span>
            </li>
            <li>
                <img src="./img/blueLot.png" alt="" class="landain">
                <span>已付款：￥60.00</span>
            </li>
        </ul>
    </div>
    <div class="list">
        <li>
            <img src="./img/blueLot.png" alt="">
            <span>服务方式&nbsp&nbsp&nbsp上门服务</span>
        </li>
        <li>
            <img src="./img/blueLot.png" alt="">
            <span>服务时间&nbsp&nbsp&nbsp2018.05.28&nbsp&nbsp&nbsp14:00</span>
        </li>
        <li>
            <img src="./img/blueLot.png" alt="">
            <span>服务地址&nbsp&nbsp&nbsp山西省太原市迎泽区双塔寺街20号公交小区B座23层</span>
        </li>
        <li>
            <img src="./img/blueLot.png" alt="">
            <span>联系人&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp张女士&nbsp&nbsp&nbsp13543456879</span>
        </li>

    </div>
    <div class="list-mid">
        <li>
            <div class="left">
                <img src="./img/pic.png" alt="">
                <span>专业团队&nbsp优质服务&nbsp(价格最优按时撒多撒</span>
            </div>
            <div class="right">
                <img src="./img/server.png" alt="">
                <img src="./img/phone.png" alt="">
            </div>
        </li>
        <li>
            <img src="./img/blueLot.png" alt="">
            <span>投诉商家</span>
        </li>
    </div>
    <div class="listbottom">
        <li>
            <div class="leftss">
                <img src="./img/blueLot.png" alt="">
                <span>订单编号</span>
            </div>
            <div class="rightss">
                <span>58DOP0O3538088</span>
            </div>
        </li>
        <li>
            <div class="lefttt">
                <img src="./img/blueLot.png" alt="">
                <span>下单时间</span>
            </div>
            <div class="righttt">
                <span>2018.05.28（周二）</span>
                <span>14:00</span>
            </div>
        </li>
    </div>
    <button class="lclick">取消预约</button>
    <button class="rclick">去支付服务费</button>
</div>
</template>
<script>
    export default {
        name: 'WaitService',
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .mid{
        width: 100%;
        height: 0.8rem;
        background: #41b2fc;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .mid .left{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 0.24rem;
        box-sizing: border-box;
    }
    .mid .left > img{
        display: flex;
        margin-right: 0.12rem;
    }
    .mid .left > span {
        color:white;
    }
    .mid .right {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.24rem;
        box-sizing: border-box;
        margin-top: 0.14rem;
    }
    .mid .right img{
        display: block;
        margin-left: 0.12rem;
    }
    .mid .right span {
        font-size: 0.3rem;
        color: #bae6ff;
    }
    .mid span{
        font-size: 0.36rem;
        color: white;
    }
    .content{
        width: 100%;
        height: 2.96rem;
        display: flex;
        flex-direction: row;
    }
    .content #water{
        margin:auto 0;
        width: 1.74rem;
        height: 1.74rem;
        margin-right: 0.28rem;
    }
    .content ul{
        flex-grow: 1;
        padding-right: 0.24rem;
        box-sizing: border-box;
    }
    .content ul li{
        width: 100%;
        height: 33.333333333333%;
        display: flex;
        align-items: flex-end;
    }
    .content ul li:first-child span{
        font-size: 0.36rem;
    }
    .content ul li:nth-child(2) span {
        font-size: 0.22rem;
    }
    .content ul li:nth-child(3) span {
        font-size: 0.3rem;
    }
    .content ul li .landain{
        width: 0.13rem;
        height: 0.13rem;
        display: block;
        background: #41b2fc;
        border-radius: 50%;
    }
    .content ul li:nth-child(1){
        display: flex;
        justify-content: space-between;
    }
    .content ul li:nth-child(1) span:first-child{
        color: #4f5b64;
    }
    .content ul li:nth-child(1) span:nth-child(2) {
        font-size: 0.3rem;
        color: #31d094;
    }
    .content ul li:nth-child(2) {
        display: flex;
        align-items: center;
    }
    .content ul li:nth-child(2) > span:nth-child(2){
        margin-left: 0.12rem;
        color: #c9cbcc;
    }
    .content ul li:nth-child(2) > span:nth-child(3) {
        margin-left: 0.12rem;
        color: #41b2fc;
    }
    .content ul li:nth-child(3) {
        display: flex;
        align-items: flex-start;
        position: relative;
    }
    .content ul li:nth-child(3) .landain{
        position: absolute;
        top: 0.15rem;
    }
    .content ul li:nth-child(3) span{
        font-size: 0.24rem;
        color: #fbb548;
        margin-left: 0.25rem;
    }
    .list{
        display: flex;
        flex-direction: column;
        width: 7rem;
        height: 3.9rem;
        margin:auto 0.24rem;
        background: white;
        overflow: hidden;
        margin-bottom: 0.24rem;
    }
    .list li{
        display: flex;
        flex-grow: 1;
        align-items: center;
        border-bottom: #c9cbcc 0.01rem solid;
    }
    .list li span{
        font-size: 0.22rem;
        letter-spacing: 0.01rem;
    }
    .list li img{
        height: 0.13rem;
        margin-right: 0.3rem;
    }
    .list-mid{
        display: flex;
        flex-direction: column;
        width: 7rem;
        height: 1.78rem;
        margin:auto 0.24rem;
        background: white;
        overflow: hidden;
        margin-bottom: 0.24rem;
    }
    .list-mid li{
        height: 50%;
    }
    .list-mid li:nth-child(1){
        display: flex;
        flex-direction: row;
    }
    .list-mid li:nth-child(2) {
        display: flex;
        align-items: center;
    }
    .list-mid li:nth-child(2) span{
        color: #646666;
    }
    .list-mid .left{
        display: flex;
        width: auto;
        align-items: center;
    }
    .list-mid .right {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
    }
    .list-mid .left span{
        width: 3.0rem;
        font-size: 0.24rem;
        color: #41b2fc;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
    .list-mid .left img {
        width: 0.6rem;
        height: 0.6rem;
        display: block;
        border-radius: 50%;
        margin-right: 0.2rem;
    }
    .list-mid .right{
        display: flex;
        align-items: center;
    }
    .list-mid .right img{
        display: block;
        margin-right: 0.35rem;
        width: 0.5rem;
        height: 0.5rem;
    }
    .list-mid li:nth-child(2) span{
        font-size: 0.24rem;
    }
    .list-mid li:nth-child(2) img {
        margin-right: 0.3rem;
    }
    .listbottom{
        width: 7rem;
        height: 1.78rem;
        margin: auto 0.24rem;
        background: white;
    }
    .listbottom img{
        margin-right: 0.3rem;
    }
    .listbottom li{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .listbottom span{
        font-size: 0.24rem;
        color: #646666;
    }
    .listbottom li .leftss{
        display: flex;
        align-items: center;
    }
    .listbottom li .rightss {
        display: flex;
        align-items: center;
    }
    .listbottom li .lefttt {
        display: flex;
        align-items: center;
    }
    .listbottom li .righttt{
        display: flex;
        align-items: center;
    }
    .lclick{
        border: none;
        width: 1.96rem;
        height: 0.6rem;
        background: #e7f6ff;
        border-radius: 0.5rem;
        position: absolute;
        bottom: 0.1rem;
        right: 3.2rem;
    }
    .rclick{
        border: none;
        width: 2.69rem;
        height: 0.6rem;
        background: -webkit-linear-gradient(left,#27d29c,#33e1e1);
        border-radius: 0.5rem;
        position: absolute;
        bottom: 0.1rem;
        right: 0;
        margin-right: 0.24rem;
        color: #ffffff;
    }
</style>
