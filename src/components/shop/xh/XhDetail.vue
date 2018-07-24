<template>
<div>
    <div class="photo">
        <img :src="shopDetail.image_detail[0]" alt="">
    </div>
    <div class="introduction">
        <div class="one">{{shopDetail.name}}</div>
        <div class="two"><p>{{shopDetail.description}}</p></div>
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

        <div class="lingjuan2" >领卷</div>
        <div class="lingjuan3" >满500减50</div>
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
            <router-link :to="{name:'XhServer'}" tag="a">
                <div class="rr1">加入购物车</div>
            </router-link>
            <router-link :to="{name:'XhOrder'}" tag="a">
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
                shopDetail:[]
            }
        },
        methods:{
            getData(){
                this.$http.get('/catalog/product/index?product_id='+this.uid).then(res=>{
                    this.shopDetail = res.data.data.product;
                    console.log(this.shopDetail.image_detail[0]);
                })
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
