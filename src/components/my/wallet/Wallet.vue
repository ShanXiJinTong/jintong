<template>
<div>
  <section class="nxrQianbao">
    <div class="nxrPic"></div>
    <div class="moneyGroup">
      <div class="moneyContent">
        <div class="nxrYuan"></div>
        <div class="moneyText">余额<span class="moneyShu">{{$route.query.price}}</span>元
        </div>
        <div class="nxrYuan"></div>
      </div>
    </div>
  </section>
  <div class="hengXian"></div>
    <router-link :to="{name:'Recharge'}">
      <div class="nxrConfirm">去充值</div>
    </router-link>

</div>
</template>
<script>
    export default {
        name: 'Wallet',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('钱包');
        }
    }
</script>
<style scoped>
  @import url(../static/css/nxrQianBao.css);
</style>
