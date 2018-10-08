<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper" class="photo" v-if="shopDetail">
			<swiper-slide v-for="(item,index) in imgs" v-bind:key="index" :style="'background: url('+$store.state.imghost+'media/catalog/product/'+item.image+')no-repeat center center /100% auto'">
				<!--<img :src="'http://img.chengzhanghao.com:81/media/catalog/product/'+item.image" alt="">-->
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="introduction" v-if="shopDetail">
			<div class="one">{{shopDetail.name}}</div>
			<div class="two">
				<p v-html="shopDetail.description"></p>
			</div>
			<div class="three">
				<div class="tl" v-if="shopDetail.deposit">
						<span>定金 {{shopDetail.deposit}}元／次</span>
				</div>
				<div class="tl" v-else>
						<span>现价 {{shopDetail.special_price}}元／件</span>
						<del>原价 {{shopDetail.price}}元／件</del>
				</div>
				<div class="tr">
					<span class="tr1"></span>
					<span class="tr2">月售</span>
					<span class="tr3">{{shopDetail.volume?shopDetail.volume:0}}</span>
				</div>
			</div>
		</div>
		<div class="line">
			<div class="line1"></div>
		</div>
		<div class="lingjuan" @click="get(shopDetail.shop_id)">
			<img src="../img/lingjuan.png" alt="">
			<div class="lingjuan2">领券</div>
			<div class="lingjuan3" v-if="couponName">{{couponName}}</div>
		</div>
		<div class="tuikuan" :class="{display:display}">
			<div class="youhui">
				<div class="tktitle">
					<span class="tkcolor">领取</span>优惠券
					<div class="tkclose">
					</div>
				</div>
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
							<h5>有效期至{{item.gqsj}}</h5>
						</div>
						<div class="get" style="background: #ccc;box-shadow: 0 0.05rem 0.2rem 0 rgba(204,204,204,0.5);" v-if="item.customer_id">已领取</div>
						<div class="get" @click="getCoupon(item)" v-else>领取</div>
					</li>
				</ul>
				<div class="tkbutton" @click="get()">关闭</div>
			</div>
		</div>
		<div class="line">
			<div class="line1 "></div>
		</div>
		<div class="term">
			<div class="termm">
				<div class="term1">
					<span></span>
					<span>无额外收费</span>
				</div>
				<div class="term1">
					<span></span>
					<span>爽约包赔</span>
				</div>
				<div class="term1">
					<span></span>
					<span>不满意重新服务</span>
				</div>
			</div>
		</div>
		<div class="root">
			<div class="rl">
				<router-link :to="{name:'XhStore',query:{id:shopDetail.shop_id}}" tag="a">
					<div class="rl1">
						<img src="../img/dianpu.png" alt="">
						<span>店铺</span>
					</div>
				</router-link>
				<a href="javascript:">
					<div class="rl2">
						<img src="../img/lianxi.png" alt="">
						<span @click="chat(shopDetail.uid)">联系商家</span>
					</div>
				</a>
			</div>
			<div class="rr">
				<a @click="handleClick">
					<div class="rr1">加入购物车</div>
				</a>
				<router-link :to="{name:'WaitServicePay',query:{sid:shopDetail.shop_id,gid:shopDetail._id,price:shopDetail.special_price}}" tag="a">
					<div class="rr2">立即下单</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	import "jquery.cookie";
	export default {
		name: 'XhDetail',
		data() {
			return {
				uid: '',
				shopDetail: {},
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
					}
				},
				display: 0,
				coupon: [],
				couponName:""
			}
		},
		computed: {
			imgs() {
				if(this.shopDetail.img) {
					this.shopDetail.img.gallery.push(this.shopDetail.img.main);
					return this.shopDetail.img.gallery;
				} else {
					return [];
				}
			}
		},
		methods: {
			getCoupon(item) {
				this.$http.get('/catalog/product/getcoupon?coupon_id=' + item.coupon_id + "&customer_id=" + localStorage["fecshop-uuid"]).then(res => {
					if(res.data == "ok") {
						item.customer_id = true;
						this.coupon = Object.assign({}, this.coupon);
						this.$message({
							type: "success",
							message: "领取成功"
						});
					} else {
						item.flag = false;
						this.$message({
							type: "error",
							message: "领取失败"
						});
					}
				})
			},
			getData() {
				this.$http.get('/catalog/product/index?product_id=' + this.uid).then(res => {
					this.shopDetail = res.data.data.product;
					
					console.log(res.data.data.product);
					this.coupon = res.data.data.coupon;
					if(this.coupon.length>0){
						this.couponName = this.coupon[0].coupon_name;
					}
				})
			},
			handleClick() {
				if(!(localStorage['access-token'] && localStorage['fecshop-uuid'])) {
					this.$router.push({
						name: 'UserLogin'
					})
				} else {
					this.$http.get(`/customer/car/addcar?shop_id=${this.shopDetail.shop_id}&customer_id=${localStorage['fecshop-uuid']}&product_id=${this.shopDetail._id}&num=1`, {}).then(res => {
						if(res.data.status == 1) {
							this.$router.push({
								name: 'Car',
								query: {
									uid: this.uid
								}
							});
						}
					})
				}
			},
			get(shop_id) {
				if(this.display==1){
					this.display = 0;
					return;
				}
				if((localStorage['access-token'] && localStorage['fecshop-uuid'])) {
					this.coupon = [];
					this.$http.get('/catalog/product/index1?product_id=' + this.uid + "&customer_id=" + localStorage["fecshop-uuid"]+"&shop_id="+shop_id)
						.then(res => {
						this.coupon = res.data;
						this.coupon = Object.assign({}, this.coupon);
						this.display = 1;
					})
				} else {
					this.$router.push("/UserLogin");
				}
			},
			chat(friId) {
				if($.cookie("userId")) {
					this.$http.get(`http://www.chengzhanghao.com:1701/directAddFri?friId=${friId}&userId=${$.cookie("userId")}`).then(res => {
						if(res.data == "ok") {
							this.$router.push({
								name: "Dialog",
								query: {
									fid: friId,
									p: this.shopDetail.shop_name
								}
							});
						}
					})
				} else {
					this.$router.push("/UserLogin");
				}
			}
		},
		mounted: function() {
			this.uid = this.$route.query.uid;
			this.getData();
		}
	}
</script>
<style scoped>
	@import url("../css/Televen.css");
</style>