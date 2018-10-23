<template>
  <div style='background: #fff;'>
    <router-link class="chouse" tag="div" :to="{name:'FinalPaymentService'}">选择服务项目 <img src="./img/back.png" alt=""></router-link>
    <div class="list" style="box-sizing: border-box;position: relative;margin-bottom: 0.25rem">
    <div class="tap">
      <span class="onetou" style="width: 1.5rem">水龙头维修</span>
      <div>
        <span style="margin-right: 0.24rem">￥45.00</span>
        <i class="el-icon-delete"></i>
      </div>
    </div>
    <div class="line"></div>
  </div>


    <div v-if="this.goods.length">
      <router-link class="chouse" tag="div" :to="{name:'FinalPaymentShop'}">选择商品<img src="./img/back.png" alt=""></router-link>
      <div class="list">
        <div class="tap" v-for="item in carinfo">
          <span class="onetou">{{item.name}}</span>
          <span class="onenumber">×{{item.numbers}}</span>
          <span class="oneprice">￥{{item.price * item.numbers}}</span>
          <div class="onejian" @click="subCar(item.id)">-</div>
          <span class="onenum">{{item.numbers}}</span>
          <div class="onejia" @click="addCar(item.id)">+</div>
          <i class="el-icon-delete"></i>
        </div>
      </div>
      <div class="upload">
        <div class="upload-word">上传服务评分</div>
        <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="add">
        <div class="miaoshu">添加文字描述...</div>
      </div>
      <div class="youhui">
        <div class="onedian"></div>
        <span class="oneleft">优惠劵</span>
        <span class="oneright">无可用优惠劵</span>
        <img src="./img/back.png" alt="">
      </div>
      <div class="gold">
        <div class="twodian"></div>
        <span class="twoleft">金币</span>
        <span class="tworight">使用40金币抵扣4元</span>
        <img src="./img/back.png" alt="">
      </div>
      <div class="dingjin">
        <div class="threedian"></div>
        <span class="threeleft">定金</span>
        <span class="threeright">-30元</span>
        <img src="./img/back.png" alt="">
      </div>
      <div class="di" style="width: 100%;height: 1.08rem"></div>
      <div class="footer" style="position: fixed;bottom: 0;">
        <div class="fourdian"></div>
        <span class="heji">合计 :</span>
        <span class="price">￥{{total}}</span>
        <div class="pay" @click="js">立即付款</div>
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
        cart_address_id: 0,
        // formdata:{ }
        form: {
          order_remark: ""
        },
        _csrf: "",
        coinFlag: false,
        coin: 0,
        coin1: 0,
        coupon: [],
        couFlag: false,
        coupon1: {},
        goods: {},
        flag: true,
        carinfo: null,
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      useCou(item) {
        this.couFlag = false;
        this.coupon1 = item;
        this.coinFlag = false;
      },
      getData() {
        this.$http({
          headers: getheaders,
          url: '/checkout/onepage/index',
          method: 'get'
        }).then(res => {
          if (res.status == 200) {
            let data = res.data.data;
            this.carAddress = data['cart_address'];
            this.carInfo = data['cart_info'];
            this.cart_address_id = data['cart_address_id'];
          }
        })
      },
      handleSubmit() {
        if (!this.flag) {
          return;
        }
        this.flag = true;
        let _this = this;
        this.formdata = {
          _csrf: this._csrf,
          address_id: this.carAddress.address_id,
          customer_id: localStorage["fecshop-uuid"],
          product_id: this.$route.query.gid,
          shop_id: this.$route.query.sid,
          coupon_id: this.coupon1.coupon_id,
          coin: this.coin,
          order_remark: this.form.order_remark
        };
        this.$http({
          headers: postheaders,
          method: 'post',
          url: 'customer/car/createorder',
          data: _this.$qs.stringify(_this.formdata)
        }).then(res => {
          //生成订单成功
          if (res.data.info === "生成订单成功") {
            this.$router.push("/Order");
          }
        })

      },
      getCarAddress() {
        if (sessionStorage.aid) {
          this.$http.get("customer/addr/addrfind?id=" + sessionStorage.aid).then(res => {
            this.carAddress = res.data;
          })
        }
      },
      check() {
        this.$http.get("/customer/addr/getcsrf").then(res => {
          this._csrf = res.data;
        })
      },
      addCar(_id) {
        let goods = this.carinfo.filter(ele => ele.id == _id)[0];
        goods.numbers++;


      },
      subCar(_id) {
        let goods = this.carinfo.filter(ele => ele.id == _id)[0];
        goods.numbers--;
        if (goods.numbers <= 0) {
          goods.numbers = 0;
        }

      },
      calcCar() {
        let number = 0;
        let arr = this.carinfo;
        arr.forEach(ele => {
          number += ele.numbers * ele.price;
        });
        this.total = number;
      },
      js() {
        let obj = {};
        let arr = this.carinfo.filter(ele => ele.numbers > 0);
        obj.order_id = this.$route.query.orderid;
        obj.info = JSON.stringify(arr);
        if (!arr.length) {
          this.$message.info('请选择最少一件商品');
          return;
        }

        this.$http({
          headers: postheaders,
          method: 'post',
          url: 'customer/car/payservicefees2',
          data: this.$qs.stringify(obj)
        }).then(res => {
          if (res.data.status == 1) {
            this.$router.push({name: 'ServicePay3', query: {price: this.total, orderid: this.$route.query.orderid}})
          }
        })
      },
      getGoods() {
        this.$http.get("/customer/car/payservicefees", {
          headers: getheaders,
          params: {
            order_id: this.$route.query.orderid
          }
        }).then(res => {
          this.goods = res.data.data;
          this.carinfo = this.goods.map(ele => ({
            id: ele._id.$oid,
            name: ele.name.name_zh,
            numbers: 0,
            price: ele.special_price
          }))
        });
      },
      handleRemove(file, fileList) {
          console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
      }
    },
    created: function () {
      // this.getData();
      // this.getCarAddress();
      // this.check();
      this.getGoods();
      if (!sessionStorage.aid) {
        this.$http.get("/customer/addr/getdefaultaddr?id=" + localStorage['fecshop-uuid']).then(res => {
          if (res.data.code == 200) {
            this.carAddress = res.data.data;
          }
        })
      }
    },
    watch: {
      'carinfo': {
        handler: function () {
          this.calcCar();
        },
        deep: true
      }
    }
  }
</script>
<style>
  @import url('./static/css/fileOrder.css');
  .upload{
    width: 100%;
    height: auto;
    padding:0.2rem 0.24rem;
    box-sizing: border-box;
  }
  .upload .upload-word{
    font-size: 0.3rem;
    padding-bottom: 0.2rem;
    color: #969899;
    box-sizing: border-box;
  }
  .line{
    width: 6.25rem;
    height: 0.01rem;
    background: #e5e5e5;
    position: absolute;
    top: 0.85rem;
    left: 0.5rem;
  }
  .upload img{
    margin-left: 0;
  }
</style>
