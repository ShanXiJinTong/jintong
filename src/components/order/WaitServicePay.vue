<template>
  <div>
    <div class="dizhi">
        <router-link :to="{name:'Address'}">
        <div class="mwq-model">
          <div class="mwq-adressText">
            <div class="mwq-info">
              <div class="mwq-name">张三丰</div>
              <div class="mwq-phoneNumber">182****9902</div>
            </div>
            <div class="mwq-adress">太原市小店区学府街滨河东路34号</div>
          </div>
          <img src="./static/img/xiayibu.png" alt="">
        </div>
        </router-link>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>

    <div v-if="carInfo">
      <div class="cloth" v-for="item in carInfo">
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
            <div class="er">
              <ul class="wb-shuliang">
                <li class="wb-tianjia">
                  <div class="wb wb-jian" @click="subNumber(item)">
                    <img src="./static/img/Tseventeen3.png" alt="">
                  </div>
                  <span>{{item.qty}}</span>
                  <div class="wb wb-jia" @click="addNumber(item)">
                    <img src="./static/img/Tseventeen4.png" alt="">
                  </div>
                </li>
              </ul>
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
  const  headers =  {
    'access-token': '4Pe3fkfV-UZxrs6WWohPYlpUQrMVSxK9',
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
              console.log(this.carInfo);
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
          addNumber(item) {
            let items = this.carInfo.filter(element => element['product_id'] === item['product_id'])[0];
            ++items.qty;
            this.updateInfo(item['item_id'],'add_one');
          },
          subNumber(item) {
            let items = this.carInfo.filter(element => element['product_id'] === item['product_id'])[0];
            if(items.qty === 1){
              return ;
            }
            items.qty--;
            this.updateInfo(item['item_id'],'less_one');
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
        },
        mounted:function(){
          this.getData();
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
  @import url('./static/css/Teighteen.css');


</style>
