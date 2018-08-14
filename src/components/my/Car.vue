<template>
  <div>

    <div v-if="carInfo">
      <!--内容-->
      <div class="cyx-container">
        <ul class="cyx-items" v-for="item in carInfo">
          <li class="cyx-top">
            <div class="cyx-left">
              <div :class="['cyx-choose',item.active?'hot':'']" @click="toggleSelect(item)"></div>
              <span class="cyx-title">{{item.shop_name}}</span>
              <img class="cyx-next" src="./static/img/cyx-gouwuche/next.png" alt="">
            </div>
            <img class="cyx-delete" src="./static/img/cyx-gouwuche/delete.png" alt="">
          </li>
          <li class="cyx-shop">
            <div class="cyx-left">
              <div class="cyx-choose" :class="['cyx-choose',item.active?'hot':'']"></div>
              <div class="cyx-picture">
                <img class="cyx-product" :src="'http://img.chengzhanghao.com:81/media/catalog/product/'+item.product.image.main.image" alt="">

              </div>
              <div class="cyx-desc">
                <span class="cyx-name">{{item.product.name.name_en}}</span>
                <span class="cyx-price">¥{{item.product.special_price}}</span>
              </div>
            </div>
            <div class="cyx-right">
              <img src="./static/img/cyx-gouwuche/sub.png" alt="" class="cyx-sub"
                   @click="subNumber(item)">
              <span class="cyx-number">{{item.qty}}</span>
              <img src="./static/img/cyx-gouwuche/add.png" alt="" class="cyx-add"
                   @click="addNumber(item)">
            </div>
          </li>
        </ul>
      </div>
      <!--底部-->
      <footer class="cyx-footer">
        <div class="cyx-container">
          <section class="cyx-top">
            <div :class="['cyx-choose',selectAllAttr?'':'hot']"  @click="selectAll"></div>
            <span class="cyx-title">全选</span>
          </section>
          <section class="cyx-bottom">
            <div class="cyx-leftBox">
              <div class="cyx-allPrice">
                <img src="./static/img/cyx-gouwuche/allprice.png" alt="" class="cyx-ap">
                <span class="cyx-heji">合计</span>
                <span class="cyx-mao">:</span>
                <span class="cyx-num"> {{totalMoney}} </span>
              </div>
              <div class="cyx-extraPrice">
                <img src="./static/img/cyx-gouwuche/extraprice.png" alt="" class="cyx-ep">
                <span class="cyx-yunfei">运费￥20</span>
                <span class="cyx-youhui">已优惠￥20</span>
              </div>
            </div>
            <router-link :to="{name:'WaitServicePay'}" class="cyx-pay">结算</router-link>
          </section>
        </div>
      </footer>
    </div>
    <div v-else>
      <div class="content">
        <img src="./static/img/jingtong01-1.png" alt="">
        <div class="mwq-text">购物车空空如也</div>
        <router-link :to="{name:'Index'}" tag="div" class="mwq-circle">去逛逛</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import Scroll from './scroll';
  import {getheaders , postheaders} from '../config'
  export default {
    name: 'Car',
    data() {
      return {
        carInfo: [],
        totalMoney: 0,
        flag:true,
      }
    },
    computed:{
       selectAllAttr(){
          let arr =  this.carInfo.filter(element=>element.active);
          return arr.length < this.carInfo.length;
       },
    },
    methods: {
      getData() {
        this.$http({
           method:'get',
           headers:getheaders,
           url:'/customer/car/carlist?customer_id='+localStorage['fecshop-uuid'],
        }).then(res => {
          let data = res.data.car;
            console.log(res.data);
            if (data.length>0) {
              this.carInfo=data;
          } else {
            this.carInfo = false;
          }
        })
      },
      changeSelect(itemid , active) {
             this.$http.get('/checkout/cart/selectone',{
                headers:getheaders,
                params:{
                  checked: active,
                  item_id: itemid
                }
             }).then(res=>{
                this.flag = true;
             })
      },
      updateInfo(itemid,type){
           this.$http({
             headers:postheaders,
             method: 'post',
             url: '/checkout/cart/updateinfo',
             data:this.$qs.stringify({
               up_type: type,
               item_id: itemid,
             })
           }).then(res=>{
             console.log(res);

           })
      },
      addNumber(item) {
        item.qty++;
        this.updateInfo(item['item_id'],'add_one');
      },
      subNumber(item) {
          item.qty--;
          if(item.qty === 0){
          let index=this.carInfo.indexOf(item);
          this.carInfo.splice(index,1);
        }
        this.updateInfo(item['item_id'],'less_one');
      },
      toggleSelect(item){
         if(!this.flag){return }
         this.flag = false;
         item.active =  Number( !Boolean(item.active));

         this.changeSelect(item['item_id'],item.active);
      },
      calcTotalMoney() {
        let _this = this;
        this.totalMoney = 0;
        let  arr = this.carInfo.filter(element=>element.active === 1);
        this.carInfo.filter(element=>element.active === 1).forEach(element => {
          this.totalMoney += element.qty * element.product.price;
        });
        this.totalMoney = this.totalMoney.toFixed(2);
      },
      selectAll(){
         this.carInfo.forEach(element=>{
            element.active = 1;
         })
      }
    },
    mounted: function () {
      this.getData();
      this.calcTotalMoney();
    },
    components: {
      Scroll
    },
    watch: {
      carInfo: {
        handler() {
          if (!this.carInfo) return;
          this.calcTotalMoney();

        },
        deep: true
      }
    }
  }
</script>
<style scoped>
  @import url(./static/common/header.css);
  @import url(./static/css/cyx-gouwuche.css);
  @import url(./static/css/address.css);
</style>
