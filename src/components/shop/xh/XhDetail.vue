<template>
<div>
    <div class="photo">
        <img src="../img/beibao.png" alt="">
    </div>
    <div class="introduction">
        <div class="one">皮毛服饰清洗保养</div>
        <div class="two"><p>服饰内外污渍清洗，去霉杀菌，不包含补色补伤服饰内外污渍清洗去 霉杀菌，不包含补色补伤</p></div>
        <div class="three">
            <div class="tl">
                <span>现价 60元／件</span>
                <del>原价 60元／件</del>
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
            <a href="">
                <div class="rr1">加入购物车</div>
            </a>
            <a href="">
                <div class="rr2">立即下单</div>
            </a>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'XhDetail',
        data() {
            return {}
        }
    }
</script>
<style scoped>
    @import url("../css/Televen.css");
</style>
