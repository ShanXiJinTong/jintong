<template>
<div>
  <section class="chongzhiGroup">
    <div class="moneyContent">
      <div class="nxrYuan"></div>
      <div class="moneyText">充值
        <span class="moneyShu">￥30</span>
        元
      </div>
      <div class="nxrYuan"></div>
    </div>
  </section>
  <div class="hengXian"></div>
  <section class="nxrWeixin">
    <div class="nxrLeft">
      <img src="../static/img/nxr-img/nxrWeixin.jpg" alt="">
      <span>微信支付</span>
    </div>
    <div class="nxrRight">
      <img src="../static/img/nxr-img/nxrYuandian.jpg" alt="">
    </div>
  </section>
  <router-link :to="{name:'My'}" tag="div" class="weiConfirm">
     确认支付
  </router-link>
</div>
</template>
<script>
    export default {
        name: 'SelectWay',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(../static/css/nxrQueRenChongZhi.css);
</style>
