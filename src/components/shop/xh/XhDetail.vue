<template>
<div>
    <!--<div class="photo">-->
        <swiper :options="swiperOption" ref="mySwiper" class="photo" v-if="shopDetail">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in shopDetail.image_detail" v-bind:key="index">
                <img :src="item" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    <!--</div>-->
    <div class="introduction" v-if="shopDetail">
        <div class="one">{{shopDetail.name}}</div>
        <div class="two"><p v-html="shopDetail.description"></p></div>
        <div class="three">
            <div class="tl">
                <span>现价 {{shopDetail.price_info.price.value}}元／件</span>
                <del>原价 {{shopDetail.price_info.special_price.value}}元／件</del>
            </div>
            <div class="tr">
                <span class="tr1"></span>
                <span class="tr2">月售</span>
                <span class="tr3">278</span>
            </div>
        </div>
    </div>
    <div class="line">
        <div class="line1"></div>
    </div>
    <div class="lingjuan">

        <img src="../img/lingjuan.png" alt="">

        <div class="lingjuan2" @click="get()">领卷</div>
        <div class="lingjuan3" >满500减50</div>
    </div>
    <div class="tuikuan" :class="{display:display}">
        <div class="tktitle">
            <span class="tkcolor">领取</span>优惠券
            <div class="tkclose">
                <img src="img/tuikuan2/cuohao.png" alt="">
            </div>
        </div>

        <ul class="tkbox">
            <li class="tklist ">
                <div class="left">
                    <div class="money">
                        <div class="tkyuan">
                        </div>
                        <h3>20元</h3>
                    </div>
                    <div class="tktext">订单满100元可用</div>
                    <h5>有效期至2018.9.10</h5>
                </div>
                <div class="get">领取</div>
                <img src="img/tuikuan2/tuikuan.png" alt="" class="right hot">
            </li>
            <li class="tklist ">
                <div class="left">
                    <div class="money">
                        <div class="tkyuan">
                        </div>
                        <h3>20元</h3>
                    </div>
                    <div class="tktext">订单满100元可用</div>
                    <h5>有效期至2018.9.10</h5>
                </div>
                <div class="get">领取</div>
                <img src="img/tuikuan2/tuikuan.png" alt="" class="right hot">
            </li>
            <li class="tklist ">
                <div class="left">
                    <div class="money">
                        <div class="tkyuan">
                        </div>
                        <h3>20元</h3>
                    </div>
                    <div class="tktext">订单满100元可用</div>
                    <h5>有效期至2018.9.10</h5>
                </div>
                <div class="get">领取</div>
                <img src="img/tuikuan2/tuikuan.png" alt="" class="right hot">
            </li>

        </ul>
        <div class="tkbutton" @click="get()">关闭</div>
    </div>
    <div class="line">
        <div class="line1 "></div>
    </div>
    <div class="term">
        <div class="termm">
            <div class="term1">
                <span></span>
                <span>无额外收费</span>
            </div>
            <div class="term1">
                <span></span>
                <span>爽约包赔</span>
            </div>
            <div class="term1">
                <span></span>
                <span>不满意重新服务</span>
            </div>
        </div>
    </div>
    <div class="root">
        <div class="rl">
            <router-link :to="{name:'XhStore'}" tag="a" >
                <div class="rl1">
                    <img src="../img/dianpu.png" alt="">
                    <span>店铺</span>
                </div>
            </router-link>
            <a href="">
                <div class="rl2">
                    <img src="../img/lianxi.png" alt="">
                    <span>联系商家</span>
                </div>
            </a>
        </div>
        <div class="rr">
            <a @click="handleClick">
                <div class="rr1">加入购物车</div>
            </a>
            <router-link :to="{name:'WaitServicePay'}" tag="a">
                <div class="rr2">立即下单</div>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'XhDetail',
        data() {
            return {
                uid:'',
                shopDetail:null,
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },
                display:0
            }
        },
        methods:{
            getData(){
                this.$http.get('/catalog/product/index?product_id='+this.uid).then(res=>{
                    this.shopDetail = res.data.data.product;
                })
            },
            handleClick(){
                if(!(localStorage.access-token&&localStorage.fecshop-uuid)){
                    this.$router.push({name:'WxLogin'})
                }
                this.$router.push({name:'Car'});
            },
            get(){
                if(this.display==1){
                    this.display=0;
                }else{
                    this.display=1;
                }
            }
        },
        mounted:function(){
            this.uid = this.$route.query.uid;
            this.getData();
        }
    }
</script>
<style scoped>
    @import url("../css/Televen.css");
</style>
