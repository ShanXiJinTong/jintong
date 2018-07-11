<template>
<div>
  <ul class="shdpriceList">
    <li class="price">
      <div class="priceTop">
        <span class="text1">50</span>
        <span class="text2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3">售价
                <span class="text4">49.8</span>元
            </span>
      </div>
    </li>
    <li class="price select">
      <div class="priceTop">
        <span class="text1 hot1">100</span>
        <span class="text2 hot2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3 hot3">售价
                <span class="text4 hot4">99.8</span>元
            </span>
      </div>
    </li>
    <li class="price">
      <div class="priceTop">
        <span class="text1">200</span>
        <span class="text2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3">售价
                <span class="text4">198.8</span>元
            </span>
      </div>
    </li>
    <li class="price">
      <div class="priceTop">
        <span class="text1">300</span>
        <span class="text2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3">售价
                <span class="text4">49.8</span>元
            </span>
      </div>
      <div class="memeber">白银会员</div>
    </li>
    <li class="price">
      <div class="priceTop">
        <span class="text1">500</span>
        <span class="text2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3">售价
                <span class="text4">99.8</span>元
            </span>
      </div>
      <div class="memeber">黄金会员</div>
    </li>
    <li class="price">
      <div class="priceTop">
        <span class="text1">1000</span>
        <span class="text2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3">售价
                <span class="text4">198.8</span>元
            </span>
      </div>
      <div class="memeber">白金会员</div>
    </li>
  </ul>
  <div class="shdchongzhi">
    <input type="text" class="defined" placeholder="自定义金额">
    <a href="nxrQueRenChongZhi.html">
      <button class="confirm" type="submit">确认充值</button>
    </a>
  </div>
</div>
</template>
<script>
    export default {
        name: 'Recharge',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(../static/css/shd-wallet.css);
</style>
