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
            <span class="cyx-name">{{order.order_status}}</span>
          </div>
        </li>
        <li class="cyx-lis" style="border-bottom: 1px solid #e0e0e0;">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">订单日期</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.updated_at}}</span>
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">订单地址</span>
          </div>
          <div class="cyx-right">

          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">收件人姓名</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.customer_firstname + order.customer_lastname}}</span>
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">收件人姓名</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.customer_address_street1}}</span>
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

        <li class="cyx-lis" style="border-bottom: 1px solid #e0e0e0">
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">运货方式</span>
          </div>
          <div class="cyx-right">
             <span class="cyx-name">{{order.shipping_method}}</span>
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
                 <th>产品信息</th>
                 <th>个数</th>
                 <th>评论</th>
                 <th>小计</th>
              </tr>
              <tr v-for="product in order.products">
                <td><img :src="product.imgUrl" alt=""></td>
                <td>{{product.sku}}</td>
                <td>{{product.qty}}</td>
                <td><router-link :to="{name:'OrderEvaluate',query:{product_id:product.product_id}}">去评价</router-link></td>
                <td>{{product.row_total}}</td>
              </tr>
           </table>
        </li>

        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">小计</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.subtotal}}</span>
          </div>
        </li>
        <li class="cyx-lis" >
          <div class="cyx-left">
            <img class="cyx-items" src="./static/img/items.png" alt="">
            <span class="cyx-title">运费</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.shipping_total}}</span>
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
            <span class="cyx-title">总计</span>
          </div>
          <div class="cyx-right">
            <span class="cyx-name">{{order.grand_total}}</span>
          </div>
        </li>
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
        order:{}
      }
    },
    methods: {
      getData(order_id) {

        this.$http({
          method: 'get',
          url: '/customer/order/view',
          headers: getheaders,
          params: {
            order_id: order_id
          }
        }).then(res => {
           if(res.data.code == 200){
                this.order = res.data.data.order;
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
