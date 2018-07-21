<template>
<div id="shop">

    <!--banner开始-->
    <section class="wsq-banner">
        <div class="wsq-title">

            <div class="wsq-cateaty hot">洗护</div>
            <router-link :to="{name:'Bathroom'}" tag="div" class="wsq-cateaty">售水</router-link>
            <router-link :to="{name:'Bathroom'}" tag="div" class="wsq-cateaty">卫浴</router-link>
        </div>
    </section>
    <!--banner结束-->

    <!--Icon开始-->
    <ul class="xrIcon">
        <router-link :to="{name:'XhList'}" tag="li"  class="xrIconbox">
            <div class="xrIcon1">
                <img src="./img/Tnine/Tnine1.png" alt="">
            </div>
            <span>洗衣</span>
        </router-link>
        <li class="xrIconbox">
            <div class="xrIcon2">
                <img src="./img/Tnine/Tnine2.png" alt="">
            </div>
            <span>洗鞋</span>
        </li>
        <li class="xrIconbox">
            <div class="xrIcon3">
                <img src="./img/Tnine/Tnine3.png" alt="">
            </div>
            <span>洗家纺</span>
        </li>
        <li class="xrIconbox">
            <div class="xrIcon4">
                <img src="./img/Tnine/Tnine4.png" alt="">
            </div>
            <span>洗窗帘</span>
        </li>
    </ul>
    <!--Icon结束-->

    <!--xrTitle开始-->
    <div class="xrTitle">
        <div class="xrContent">
            <div class="xrDot"></div>
            <div class="xrText"><span>全部</span>服务</div>
        </div>
    </div>
    <!--xrTitle结束-->

    <!--bag开始-->
    <div class="bag-scroll">
        <div class="sk-bag-scroll">


            <ul class="bag-item" v-for="item in list">
                <li class="sk-bag-photo">
                    <router-link :to="{name:'XhDetail',query:{uid:item.product_id}}">
                    <img :src="item.image" alt="">
                    </router-link>
                </li>
                <li class="sk-bag-content">
                    <div class="sk-service-type">
                        <h3>{{item.name}}</h3>
                    </div>
                    <div class="sk-service-desc">
                        <p>服饰内外污渍清洗，去霉杀菌，不包含补色补伤</p>
                    </div>
                    <div class="sk-estimate_sale_price">
                        <ul class="sk-estimate sk-item">
                            <li class="dot"></li>
                            <li class="text">好评</li>
                            <li class="number">90<span>%</span></li>
                        </ul>
                        <ul class="sk-sale sk-item">
                            <li class="dot"></li>
                            <li class="text">月售</li>
                            <li class="number">278</li>
                        </ul>
                        <ul class="sk-price">
                            <li>{{item.price.value}}元/件</li>
                        </ul>
                    </div>
                    <div class="sk-service-operator">
                        <img src="./img/Tnine/bds.png" alt="">
                        <span>包大师</span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
    <!--bag结束-->
    <Tab></Tab>

</div>
</template>
<script>
    import Tab from "../common/tab";
    export default {
        name: 'Shop',
        data() {
            return {
                list:[]
            }
        },
        methods:{
            getData(){
                this.$http.get('/cms/home/index').then(res=>{
                    res.data.data.productList.forEach(elemlent=>{
                        this.list.push(...[elemlent.one,elemlent.two]);
                    })

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
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
    @import url("./css/Tnine.css");

</style>
