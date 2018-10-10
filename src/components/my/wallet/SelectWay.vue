<template>
<div>
  <section class="chongzhiGroup">
    <div class="moneyContent">
      <div class="nxrYuan"></div>
      <div class="moneyText">充值
        <span class="moneyShu">￥{{price}}</span>
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
  <div class="weiConfirm" @click="handleSubmit">
     确认支付
  </div>
</div>
</template>
<script>
	import base64 from "../static/js/base64.js"
    export default {
        name: 'SelectWay',
        data() {
            return {
            	price:0,
              payment:0,
            	id:"",
              orderid:0
            }
        },
        methods:{
           handleSubmit(){
             location.href = 'http://appserver.sxjtyb.cn/weixin/example/index5.php?orderid=' + this.orderid + '&money=' + this.payment;
           }
        },
        created(){
        		var base = new base64();
        		this.price = base.decode(localStorage[base.encode("price")]);
        		this.payment = base.decode(localStorage[base.encode("payment")]);
        		this.id = base.decode(localStorage[base.encode("mid")]);
        		this.orderid = this.$route.query.orderid;
        }
    }
</script>
<style scoped>
  @import url(../static/css/nxrQueRenChongZhi.css);
</style>
