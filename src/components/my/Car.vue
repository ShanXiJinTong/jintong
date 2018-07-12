<template>
  <div>

    <div v-if="carInfo">
      <!--内容-->
      <section class="cyx-contain">
        <div class="cyx-container">
          <ul class="cyx-items">
            <li class="cyx-top">
              <div class="cyx-left">
                <div class="cyx-choose hot"></div>
                <span class="cyx-title">宅快修</span>
                <img class="cyx-next" src="./static/img/cyx-gouwuche/next.png" alt="">
              </div>
              <img  class="cyx-delete" src="./static/img/cyx-gouwuche/delete.png" alt="">
            </li>
            <li class="cyx-shop">
              <div class="cyx-left">
                <div class="cyx-choose"></div>
                <div class="cyx-picture">
                  <img class="cyx-product" src="./static/img/cyx-gouwuche/product.png" alt="">
                </div>
                <div class="cyx-desc">
                  <span class="cyx-name">潜水艇高端龙头</span>
                  <span class="cyx-price">￥60</span>
                </div>
              </div>
              <div class="cyx-right">
                <img src="./static/img/cyx-gouwuche/sub.png" alt="" class="cyx-sub">
                <span class="cyx-number">01</span>
                <img src="./static/img/cyx-gouwuche/add.png" alt="" class="cyx-add">
              </div>
            </li>
            <li class="cyx-bottom">
              <div class="cyx-left">
                <span class="cyx-totalPrice">合计</span>
                <span class="cyx-mao">:</span>
                <span class="cyx-num">￥162</span>
              </div>
              <button class="cyx-btn" type="submit">去下单</button>
            </li>
          </ul>
          <ul class="cyx-items">
            <li class="cyx-top">
              <div class="cyx-left">
                <div class="cyx-choose hot"></div>
                <span class="cyx-title">宅快修</span>
                <img class="cyx-next" src="./static/img/cyx-gouwuche/next.png" alt="">
              </div>
              <img  class="cyx-delete" src="./static/img/cyx-gouwuche/delete.png" alt="">
            </li>
            <li class="cyx-shop">
              <div class="cyx-left">
                <div class="cyx-choose"></div>
                <div class="cyx-picture">
                  <img class="cyx-product" src="./static/img/cyx-gouwuche/product.png" alt="">
                </div>
                <div class="cyx-desc">
                  <span class="cyx-name">潜水艇高端龙头</span>
                  <span class="cyx-price">￥60</span>
                </div>
              </div>
              <div class="cyx-right">
                <img src="./static/img/cyx-gouwuche/sub.png" alt="" class="cyx-sub">
                <span class="cyx-number">01</span>
                <img src="./static/img/cyx-gouwuche/add.png" alt="" class="cyx-add">
              </div>
            </li>
            <li class="cyx-bottom">
              <div class="cyx-left">
                <span class="cyx-totalPrice">合计</span>
                <span class="cyx-mao">:</span>
                <span class="cyx-num">￥162</span>
              </div>
              <button class="cyx-btn" type="submit">去下单</button>
            </li>
          </ul>
        </div>
      </section>

      <!--底部-->
      <footer class="cyx-footer">
        <div class="cyx-container">
          <section class="cyx-top">
            <div class="cyx-choose"></div>
            <span class="cyx-title">全选</span>
          </section>
          <section class="cyx-bottom">
            <div class="cyx-leftBox">
              <div class="cyx-allPrice">
                <img src="./static/img/cyx-gouwuche/allprice.png" alt="" class="cyx-ap">
                <span class="cyx-heji">合计</span>
                <span class="cyx-mao">:</span>
                <span class="cyx-num">￥162</span>
              </div>
              <div class="cyx-extraPrice">
                <img src="./static/img/cyx-gouwuche/extraprice.png" alt="" class="cyx-ep">
                <span class="cyx-yunfei">运费￥20</span>
                <span class="cyx-youhui">已优惠￥20</span>
              </div>
            </div>
            <button class="cyx-pay" type="submit">结算</button>
          </section>
        </div>
      </footer>
    </div>
    <div v-else>

      <div class="content">
        <img src="./static/img/jingtong01-1.png" alt="">
        <div class="mwq-text">购物车空空如也</div>
        <router-link :to="{name:'AddAddress'}" tag="div" class="mwq-circle">去逛逛</router-link>
      </div>
    </div>
 </div>
</template>
<script>
    export default {
        name: 'Car',
        data() {
            return {
              carInfo:false
            }
        },
        methods:{
           getData(){
              this.$http.get('/checkout/cart/index').then(res=>{
                console.log(res);
                this.carInfo = res.data.data.cart_info;
              })
           }
        },
        mounted:function(){
          this.getData();
        }
    }
</script>
<style scoped>
  @import url(./static/common/header.css);
  @import url(./static/css/cyx-gouwuche.css);
  @import url(./static/css/address.css);
</style>
