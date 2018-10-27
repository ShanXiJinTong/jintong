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
            <div class="wb-money">￥162</div>
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
            <div class="wb-p p1">加入购物车</div>
            <router-link :to="{name:'XhOrder'}" tag="div" class="wb-p p2">立即下单</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'XhServer',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('商品详情');
        }
    }
</script>
<style scoped>
    @import url("../css/Tseventeen.css");
</style>