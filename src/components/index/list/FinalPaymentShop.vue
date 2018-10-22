<template>
    <div class="box">
        <div class="sunShopbox" >
            <div class="sunBottom">
                <div class="sunLeft">
                    <img src="../static/img/1.png" alt="">
                </div>
                <ul class="sunRight">
                    <li style="display: flex;justify-content: space-between;">
                        <span>水龙头</span>
                        <span style="font-size: 0.26rem;color: #fbb548;">30元</span>
                    </li>
                    <li style="width: 3.2rem;display: flex;justify-content: space-between">
                        <div class="sunBox">
                            <div class="sunYuan"></div>
                            <span style="color: #c9cbcc;">评分</span>&nbsp;
                            <span style="color: #41b2fc;font-weight: bold">5.0</span>
                        </div>
                        <div class="sunBox">
                            <div class="sunYuan"></div>
                            <span style="color: #c9cbcc;">接单率</span>&nbsp;
                            <span style="color: #41b2fc;font-weight: bold">100%</span>
                        </div>
                    </li>
                    <li>
                        <div class="sunPbox">
                            非常专业
                        </div>
                        <div class="sunPbox">
                            价格合理
                        </div>
                    </li>
                    <li class="last">
                        <div class="sunW">
                            <div class="sunYuan1"></div>
                            <span style="color: #c9cbcc;">已售</span>&nbsp;
                            <span  >36790</span>
                        </div>
                        <div class="number" style="display: flex;align-items: center;justify-content: space-between">
                            <div class="onejian">-</div>
                            <span class="onenum">1</span>
                            <div class="onejia">+</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="add">确认添加</div>
    </div>
</template>

<script>
    export default {
        name: "FinalPaymentShop"
    }
</script>

<style scoped>
    @import url('../static/css/sun1.css');
    .add {
        font-size: 0.22rem;
        color: #fff;
        height: 0.6rem;
        width: 3.8rem;
        border-radius: 1rem;
        background: linear-gradient(to right, #37e071, #36de78, #34d98b, #32d699);
        text-align: center;
        line-height: 0.6rem;
        position: absolute;
        margin-left: 50%;
        left: -1.9rem;
        margin-top: 1rem;
    }
    .last .number .onejian {
        font-size: 0.8rem;
        width: 0.74rem;
        height: 0.44rem;
        background: #f0f0f0;
        margin-right: 0.1rem;
        border-radius: 0.3rem;
        text-align: center;
        line-height: 0.3rem;
        color: #4f5b64;
    }

    .last .number .onenum {
        font-size: 0.28rem;
        color: #4f5b64;
        margin: 0 0.1rem;
    }

    .last .number .onejia {
        font-size: 0.5rem;
        width: 0.74rem;
        height: 0.44rem;
        background: #f0f0f0;
        border-radius: 0.3rem;
        margin-left: 0.1rem;
        text-align: center;
        line-height: 0.4rem;
        color: #4f5b64;
    }
</style>