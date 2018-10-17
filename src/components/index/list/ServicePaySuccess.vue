<template>
  <section class="wsq-pay">
    <img src="./static/img/zhifuicon.png" height="61" width="75"/>
    <div class="wsq-lineOne">
      <div class="wsq-zs"></div>
      <p>成功支付<span>{{$route.query.price}}</span>元</p>
      <div class="wsq-zs"></div>
    </div>
    <div class="wsq-lineTwo">
      <!--<p>送您<span>{{$route.query.coin}}</span>金币</p>-->
    </div>
    <section class="wsq-btn">
      <div class="wsq-left"> <router-link :to="{path:'/OrderDetail',query:{order_id:$route.query.orderid}}"> 查看订单 </router-link> </div>
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
