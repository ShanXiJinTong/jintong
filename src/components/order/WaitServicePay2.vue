<template>
	<div v-if="this.goods.length">
    <div class="list">
      <div class="tap" v-for="item in carinfo">
        <span class="onetou">{{item.name}}</span>
        <span class="onenumber">×{{item.numbers}}</span>
        <span class="oneprice">￥{{item.price * item.numbers}}</span>
        <div class="onejian" @click="subCar(item.id)">-</div>
        <span class="onenum">{{item.numbers}}</span>
        <div class="onejia" @click="addCar(item.id)">+</div>
      </div>
    </div>
    <!--<div class="add">-->
      <!--<div class="miaoshu">添加文字描述...</div>-->
    <!--</div>-->
    <!--<div class="youhui">-->
      <!--<div class="onedian"></div>-->
      <!--<span class="oneleft">优惠劵</span>-->
      <!--<span class="oneright">无可用优惠劵</span>-->
      <!--<img src="img-5/img-y/back.png" alt="">-->
    <!--</div>-->
    <!--<div class="gold">-->
      <!--<div class="twodian"></div>-->
      <!--<span class="twoleft">金币</span>-->
      <!--<span class="tworight">使用40金币抵扣4元</span>-->
      <!--<img src="img-5/img-y/back.png" alt="">-->
    <!--</div>-->
    <!--<div class="dingjin">-->
      <!--<div class="threedian"></div>-->
      <!--<span class="threeleft">定金</span>-->
      <!--<span class="threeright">-30元</span>-->
      <!--<img src="img-5/img-y/back.png" alt="">-->
    <!--</div>-->
    <!-- footer -->
    <div class="footer" style="position: fixed;bottom: 0;">
      <div class="fourdian"></div>
      <span class="heji">合计 :</span>
      <span class="price">￥{{total}}</span>
      <div class="pay" @click="js">立即付款</div>
    </div>
  </div>
</template>
<script>
	import { getheaders, postheaders } from '../config'

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
				flag:true,
        carinfo:null
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
					if(res.status == 200) {
						let data = res.data.data;
						this.carAddress = data['cart_address'];
						this.carInfo = data['cart_info'];
						this.cart_address_id = data['cart_address_id'];
					}
				})
			},
			handleSubmit() {
				if(!this.flag) {
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
					if(res.data.info === "生成订单成功") {
						this.$router.push("/Order");
					}
				})

			},
			getCarAddress() {
				if(sessionStorage.aid) {
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
      addCar(_id){
        let goods = this.carinfo.filter(ele=>ele.id==_id)[0];
        goods.numbers++;


      },
      subCar(_id){
        let goods = this.carinfo.filter(ele=>ele.id==_id)[0];
        goods.numbers--;
        if(goods.numbers <= 0){
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
      js(){
        let obj = {};
        let arr =  this.carinfo.filter(ele=>ele.numbers>0);
        obj.order_id = this.$route.query.orderid;
        obj.info = JSON.stringify(arr);
        if(!arr.length){
          this.$message.info('请选择最少一件商品');
          return ;
        }

         this.$http({
           headers: postheaders,
           method: 'post',
           url: 'customer/car/payservicefees2',
           data: this.$qs.stringify(obj)
                }).then(res=>{
             if(res.data.status == 1){
               this.$router.push({name:'ServicePay3',query:{price:this.total,orderid:this.$route.query.orderid}})
             }
          })
      },
			getGoods() {
				this.$http.get("/customer/car/payservicefees", {
				  headers:getheaders,
					params: {
						order_id: this.$route.query.orderid
					}
				}).then(res => {
					 this.goods = res.data.data;
					 this.carinfo = this.goods.map(ele=>({id:ele._id.$oid,name:ele.name.name_zh,numbers:0,price:ele.special_price}))
        });
			}
		},
		created: function() {
			// this.getData();
			// this.getCarAddress();
			// this.check();
			this.getGoods();
			if(!sessionStorage.aid) {
				this.$http.get("/customer/addr/getdefaultaddr?id=" + localStorage['fecshop-uuid']).then(res => {
					if(res.data.code == 200) {
						this.carAddress = res.data.data;
					}
				})
			}
		},
      watch:{
        'carinfo':{
          handler:function(){
            this.calcCar();
          },
          deep:true
        }
      }
	}
</script>
<style scoped>
	@import url('./static/css/fileOrder.css');
</style>
