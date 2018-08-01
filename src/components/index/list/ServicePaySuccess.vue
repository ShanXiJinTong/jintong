<template>
  <section class="wsq-pay">
    <img src="./static/img/zhifuicon.png" height="61" width="75"/>
    <div class="wsq-lineOne">
      <div class="wsq-zs"></div>
      <p>成功支付<span>30</span>元定金</p>
      <div class="wsq-zs"></div>
    </div>
    <div class="wsq-lineTwo">
      <p>送您<span>3</span>金币</p>
    </div>
    <section class="wsq-btn">
      <div class="wsq-left"> <router-link :to="{path:'/order'}"> 查看订单 </router-link> </div>
      <div class="wsq-right"> <router-link :to="{path:'/'}"> 返回首页 </router-link></div>
    </section>

  </section>
</template>
<script>
    export default {
        name: 'ServicePaySuccess',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(./static/css/Tseven.css);
</style>
