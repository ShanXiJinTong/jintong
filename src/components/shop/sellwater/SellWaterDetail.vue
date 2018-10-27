<template>
<div>
    <!--图-->
    <div class="wb-pic">
        <img src="../img/Tseventeen1.png" alt="">
    </div>
    <!--详情-->
    <div class="wb-xiangqin">
        <div class="wb-tu">
            <img src="../img/Tseventeen2.png" alt="">
        </div>
        <div class="wb-money"><p>￥162</p></div>
        <ul class="wb-guige">
            <li class="guige">
                <div class="wb-yuan1"></div>
                <ol>规格</ol>
            </li>
            <li class="wb-cate">羽绒服</li>
        </ul>
        <ul class="wb-shuliang">
            <li class="shuliang">
                <div class="wb-yuan2"></div>
                <ol>数量</ol>
            </li>
            <li class="wb-tianjia">
                <div class="wb wb-jian">
                    <img src="../img/Tseventeen3.png" alt="">
                </div>
                <span>01</span>
                <div class="wb wb-jia">
                    <img src="../img/Tseventeen4.png" alt="">
                </div>
            </li>
        </ul>
    </div>
    <!--底部-->
    <div class="wb-di">
        <router-link :to="{name:'WaterStoreIntro'}" tag="div" class="wb-p p1">加入购物车</router-link>
        <div class="wb-p p2">立即下单</div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'SellWaterDetail',
        data() {
            return {
                uid:'',
                shopDetail:{}
            }
        },
        methods:{
            getData(){
                this.$http.get('/catalog/product/index?product_id='+this.uid).then(res=>{
                     this.shopDetail = res.data.data.product;
                })
            }
        },
        mounted:function(){
           this.uid = this.$route.query.uid;
           this.getData();
            document.setTitle('商品服务详情');

        }
    }

</script>
<style scoped>
    @import url("../css/Tseventeen.css");
</style>
