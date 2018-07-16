<template>
<div>
    <!--nav开始-->
    <nav>
        <div class="main">
            <p class="hot">洗衣</p>
            <p>洗鞋</p>
            <p>洗家纺</p>
            <p>洗窗帘</p>
            <p>袋洗</p>
        </div>
    </nav>
    <!--nav结束-->

    <!--cate开始-->
    <div class="cate">
        <div class="main">
            <div class="cateBox">
                <p>综合</p>
                <i class="iconfont icon-xiangxiajiantou"></i>
            </div>
            <div class="cateBox">
                <p>销量</p>
                <i class="iconfont icon-xiangxiajiantou"></i>
            </div>
            <div class="cateBox">
                <p>价格降序</p>
                <i class="iconfont icon-xiangxiajiantou"></i>
            </div>
        </div>
    </div>
    <!--nav结束-->

    <!--bag开始-->
    <div class="bag-scroll">
        <div class="sk-bag-scroll">
            <ul class="bag-item" v-for="item in list">
                <router-link :to="{name:'XhDetail',query:{uid:item.product_id}}" tag="li" class="sk-bag-photo" >
                    <img :src="item.image" alt="">
                </router-link>
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
                        <img src="../img/Tnine/bds.png" alt="">
                        <span>包大师</span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
    <!--bag结束-->
</div>
</template>
<script>
    export default {
        name: 'XhList',
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
    }
</script>
<style scoped>
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
    @import url("../css/Tten.css");
</style>
