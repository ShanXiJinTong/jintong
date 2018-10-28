<template>
<div>
  <ul class="shdpriceList">
    <li  v-for="item in list" :class="[item.id=== selectPrice ?'select' :'' , 'price']" @click="changePrice(item.id,item.price,item['actual_payment'])">
      <div class="priceTop">
        <span class="text1">{{item.price}}</span>
        <span class="text2">元</span>
      </div>
      <div class="priceBottom">
            <span class="text3">售价
                <span class="text4">{{item.actual_payment}}</span>元
            </span>
      </div>
    </li>
  </ul>
  <div class="shdchongzhi">
    <input type="text" class="defined" v-model="price" readonly>
    <button class="confirm" type="button" @click="submitPrice">确认充值</button>
  </div>
</div>
</template>
<script>
	import base64 from "../static/js/base64.js";
    export default {
        name: 'Recharge',
        data() {
            return {
               list:[],
               selectPrice:0,
               price:0,
               payment:0,
               _csrf:'',
            }
        },
        methods:{
           changePrice(value,price,actual_payment){
             this.selectPrice = value;
             this.price = price;
             this.payment = actual_payment;
           },
           submitPrice(){
              if(this.price <=0){
                 alert('请输入正确的金额');
                 return ;
              }
              var base = new base64();
							localStorage[base.encode("mid")] = base.encode(this.selectPrice);
							localStorage[base.encode("price")] = base.encode(this.price);
							localStorage[base.encode("payment")] = base.encode(this.payment);

             this.$http.get("/customer/addr/getcsrf").then(res => {
                if(res.data){
                   this._csrf = res.data;
                   let obj = {
                      customer_id:localStorage['fecshop-uuid'],
                      price:this.price,
                      payment:this.payment,
                      csrf:this._csrf
                   };

                   this.$http({
                     method: 'post',
                     headers: {
                       'Content-Type': 'application/x-www-form-urlencoded'
                     },
                     url: 'customer/car/createordermoney',
                     data: this.$qs.stringify(obj)
                   }).then(res=>{
                     if(res.data.status == 1){
                       this.$router.push({
                         name:'SelectWay',
                         query:{orderid:res.data.order_id}
                       })
                     }

                   })
                }
             })

           }
        },
        mounted(){
        	this.$http.get("/customer/editaccount/recharge").then(res=>{
        		if(res.status == 200){
        			this.list = res.data;
        			this.selectPrice = this.list[0].id;
        			this.price = this.list[0].price;
        			this.payment = this.list[0].actual_payment;
        		}
        	});
            document.setTitle('钱包');
        }
    }
</script>
<style scoped>
  @import url(../static/css/shd-wallet.css);
</style>
