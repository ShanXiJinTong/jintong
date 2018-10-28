<template>
    <div id="xh">
      <title>商场</title>
        <!--banner开始-->
        <section class="wsq-banner">
            <div class="wsq-title">
                <router-link :to="{name:'Xh'}" tag="div" class="wsq-cateaty hot">洗护</router-link>
                <router-link :to="{name:'SellWater'}" tag="div" class="wsq-cateaty" style="margin: 0 0.25rem">售水</router-link>
                <router-link :to="{name:'Bathroom'}" tag="div" class="wsq-cateaty">卫浴</router-link>
            </div>
        </section>
        <!--banner结束-->

        <!--Icon开始-->
        <ul class="xrIcon">
            <router-link :to="{name:'XhList',query:{cate:'洗衣'}}" tag="li" class="xrIconbox">
                <div class="xrIcon1">
                    <img src="../img/Tnine/Tnine1.png" alt="">
                </div>
                <span>洗衣</span>
            </router-link>
            <router-link :to="{name:'XhList',query:{cate:'洗鞋'}}" tag="li" class="xrIconbox">
                <div class="xrIcon2">
                    <img src="../img/Tnine/Tnine2.png" alt="">
                </div>
                <span>洗鞋</span>
            </router-link>
            <router-link :to="{name:'XhList',query:{cate:'洗家纺'}}" tag="li" class="xrIconbox">
                <div class="xrIcon3">
                    <img src="../img/Tnine/Tnine3.png" alt="">
                </div>
                <span>洗家纺</span>
            </router-link>
            <router-link :to="{name:'XhList',query:{cate:'洗窗帘'}}" tag="li" class="xrIconbox">
                <div class="xrIcon4">
                    <img src="../img/Tnine/Tnine4.png" alt="">
                </div>
                <span>洗窗帘</span>
            </router-link>
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
                <router-link :to="{name:'XhDetail'}" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="" tag="ul" class="bag-item">
                    <li class="sk-bag-photo">
                        <img src="../img/Tnine/pb.png" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>皮毛服饰清洗保养</h3>
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
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </router-link>
            </div>
        </div>
        <!--bag结束-->
      <Tab></Tab>
    </div>
</template>
<script>
  import Tab from "../../common/tab";
    export default {
        name: 'Xh',
        data() {
            return {}
        },
        components: {
          Tab
        },
        mounted:function () {
        }
    }
</script>
<style scoped>
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
    @import url("../css/Tnine.css");
</style>
