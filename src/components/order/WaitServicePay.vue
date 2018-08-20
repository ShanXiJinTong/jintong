<template>
    <div style="padding-bottom:1.08rem;">
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
        <div v-if="goods.special_price">
            <div class="cloth">
                <div class="cleft">
                    <a href="">
                        <div class="img" :style="'background:url('+$store.state.imghost+'media/catalog/product/'+goods['image']['main']['image']+') no-repeat center center /100% auto'"></div>
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
                            {{1}}
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
                <div class="aright" @click="couFlag=true;coinFlag = false">
                    <span v-if="coupon.length==0">无可用优惠卷</span>
                    <span v-else-if="coupon1.coupon_name">{{coupon1.coupon_name}}</span>
                    <span v-else-if="!coupon1.coupon_name">点击使用优惠卷</span>
                    <img src="./static/img/xiayibu.png" alt="">
                </div>
            </a>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>
        <div class="aa" @click="coinFlag=true;couFlag = false;">
            <div class="alfet">
                <div class="yuanjiao11"></div>
                <span>金币</span>
            </div>
            <a href="javascript:">
                <div class="aright">
                    <span>{{coin}}</span>
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
                <input type="text" placeholder="请输入备注(25字以内)" v-model="form.order_remark">
            </div>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>
        <div class="root">
            <div class="rleft">
                <div class="yuanjiao111"></div>
                <span>合计:</span>
                <div class="jiage"> ¥{{$route.query.price}}</div>
            </div>
            <div class="rright" @click="handleSubmit">
                提交订单
            </div>
        </div>
        <div v-if="coinFlag" style="position: fixed;z-index: 99999;bottom: 0;left: 0;width: 100%;height: 1.7rem;background: #f3f3f3;">
       	<div style="max-width: 75rem;margin: 0 auto;height: 100%;display: flex;align-items: center;justify-content: space-around;">
       		<button style="width: 1.3rem;height: 0.7rem;outline: none;border: none;background: #E7F6FF;color: #3BACFE;border-radius:0.15rem;" @click="coin=0;coinFlag=false;">不使用</button>
       		<button style="width: 1.3rem;height: 0.7rem;outline: none;border: none;background: #3BACFE;color: #fff;border-radius: 0.15rem;" @click="coin=coin1;coinFlag=false;">使用</button>
       	</div> 	
        </div>
        <div v-if="couFlag" style="position: fixed;bottom: 0;z-index: 9999;width: 100%;max-width:7.5rem;background: #f3f3f3;padding:0 0.24rem;">
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
					<div class="get" @click="useCou(item)">使用</div>
				</li>
				<li class="tklist" style="height: 1rem;">
					<div style="margin: 0 auto;background: #C1C1C1;padding: 0.2rem 0.3rem;border-radius: 5px;color: #fff;" @click="couFlag=false;coupon1={}">不使用优惠卷</div>
				</li>
			</ul>
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
                	order_remark:""
                }
                ,
                _csrf:"",
                coinFlag:false,
                coin:0,
                coin1:0,
                coupon:[],
                couFlag:false,
                coupon1:{},
                goods:{}           
            }
        },
        methods: {
        	useCou(item){
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
                        let data=res.data.data;
                        this.carAddress=data['cart_address'];
                        this.carInfo=data['cart_info'];
                        this.cart_address_id=data['cart_address_id'];
                    }
                })
            },
            handleSubmit(){

                let _this=this;
                this.formdata={
                    _csrf:this._csrf,
                    address_id: this.carAddress.address_id,
                    customer_id:localStorage["fecshop-uuid"],
                    product_id:this.$route.query.gid,
                    shop_id:this.$route.query.sid,
                    coupon_id:this.coupon1.coupon_id,
                    coin:this.coin,
                    order_remark:this.form.order_remark
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
            getCarAddress(){
              if(sessionStorage.aid){
                  this.$http.get("customer/addr/addrfind?id="+sessionStorage.aid).then(res=>{
                    this.carAddress=res.data;
                  })
              }
            },
            check(){
                this.$http.get("/customer/addr/getcsrf").then(res => {
                    this._csrf=res.data;
                })
            },
            getCoin(){
            	this.$http.get("/customer/car/getcoin",{
            		params:{
            			money:this.$route.query.price,
            			customer_id:localStorage['fecshop-uuid']
            		}
            	}).then(res=>{
            		this.coin = res.data.coin;
            		this.coin1 = res.data.coin;
            	});
            },
            getCou(){
            	this.$http.get("/customer/car/getcoupon",{
            		params:{
            			customer_id:localStorage['fecshop-uuid'],
            			product_id:this.$route.query.gid,
            			money:this.$route.query.price,
            			shop_id:this.$route.query.sid
            		}
            	}).then(res=>{
            		this.coupon = res.data.data
            	});
            },
            getGoods(){
            	this.$http.get("/customer/car/getgoods",{
            		params:{
            			id:this.$route.query.gid
            		}
            	}).then(res=>{
            		this.goods = res.data.data;
            	});
            }
        },
        created: function () {
            this.getData();
            this.getCarAddress();
            this.check();
            this.getCoin();
            this.getCou();
            this.getGoods();
            if(!sessionStorage.aid){
            	this.$http.get("/customer/addr/getdefaultaddr?id="+localStorage['fecshop-uuid']).then(res=>{
            		if(res.data.code==200){
                    	this.carAddress=res.data.data;
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
