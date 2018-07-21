<template>
<div id="Order">
    <!--横向滚动栏开始-->
    <div id="wrapper">
        <ul class="x-ulone">
            <li class="x-fl" v-for="(tabName,index) in tabsName" v-bind:class="{x_li:tabName.isActive}" @click="tabsSwitch(index)">
                {{tabName.name}}
            </li>
        </ul>
    </div>
    <!--横向滚动栏结束-->
    <!--订单开始-->
    <div class="middle" id="wrapper2">
        <div class="scroller2">
            <div class="x-box">
                <div class="x-DR">
                    <div class="x-commodity">
                        <img src="./img/SLT.png" alt="" id="x-c-left">
                        <div class="x-c-right">
                            <div id="x-name"><b>商品规格潜水艇高端龙头</b></div>
                            <ul id="x-li">
                                <li class="x-blue x-jone"><b>商品规格潜水艇高端龙头</b></li>
                                <li class="x-blue x-jtwo">商品规格潜水艇高端龙头</li>
                                <li class="x-blue x-jthree">¥60</li>
                                <li class="x-green x-jfour">×1</li>
                                <li class="x-green x-jfive">实付款：¥60</li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
            <div class="x-box">
                <div class="itemList">
                    <div class="x-DR">
                        <div class="x-commodity">
                            <img src="./img/SLT.png" alt="" id="x-c-left">
                            <div class="x-c-right">
                                <div id="x-name"><b>潜水艇高端龙头</b></div>
                                <ul id="x-li">
                                    <li class="x-blue x-jone"><b>潜水艇高端龙头</b></li>
                                    <li class="x-blue x-jtwo">商品规格潜水艇高端龙头</li>
                                    <li class="x-blue x-jthree">¥60</li>
                                    <li class="x-green x-jfour">×1</li>
                                    <li class="x-green x-jfive">实付款：¥60</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--订单结束-->
                    <!--按键开始-->
                    <div class="x-an">
                        <button class="x-anone x-antwo">取消订单</button>
                        <router-link :to="{name:'ServicePay'}"><button class="x-anone">去支付</button></router-link>
                    </div>
                    <!--按键结束-->
                </div>
            </div>
            <div class="x-box">
                <div class="itemList">
                    <router-link :to="{name:'WaitService'}">
                    <div class="x-DR">
                        <div class="x-commodity">
                            <img src="./img/SLT.png" alt="" id="x-c-left">
                            <div class="x-c-right">
                                <div id="x-name">
                                    <b>潜水艇高端龙头</b>
                                    <span>待接单</span>
                                </div>
                                <ul id="x-li">
                                    <!--<li class="x-blue x-jone"></li>-->
                                    <li class="x-blue x-jtwo"><span>预约日期</span>&nbsp;&nbsp;<b>2018.05.28</b> <b>14:00</b></li>
                                    <li class="x-blue x-jthree">¥60</li>
                                    <li class="x-green x-jfour">×1</li>
                                    <li class="x-green x-jfive">已付款：¥60</li>
                                    <li class="x-rest">剩余款项由维修人员上门视具体情况报价</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </router-link>
                    <!--订单结束-->
                    <!--按键开始-->
                    <div class="x-an">
                        <button class="x-anone x-antwo">取消预约</button>
                        <router-link :to="{name:'WaitServicePay'}">
                        <button class="x-anone" id="x-an-zf">去支付服务费</button>
                        </router-link>
                    </div>
                    <!--按键结束-->
                </div>
            </div>
            <div class="x-box">
                <div class="x-DR">
                    <div class="x-commodity">
                        <img src="./img/SLT.png" alt="" id="x-c-left">
                        <div class="x-c-right">
                            <div id="x-name"><b>潜水艇高端龙头</b></div>
                            <ul id="x-li">
                                <li class="x-blue x-jone"><b>ECC01-001Lw</b></li>
                                <li class="x-blue x-jtwo">商品规格潜水艇高端龙头</li>
                                <li class="x-blue x-jthree">¥60.00</li>
                                <li class="x-green x-jfour">×1</li>
                                <li class="x-green x-jfive">实付款：¥60.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--订单结束-->
                <!--按键开始-->
                <div class="x-an">
                    <button class="x-anone x-antwo">去退款</button>
                    <button class="x-anone">确认收货</button>
                </div>
                <!--按键结束-->
            </div>
            <div class="x-box">
                <div class="x-DR">
                    <div class="x-commodity">
                        <img src="./img/SLT.png" alt="" id="x-c-left">
                        <div class="x-c-right">
                            <div id="x-name"><b>潜水艇高端龙头</b></div>
                            <ul id="x-li">
                                <li class="x-blue x-jone"><b>ECC01-001Lw</b></li>
                                <li class="x-blue x-jtwo">商品规格潜水艇高端龙头</li>
                                <li class="x-blue x-jthree">¥60.00</li>
                                <li class="x-green x-jfour">×1</li>
                                <li class="x-green x-jfive">实付款：¥60.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--订单结束-->
                <!--按键开始-->
                <div class="x-an">
                    <router-link :to="{name:'Refund'}">
                    <button class="x-anone x-antwo">去退款</button>
                    </router-link>
                    <router-link :to="{name:'OrderEvaluate'}">
                    <button class="x-anone" id="x-an-3">去评价</button>
                    </router-link>
                </div>
                <!--按键结束-->
            </div>
        </div>
    </div>
    <!--footer开始-->
    <footer>
        <div class="sk-tabItem">
            <img src="./img/sy.png" alt="">
            <h3>首页</h3>
        </div>
        <div class="sk-tabItem">
            <img src="./img/store.png" alt="">
            <h3>商城</h3>
        </div>
        <div class="sk-tabItem">
            <img src="./img/rz.png" alt="">
            <h3>入驻</h3>
        </div>
        <div class="sk-tabItem">
            <img src="./img/order.png" alt="">
            <h3>订单</h3>
        </div>
        <div class="sk-tabItem">
            <img src="./img/personal.png" alt="">
            <h3>我的</h3>
        </div>
    </footer>
    <!--footer结束-->
    <Tab></Tab>
</div>
</template>
<script>
    import Tab from "../common/tab";
    export default {
        name: 'Order',
        data() {
            return {
                tabsName: [{
                    name: "全部",
                    isActive: true
                }, {
                    name: "待支付",
                    isActive: false
                }, {
                    name: "待服务",
                    isActive: false
                },{
                    name: "待收货",
                    isActive: false
                },{
                    name: "待评价",
                    isActive: false
                }
                ],
                active: false,
                list:[],
                order_id: null

            }
        },
        methods:{
            tabsSwitch: function(tabIndex) {
                var tabCardCollection = document.querySelectorAll(".x-box"),
                    len = tabCardCollection.length;

                for(var i = 0; i < len; i++) {
                    tabCardCollection[i].style.display = "none";
                    this.tabsName[i].isActive = false;
                }
                this.tabsName[tabIndex].isActive = true;
                tabCardCollection[tabIndex].style.display = "block";
            },
            getData(){
                this.$http.get('/customer/order/view',{
                    headers:{
                        'access-token': 'SPCDFWZZkcch7CEaVaoZAt2EsTJRri0e',
                        'fecshop-uuid': '6098784a-8719-11e8-81ee-00163e021360'
                    },



                }).then(res=>{

                    /*res.data.order.products.forEach(element=>{
                        this.list.push(element);
                    })*/

                })
            }
        },
        mounted:function () {
            this.getData();
        },
        components:{
            Tab
        }
    }
</script>
<style scoped>
/*横向滚动开始*/

#wrapper {
    border-bottom: 0.01rem solid #a2deff;
    width: 100%;
    height: 0.82rem;
    overflow: hidden;
    box-sizing:border-box ;
}
#wrapper .x-ulone {
    list-style: none;
    height: 100%;
}
.x-fl {
    display: block;
    width: 1.5rem;
    height: 100%;
    float: left;
    font-size: 0.22rem;
    color: #c9cbcc;
    text-align: center;
    line-height: 0.82rem;
}
.x_li{
    color: #646666;
    border-bottom: 0.02rem solid #36a8fe;
    box-sizing: border-box;
}

/*横向滚动结束*/
.middle{
    position: absolute;
    top: 2.24rem;
    bottom: 0.98rem;
    left: 0;
    width:calc(100% - 0.48rem);
    margin: 0 0.24rem;
    overflow: hidden;
}
/*订单开始*/
.middle .x-box{
    width: 100%;
    height: auto;
    margin-bottom: 0.3rem;
}
.middle .x-box .x-DR .x-commodity{
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


    display: flex;
    justify-content: space-between;
}
#x-name b{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
#x-name span{
    font-size: 0.3rem;
    color: #43c93e;
}
#x-li{
    width: 100%;
    height: 1.23rem;
    position: absolute;
    left: 0;
    bottom: 0;
}
.x-jone{
    width: 100%;
    margin-bottom: 0.15rem;
    font-size: 0.18rem;
    color: #41b2fc;
    text-align: left;
}
.x-jtwo{
    width: 100%;
    margin-bottom: 0.24rem;
    font-size: 0.22rem;
    color: #c9cbcc;
    text-align: left;
}
.x-jtwo b{
    color: #36a8fe;
    font-weight: bold;
}
.x-jthree{
    width: 100%;
    font-size: 0.22rem;
    color: #646666;
    text-align: left;
}
.x-jfour{
    width: 100%;
    font-size: 0.22rem;
    color: #646666;
    text-align: left;
    position: absolute;
    left: calc(100% - 0.7rem);
    bottom: 0;
}
.x-jfive{
    width: 100%;
    font-size: 0.3rem;
    color: #fbb548;
    text-align: right;
    position: absolute;
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
/*订单结束*/
/*按键开始*/
.x-an{
    width:100% ;
    height: 0.7rem;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.01rem;
    margin-bottom: 0.6rem;
}
.x-anone{
    width: auto;
    height: 0.61rem;
    padding: 0 0.62rem;
    background: linear-gradient(to right,#27d29c,#33e171);
    box-shadow:0 0.04rem 0.2rem rgba(55,223,116,0.75) ;
    border-radius: 3rem;
    margin-left: 0.29rem;
    font-size: 0.22rem;
    color: #FFFFFF;
    text-align: center;
    outline: none;
}
.x-antwo{
    background: #e7f6ff;
    box-shadow: none;
    color: #41b2fc;
}
/*按键结束*/
/*底部样式开始*/
footer{
    width: 100%;
    height: 1rem;
    background: #f8fcff;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.13rem 0.24rem 0.08rem;
    /*padding: 0 0.24rem;*/
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
footer .sk-tabItem{
    width: 0.5rem;
    height: 0.79rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
footer .sk-tabItem img{
    display: block;
    height: 0.40rem;
}
footer .sk-tabItem h3{
    color: #41b2fc;
    font-size: 0.22rem;
    line-height: 0.4rem;
    font-weight: normal;
}
/*底部样式结束*/

.x-rest{
   font-size: 0.24rem;
    color: #afb1b2;
    position: absolute;
    bottom:-1.1rem;
    right: 0;
}
</style>
