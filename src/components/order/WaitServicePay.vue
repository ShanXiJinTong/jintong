<template>
  <div>
    <div class="dizhi">
        <router-link :to="{name:'WaitAddress'}">
        <div class="mwq-model">
          <div class="mwq-adressText">
            <div class="mwq-info">
              <div class="mwq-name">{{carAddress['first_name']+carAddress['last_name']}}</div>
              <div class="mwq-phoneNumber">{{carAddress['telephone']}}</div>
            </div>
            <div class="mwq-adress">{{carAddress['street1'] + carAddress['street2']}}</div>
          </div>
          <img src="./static/img/xiayibu.png" alt="">
        </div>
        </router-link>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>

    <div v-if="carInfo">
      <div class="cloth" v-for="item in car">
        <div class="cleft">
          <a href="">
            <img :src="item['img_url']" alt="">
          </a>
        </div>
        <div class="cright">
          <div class="rightone"> {{item.name}} </div>
          <div class="righttwo">
            <div class="yuanjiao"></div>
            <div class="zimu"> {{item['product_id']}} </div>
          </div>
          <div class="rightthree">
            <div class="yuanjiao1"></div>
            <div class="fuwu">上门服务</div>
          </div>
          <div class="rightfour">
            <div class="yi">
              <div class="yuanjiao2"></div>
              <div class="price">¥{{item['product_price']}}</div>
            </div>
          </div>
        </div>
      </div>

    </div>


    <div class="line">
      <div class="line1"></div>
    </div>
    <div class="aa">
      <div class="alfet">
        <div class="yuanjiao11"></div>
        <span>优惠卷</span>
      </div>
      <a href="">
        <div class="aright">

          <span>无可用优惠卷</span>
          <img src="./static/img/xiayibu.png" alt="">
        </div>
      </a>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>
    <div class="aa">
      <div class="alfet">
        <div class="yuanjiao11"></div>
        <span>金币</span>
      </div>
      <a href="">
        <div class="aright">
          <span>无可用金币</span>
          <img src="./static/img/xiayibu.png" alt="">
        </div>
      </a>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>
    <div class="aa">
      <div class="alfet">
        <div class="yuanjiao11"></div>
        <span>发票信息</span>
      </div>
      <a href="">
        <div class="aright">
          <span>   不开发票</span>
          <img src="./static/img/xiayibu.png" alt="">
        </div>
      </a>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>
    <div class="bb">
      <div class="yuanjiao11"></div>
      <span>备注</span>
      <div class="xuantian">
        <input type="text" placeholder="请输入备注(25字以内)">
      </div>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>
    <div class="aa">
      <div class="alfet">
        <div class="yuanjiao11"></div>
        <span>时间</span>
      </div>
      <div class="aright god">
        <span>推荐</span>
        <div class="lanse">05.03   14:00-15:30</div>
        <img src="./static/img/xiayibu.png" alt="">
      </div>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>
    <div class="root">
      <div class="rleft">
        <div class="yuanjiao111"></div>
        <span>合计:</span>
        <div class="jiage"> ¥{{totalMoney}} </div>
      </div>
      <a href="">
        <div class="rright">
          提交订单
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations} from 'vuex'
  const  headers =  {
    'access-token': 'o1tH4OsuAVOiHcKfke5N1YquqCjZZwa5',
    'fecshop-uuid': '8f682f66-88eb-11e8-bed6-00163e021360'
  };
    export default {
        name: 'WaitServicePay',
        data() {
            return {
              carInfo:[],
              totalMoney: 0,
            }
        },
        computed:{
          ...mapGetters([
            'car',
            'carAddress'
          ])
        },
        methods:{
          getData() {
            this.$http.get('/checkout/cart/index', {
              headers
            }).then(res => {
              let data = res.data.data['cart_info'];
              if (data) {
                this.carInfo = res.data.data['cart_info'].products;
              } else {
                this.carInfo = false;
              }
            })
          },
          getAddress(){
            this.$http.get('/customer/address/index', {
              headers
            }).then(res => {
               let addresslist = res.data.data.addressList;
               let defaultaddress = addresslist.filter(element=>element.is_default == 1)[0];
               this.setcarlist(addresslist);
               this.setcaraddress(defaultaddress)
            })
          },
          updateInfo(itemid,type){
            this.$http({
              headers,
              method: 'post',
              url: '/checkout/cart/updateinfo',
              data: {
                up_type: type,
                item_id: itemid,
              }
            }).then(res=>{
              console.log(res);
            })
          },
          calcTotalMoney() {
            let _this = this;
            this.totalMoney = 0;
            let  arr = this.carInfo.filter(element=>element.active === 1);
            this.carInfo.filter(element=>element.active === 1).forEach(element => {
              this.totalMoney += element.qty * element['product_price'];
            });
            this.totalMoney = this.totalMoney.toFixed(2);

          },
          ...mapMutations({
            'setcaraddress':'caraddress',
            'setcarlist': 'carList',
          })
        },
        mounted:function(){
          console.log(this.carAddress);
          if(!this.carAddress['address_id']){
             this.getAddress();
          }
        },
        watch: {
          car: {
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
  @import url('./static/css/Teighteen.css');


</style>
