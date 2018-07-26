<template>
<div>
    <!--头部结束-->
    <!--搜索框-->
    <form class="wsq-searchBox">
        <img src="../img/sousuoicon.png" height="24" width="40"/>
        <input type="text" placeholder="搜素您需要定位的城市">
    </form>
    <!--搜索结束-->

    <!--单品详情-->
    <div class="LZJ-singleDetail">
        <div class="LZJ-main">
            <router-link :to="{name:'WaterStoreIntro'}" tag="div" class="LZJ-Thumb">
                <img src="../img/thumb.png" alt="">
            </router-link>
            <div class="LZJ-infos">
                <div class="LZJ-title">皮悦皮具护理</div>
                <div class="LZJ-bargain">
                    <div class="LZJ-already">
                        <div class="LZJ-spot"></div>
                        <div class="LZJ-poi">已接</div>
                        <span>29</span>
                    </div>
                    <div class="LZJ-already">
                        <div class="LZJ-spot"></div>
                        <div class="LZJ-poi">成交</div>
                        <span>90</span>
                        %
                    </div>
                    <div class="LZJ-already" style="margin-right: 0">
                        <div class="LZJ-spot"></div>
                        <div class="LZJ-poi">好评</div>
                        <span>98</span>
                        %
                    </div>
                </div>
                <div class="LZJ-service">
                    <img src="../img/icon-time.png" alt="">
                    <div class="LZJ-offer">服务时间</div>
                    <div class="LZJ-times">9:00-12:00</div>
                </div>
                <div class="LZJ-dates">最近可约 16:00</div>
                <div class="LZJ-advice">咨询</div>
            </div>
        </div>
    </div>
    <!--banner-->
    <section class="wsq-banner">
        <div class="wsq-title">
            <div class="wsq-cateaty">全部项目</div>
            <div class="wsq-cateaty" style="margin: 0 0.25rem">促销项目</div>
            <div class="wsq-cateaty hot">用户评价</div>
        </div>
    </section>
    <!--更多详情分类-->
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
                        <!--<img src="./img/Tnine/bds.png" alt="">-->
                        <span>包大师</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'XhStore',
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
            },
        },
        mounted:function () {
            this.getData();
        },
    }
</script>
<style scoped>
    @import url("../css/Thirteen.css");
</style>
