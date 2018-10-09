<template>
  <div>
    <div class="dizhi">
      <router-link :to="{name:'Address'}">
        <div class="mwq-model" v-if="carAddress">
          <div class="mwq-adressText">
            <div class="mwq-info">
              <div class="mwq-name">{{carAddress['first_name']}}</div>
              <div class="mwq-phoneNumber">{{carAddress['telephone']}}</div>
            </div>
            <div class="mwq-adress">{{carAddress['city']+carAddress['street1'] + carAddress['street2']}}
            </div>
          </div>
          <img src="./static/img/xiayibu.png" alt="">
        </div>
        <div class="mwq-model" v-else="carAddress">
          <div class="mwq-adressText">
            <div class="mwq-info">
              <div class="mwq-phoneNumber">请填写订单地址</div>
            </div>
            <div class="mwq-adress"></div>
          </div>
          <img src="./static/img/xiayibu.png" alt="">
        </div>
      </router-link>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>
    <div v-for="item in info">
      <div style="padding:0.24rem 0.24rem 0;height: 0.5rem;display: flex;align-items: center">
        <div style="width: 0.15rem;height: 0.15rem;background: #36a8fe;border-radius:50%;box-shadow: 0 0 0.1rem  #36a8fe ;
"></div>
        <span style="margin-left:0.2rem;font-size: 0.26rem;">{{item.shop.shop_name}}</span>
      </div>
      <div v-for="goods in item.goods">
        <div class="cloth">
          <div class="cleft">
            <a href="">
              <div class="img"
                   :style="'background:url('+$store.state.imghost+'media/catalog/product/'+goods['image']['main']['image']+') no-repeat center center /100% auto'"></div>
            </a>
          </div>
          <div class="cright">
            <div class="rightone"> {{goods.name['name_zh']}}</div>
            <div class="righttwo">
              <div class="yuanjiao"></div>
              <div class="zimu"> {{goods['_id']['$oid']}}</div>
            </div>
            <div class="rightthree">
              <div class="yuanjiao1"></div>
              <div class="fuwu">上门服务</div>
            </div>
            <div class="rightfour">
              <div class="yi">
                <div class="yuanjiao2"></div>
                <div class="price">¥{{goods['special_price']}}</div>
              </div>
              <div class="er">
                <div class="yuanjiao3"></div>
                {{goods.num}}
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
        <a href="javascript:">
          <div class="aright">
            <span v-if="item.coupon.length==0">无可用优惠卷</span>
            <span v-else-if="item.coupon2.coupon_name"  @click="useCou(item)">{{item.coupon2.coupon_name}}</span>
            <span v-else-if="!item.coupon2.coupon_name"  @click="useCou(item)">点击使用优惠卷</span>
            <img src="./static/img/xiayibu.png" alt="">
          </div>
        </a>
      </div>
      <div class="line">
        <div class="line1"></div>
      </div>
      <div class="aa" @click="useCoin(item)">
        <div class="alfet">
          <div class="yuanjiao11"></div>
          <span>金币</span>
        </div>
        <a href="javascript:">
          <div class="aright">
            <span>{{item.coin1}}</span>
            <img src="./static/img/xiayibu.png" alt="">
          </div>
        </a>
      </div>
      <div class="line">
        <div class="line1"></div>
      </div>
      <div class="line">
        <div class="line1"></div>
      </div>
      <div class="bb">
        <div class="yuanjiao11"></div>
        <span>备注</span>
        <div class="xuantian">
          <input type="text" placeholder="请输入备注(25字以内)" v-model="item.order_remark">
        </div>
      </div>
      <div class="line">
        <div class="line1"></div>
      </div>
    </div>
    <div class="line">
      <div class="line1"></div>
    </div>
    <div class="line" style="padding-bottom: 1.08rem;">
      <div class="line1"></div>
    </div>
    <div class="root">
      <div class="rleft">
        <div class="yuanjiao111"></div>
        <span>合计:</span>
        <div class="jiage"> ¥{{total}}</div>
      </div>
      <div class="rright" @click="handleSubmit">
        提交订单
      </div>
    </div>
    <div v-if="coinFlag"
         style="position: fixed;z-index: 99999;top:0;bottom: 0;width: 100%;max-width:7.5rem;background:rgba(0,0,0,0.2);">
      <div style="max-width: 7.5rem;width:100%;position:fixed;bottom:0;height: 1.5rem;display: flex;align-items: center;justify-content: space-around;background:white;">
        <button style="width: 1.5rem;height: 0.7rem;outline: none;border: none;background: #E7F6FF;color: #3BACFE;border-radius:0.5rem;font-size: 0.26rem;"
                @click="useCoin1(0)">不使用
        </button>
        <button style="width: 1.5rem;height: 0.7rem;outline: none;border: none;background: #3BACFE;color: #fff;border-radius:0.5rem;font-size: 0.26rem;"
                @click="useCoin1(1)">使用
        </button>
      </div>
    </div>
    <div v-if="couFlag" style="position: fixed;top:0;bottom: 0;width: 100%;max-width:7.5rem;background: rgba(0,0,0,0.2);z-index: 9999;">
      <div style="position: fixed;bottom: 0;z-index: 99999;width: 100%;max-width:7.5rem;background: #fff;padding:0.1rem 0.34rem;">
        <ul class="tkbox">
          <li class="tklist" v-for="item in coupon">
            <div class="left">
              <div class="money">
                <div class="tkyuan">
                </div>
                <h3>{{item.discount}}元</h3>
              </div>
              <div class="tktext" v-if="item.conditions>0">订单满{{item.conditions}}元可用</div>
              <div class="tktext" v-else>无条件</div>
              <h5>有效期至{{item.expiration_date}}</h5>
            </div>
            <div class="get" @click="useCou1(item)">使用</div>
          </li>
          <li class="tklist" style="height: 1rem;">
            <div style="margin: 0 auto;background: #C1C1C1;padding: 0.2rem 0.3rem;border-radius: 5px;color: #fff;"
                 @click="useCou1(0)">不使用优惠卷
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {getheaders, postheaders} from '../config'

  export default {
    name: 'WaitServicePay',
    data() {
      return {
        total: 0,
        carAddress: null,
        _csrf: "",
        info: "",
        coinFlag: false,
        couFlag: false,
        coupon: [],
        obj: "",
        obj1: "",
        flag:true
      }
    },
    methods: {
      useCou1(item) {
        this.couFlag = false;
        if (item == 0) {
          this.obj.coupon2 = {};
          return;
        }
        this.obj.coupon2 = item;
      },
      useCoin1(flag) {
        this.coinFlag = false;
        if (flag == 0) {
          this.obj1.coin1 = 0;
        } else {
          this.obj1.coin1 = this.obj1.coin;
        }
      },
      useCou(item) {
        this.obj = item;
        this.coinFlag = false;
        this.couFlag = true;
        this.coupon = item.coupon;
      },
      useCoin(item) {
        if(item.coin == 0){
          return;
        }
        this.obj1 = item;
        this.coinFlag = true;
        this.couFlag = false;
      },
      handleSubmit() {
        if(!this.flag){
          return;
        }
        this.flag = true;
        var arr = [];
        this.info.forEach(val => {
          var obj = {};
          obj.shop_id = val.shop.shop_id;
          obj.coupon_id = val.coupon2['id'];
          obj.coin = val.coin;
          obj.order_remark = val.order_remark;
          obj.goods = [];
          val.goods.forEach(ele => {
            obj.goods.push({product_id: ele._id["$oid"], num: ele.num,item_id:ele.item_id});
          });
          arr.push(obj);
        });
        let _this = this;
        this.$http({
          headers: postheaders,
          method: 'post',
          url: '/customer/car/createorder2?customer_id=' + localStorage['fecshop-uuid'] + "&address_id=" + this.carAddress.address_id,
          data: "info=" + JSON.stringify(arr)
        }).then(res => {
          //生成订单成功
          if (res.data.status == 1) {
            console.log(res.data);
           this.$router.push({name:'ServicePay1',query:{price:this.total,orderid:res.data.order}})
          }
        })
      },
      getCarAddress() {
        if (sessionStorage.aid) {
          this.$http.get("customer/addr/addrfind?id=" + sessionStorage.aid).then(res => {
            this.carAddress = res.data;
          })
        }
      }
    },
    created: function () {
      if (!localStorage['fecshop-uuid']) {
        this.$router.push({name: "UserLogin"});
      }
      if (!sessionStorage.car) {
        this.$router.back();
      }
      this.$http.get("/customer/addr/getcsrf").then(res => {
        this._csrf = res.data;
        this.$http({
          headers: postheaders,
          method: 'post',
          url: '/customer/car/getcargoods?customer_id=' + localStorage['fecshop-uuid'],
          data: "info=" + sessionStorage.car
        }).then(res => {
          this.info = res.data;
          this.info.forEach(val => {
            val.coupon2 = {};
            val.coin1 = val.coin;
            val.order_remark = val.order_remark;
            val.goods.forEach(ele => {
              this.total = this.total * 1 + ele.special_price * 1 * ele.num;
            });
          });
        })
      });
      this.getCarAddress();
      if (!sessionStorage.aid) {
        this.$http.get("/customer/addr/getdefaultaddr?id=" + localStorage['fecshop-uuid']).then(res => {
          if (res.data.code == 200) {
            this.carAddress = res.data.data;
          }
        })
      }

    }
  }
</script>
<style scoped>
  @import url('./static/css/Teighteen.css');
  @import url("./static/css/Televen.css");
</style>
