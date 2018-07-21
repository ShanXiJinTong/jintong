<template>
<div>
  <ul class="shdpriceList">
    <li  v-for="item in list" :class="[item.price_origin=== selectPrice ?'select' :'' , 'price']" @click="changePrice(item.price_origin)">
      <div class="priceTop">
        <span class="text1">{{item.price_origin}}</span>
        <span class="text2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3">售价
                <span class="text4">{{item.price_new}}</span>元
            </span>
      </div>
      <div class="memeber" v-if="item.rank"> {{item.rank}}</div>
    </li>
  </ul>
  <div class="shdchongzhi">
    <input type="text" class="defined" placeholder="自定义金额" v-model="selectPrice">
    <button class="confirm" type="button" @click="submitPrice">确认充值</button>
  </div>
</div>
</template>
<script>
    export default {
        name: 'Recharge',
        data() {
            return {
               list:[
                 {
                   price_new:49.8,
                   price_origin:50,
                 },
                 {
                   price_new:99.9,
                   price_origin:100,
                 },
                 {
                   price_new:199.8,
                   price_origin:200,
                 },
                 {
                   price_new:299.8,
                   price_origin:300,
                   rank:'白银会员'
                 },{
                   price_new:499.8,
                   price_origin:500,
                   rank:'黄金会员'
                 },{
                   price_new:999.8,
                   price_origin:1000,
                   rank:'白金会员'
                 }
               ],
               selectPrice:50
            }
        },
        methods:{
           changePrice(value){
             this.selectPrice = value
           },
           submitPrice(){
             /* this.$http.get('/aaa?price'+this.selectPrice,function(res){

              })*/
              if(this.selectPrice <=0){
                 alert('请输入正确的金额');
                 return ;
              }
              this.$router.push({
                name:'SelectWay'
              })
           }
        }
    }
</script>
<style scoped>
  @import url(../static/css/shd-wallet.css);
</style>
