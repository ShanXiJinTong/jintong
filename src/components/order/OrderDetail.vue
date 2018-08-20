<template>
  <section class="cyx-contain">
      <ul class="cyx-container">
        <li class="cyx-lis">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">订单号</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order['increment_id']}}</span>
          </div>
        </li>
        <li class="cyx-lis">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">订单状态</span>
          </div>
          <div class="cyx-right">
            <span v-if="order.order_status==0">待付款</span>
					<span v-else-if="order.order_status<3">待收货</span>
					<span v-else-if="order.order_status==4">已完成</span>
					<span v-else-if="order.order_status==5">申请退货</span>
					<span v-else-if="order.order_status==6">退货</span>
          </div>
        </li>
        <li class="cyx-lis" style="border-bottom: 1px solid #e0e0e0;">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">下单时间</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.created_at}}</span>
          </div>
        </li>
        <li class="cyx-lis" style="border-bottom: 1px solid #e0e0e0;" v-if="order.paypal_order_datetime">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">支付时间</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.paypal_order_datetime}}</span>
          </div>
        </li>
        <li class="cyx-lis" style="border-bottom: 1px solid #e0e0e0;" v-if="order.confirm_at">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">收货时间</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.confirm_at}}</span>
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">订单地址</span>
          </div>
          <div class="cyx-right">
            {{order.customer_address_city}}
            {{order.customer_address_street1}}
            {{order.customer_address_street2}}
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">收件人姓名</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.customer_firstname}}</span>
          </div>
        </li>
        <li class="cyx-lis" style="border-bottom: 1px solid #e0e0e0">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">联系电话</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.customer_telephone}}</span>
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">产品列表</span>
          </div>
          <div class="cyx-right">
          </div>
        </li>
        <li style="border-bottom: 1px solid #e0e0e0">
           <table>
              <tr>
                 <th>产品图片</th>
                 <th>产品名</th>
                 <th>个数</th>
                 <th>小计</th>
                 <th v-if="order.order_status==3">操作</th>
              </tr>
              <tr v-for="product in list">
                <td>
                  <div class="img" :style="'background: url('+$store.state.imghost+'media/catalog/product/'+product.image+')no-repeat center center /100% auto'"></div>
                  <!--<img :src="$store.state.imghost+'media/catalog/product/'+product.image" alt="">-->
                </td>
                <td>{{product.name}}</td>
                <td>{{product.qty}}</td>
                <td>{{product.price}}</td>
                <td><router-link v-if="order.order_status==3" :to="{name:'OrderEvaluate',query:{product_id:product.product_id}}">去评价</router-link></td>
              </tr>
           </table>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">总计</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.subtotal}}</span>
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">折扣</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.subtotal_with_discount}}</span>
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">实际支付</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.grand_total}}</span>
          </div>
        </li>
        <button v-if="order.order_status==0" @click="zf" style="margin-top:0.2rem;padding: 0.15rem 0.3rem;border-radius: 0.5rem;background:#41b2fc;box-shadow: 0 0.05rem 0.2rem 0 rgba(68,181,255,0.43);color: white">去支付</button>
      </ul>

  </section>
</template>

<script>
  import {getheaders, postheaders} from "../config";

  export default {
    name: "OrderDetail",
    data() {
      return {
        order_id: 0,
        order:{},
        list:[]
      }
    },
    methods: {
    	zf(){
    		this.$router.push("/ServicePay");
    	},
      getData(order_id) {
				
        this.$http({
          method: 'get',
          url: '/customer/order/orderlist',
          headers: getheaders,
          params: {
            order_id: order_id
          }
        }).then(res => {
           if(res.data.code == 200){
                this.order = res.data.order;
                this.list = res.data.list;
           }
        })
      }
    },
    mounted() {
      this.order_id = this.$route.query.order_id;
      this.getData(this.order_id);
    }
  }
</script>

<style>
  @import url(./static/css/cyx-gerenziliao.css);


</style>
