<template>

<div>
    <!--收货地址-->
    <div class="wb-address">
        <h3>选择收货地址</h3>
        <i class="iconfont icon-gengduo"></i>
    </div>
    <ul>
        <li class="wb-shop">
            <div class="wb-left">
                <img src="../img/Ttwenty-one1.png" alt="">
            </div>
            <div class="wb-right">
                <div class="wb-Rone"><h2>潜水艇高端龙头</h2></div>
                <div class="wb-Rtwo">
                    <div class="wb-yuan1"></div>
                    <p>ECC01-001Lw</p>
                </div>
                <div class="wb-Rthree">
                    <div class="wb-yuan1"></div>
                    <h5>商品规格潜水艇高端龙头</h5>
                </div>
                <div class="wb-Rfour">
                    <div class="wb-zuo">
                        <div class="wb-yuan2"></div>
                        <p>￥60.00</p>
                    </div>
                    <div class="wb-you">
                        <div class="wb wb-jian">
                            <img src="../img/Tseventeen3.png" alt="">
                        </div>
                        <span>01</span>
                        <div class="wb wb-jia">
                            <img src="../img/Tseventeen4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <ul class="wb-list">
        <li class="one">
            <div class="wb-lizuo">
                <div class="wb-yuan1"></div>
                <h3>优惠券</h3>
            </div>
            <div class="wb-liyou">
                <h4>无可用优惠券</h4>
                <i class="iconfont icon-gengduo"></i>
            </div>
        </li>
        <li>
            <div class="wb-lizuo">
                <div class="wb-yuan1"></div>
                <h3>金币</h3>
            </div>
            <div class="wb-liyou">
                <h4>无可用金币</h4>
            </div>
        </li>
        <li>
            <div class="wb-lizuo">
                <div class="wb-yuan1"></div>
                <h3>发票信息</h3>
            </div>
            <div class="wb-liyou">
                <h4>不开发票</h4>
                <i class="iconfont icon-gengduo"></i>
            </div>
        </li>
        <li>
            <div class="wb-lizuo">
                <div class="wb-yuan1"></div>
                <h3>备注</h3>
                <h4>&nbsp&nbsp选填：请输入备注（25字以内）</h4>
            </div>
            <div class="wb-liyou">
                <i class="iconfont icon-gengduo"></i>
            </div>
        </li>
        <!--拍照-->
        <li>
            <img src="../img/Ttwenty-one2.png" alt="">
            <input class="wb-miaoshu" type="text" placeholder="添加文字描述">
        </li>
        <li>
            <div class="wb-lizuo">
                <div class="wb-yuan1"></div>
                <h3>商品金额</h3>
            </div>
            <div class="wb-liyou">
                <h4>￥60.00</h4>
            </div>
        </li>
        <li>
            <div class="wb-lizuo">
                <div class="wb-yuan1"></div>
                <h3>运费</h3>
            </div>
            <div class="wb-liyou">
                <h4>￥0.00</h4>
            </div>
        </li>
    </ul>
    <div class="wb-di">
        <div class="diL">
            <p>合计：</p>
            <h3>￥162</h3>
        </div>
        <div class="diR">
            <p>提交订单</p>
        </div>
    </div>

    <!--遮罩-->
    <div class="zhezhao">
        <!--优惠-->
        <div class="youhui">
            <div class="tou">
                <p>店铺优惠</p>
                <i class="iconfont icon-guanbi"></i>
            </div>
            <ul>
                <li>
                    <div class="wb-yuan1"></div>
                    <h4>满100减20元</h4>
                    <div class="yuan">
                        <img src="../img/yuan.png" alt="">
                    </div>
                </li>
                <li>
                    <div class="wb-yuan1"></div>
                    <h4>满100减10元</h4>
                    <div class="yuan">
                        <img src="../img/yuan.png" alt="">
                    </div>
                </li>
                <li>
                    <div class="wb-yuan1"></div>
                    <h4>不使用优惠券</h4>
                    <div class="yuan">
                        <img src="../img/yuan.png" alt="">
                    </div>
                </li>
            </ul>
            <div class="guanbi">
                <div class="anniu">关闭</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'WaterStore',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('订单');
        }
    }
</script>
<style scoped>
    @import url("../css/Ttwenty-one.css");
    @import url("../css/common.css");
    @import url("../css/weiyu.css");

</style>
