<template>
	<div>
		<!--单品详情-->
		<div class="LZJ-singleDetail">
			<div class="LZJ-main">
				<router-link :to="{name:'WaterStoreIntro',query:{id:shop.shop_id}}" tag="div" class="LZJ-Thumb">
                    <div class="img" :style="'background:url('+$store.state.imghost+'images/'+shop.shop_logo+') no-repeat center center /100% auto'"></div>
					<!--<img :src="" alt="">-->
				</router-link>
				<div class="LZJ-infos">
					<div class="LZJ-title">{{shop.shop_company_name}}
					</div>
					<div class="LZJ-bargain">
						<div class="LZJ-already">
							<div class="LZJ-spot"></div>
							<div class="LZJ-poi">销售量</div>
							<span>{{shop.chengjiao}}</span>
						</div>
						<div class="LZJ-already">
							<div class="LZJ-spot"></div>
							<div class="LZJ-poi">成交</div>
							<span>{{shop.chengjiaolv}}%</span>

						</div>
						<div class="LZJ-already" style="margin-right: 0">
							<div class="LZJ-spot"></div>
							<div class="LZJ-poi">好评</div>
							<span>{{shop.haopinlv}}</span>
						</div>
					</div>
					<div class="LZJ-service">
						<img src="../img/icon-time.png" alt="">
						<div class="LZJ-offer">服务时间</div>
						<div class="LZJ-times">9:00-12:00</div>
					</div>
					<div class="LZJ-dates">最近可约 16:00</div>
					<div class="LZJ-advice" @click="chat(shop.uid)">咨询</div>
				</div>
			</div>
		</div>
		<!--banner-->
		<section class="wsq-banner">
			<div class="wsq-title">
				<div :class="['wsq-cateaty', isOk==1?'hot':'']" @click="checkOk(1)">全部项目</div>
				<div :class="['wsq-cateaty', isOk==2?'hot':'']" @click="checkOk(2)" style="margin: 0 0.25rem">促销项目</div>
				<div :class="['wsq-cateaty', isOk==3?'hot':'']" @click="checkOk(3 )">用户评价</div>
			</div>
		</section>
		<!--更多详情分类-->
		<div class="bag-scroll">
			<div class="sk-bag-scroll" :class="{block:isOk==1}">
					<ul class="bag-item" v-for="item in list">
						<router-link :to="{name:'XhDetail',query:{uid:item._id['$oid'],sname:shop.shop_company_name}}">

							<li class="sk-bag-photo">

								<div class="img" :style="'background: url('+$store.state.imghost+'media/catalog/product/'+item.image.main.image+')no-repeat center center /100% auto'"></div>

							</li>
							<li class="sk-bag-content">
								<div class="sk-service-type">
									<h3>{{item.name.name_en}}</h3>
								</div>
								<div class="sk-service-desc">
									<p>{{item.meta_description.meta_description_zh}}</p>
								</div>
								<div class="sk-estimate_sale_price">
									<ul class="sk-estimate sk-item">
										<li class="dot"></li>
										<li class="text" v-if="item.praise==-1">暂无评论</li>
										<li class="text" v-else>好评</li>
										<li class="number" v-if="item.praise>-1">{{item.praise}}<span>%</span></li>
									</ul>
									<ul class="sk-sale sk-item">
										<li class="dot"></li>
										<li class="text">销售量</li>
										<li class="number">{{item.volume}}</li>
									</ul>
									<ul class="sk-price">
										<li>{{item.special_price}}元/件</li>
									</ul>
								</div>
							</li>
						</router-link>
					</ul>
					<div class="jzgd" @click="infinite" v-if="flag">
						<button>
							加载更多
						</button>
					</div>
			</div>
			<div class="sk-bag-scroll" :class="{block:isOk==2}">
					<ul class="bag-item" v-for="item in list">
						<router-link :to="{name:'XhDetail',query:{uid:item._id['$oid'],sname:shop.shop_company_name}}">

							<li class="sk-bag-photo">

								<div class="img" :style="'background: url('+$store.state.imghost+'media/catalog/product/'+item.image.main.image+')no-repeat center center /100% auto'"></div>

							</li>
							<li class="sk-bag-content">
								<div class="sk-service-type">
									<h3>{{item.name.name_en}}</h3>
								</div>
								<div class="sk-service-desc">
									<p>{{item.meta_description.meta_description_zh}}</p>
								</div>
								<div class="sk-estimate_sale_price">
									<ul class="sk-estimate sk-item">
										<li class="dot"></li>
										<li class="text" v-if="item.praise==-1">暂无评论</li>
										<li class="text" v-else>好评</li>
										<li class="number" v-if="item.praise>-1">{{item.praise}}<span>%</span></li>
									</ul>
									<ul class="sk-sale sk-item">
										<li class="dot"></li>
										<li class="text">销售量</li>
										<li class="number">{{item.volume}}</li>
									</ul>
									<ul class="sk-price">
										<li>{{item.special_price}}元/件</li>
									</ul>
								</div>
							</li>
						</router-link>
					</ul>
					<div class="jzgd" @click="infinite1" v-if="flag">
						<button>
							加载更多
						</button>
					</div>
			</div>
			<div class="sk-scroll" :class="{block:isOk==3}">
				<!--nav开始-->
				<nav style="z-index: 999999999;">
					<div class="main">
						<div :class="['navBox',{hot:commentsHot==''}]" @click="handleCommentsTypeChange('')">
							<p>全部</p>
							<p>{{count.zong}}</p>
						</div>
						<div :class="['navBox',{hot:commentsHot=='hao'}]" @click="handleCommentsTypeChange('hao')">
							<p>好评</p>
							<p>{{count.hao}}</p>
						</div>
						<div :class="['navBox',{hot:commentsHot=='zhong'}]" @click="handleCommentsTypeChange('zhong')">
							<p>中评</p>
							<p>{{count.zhong}}</p>
						</div>
						<div :class="['navBox',{hot:commentsHot=='cha'}]" @click="handleCommentsTypeChange('cha')">
							<p>差评</p>
							<p>{{count.cha}}</p>
						</div>
					</div>
				</nav>
				<!--nav结束-->
					<ul class="com-item" v-for="item in comments">
						<li class="sk-photo">
							<img :src="$store.state.imghost+''+item.user.headImg" alt="">
						</li>
						<li class="sk-content">
							<div class="sk-user_time">
								<h5>{{item.name}}</h5>
								<div class="star">
									<i class="iconfont icon-xing hot"></i>
									<i class="iconfont icon-xing hot"></i>
									<i class="iconfont icon-xing hot"></i>
									<i class="iconfont icon-xing"></i>
									<i class="iconfont icon-xing"></i>
								</div>
								<span>{{item.review_date1}}</span>
							</div>
							<div class="sk-desc">
								<p>{{item.review_content}}</p>
							</div>
							<div class="sk-pos">
								<span class="province">北京</span>
								<span class="city">海淀区</span>
								<span class="service">四双跑步鞋清洗</span>
							</div>

							<div class="sk-like">
								<i class="iconfont icon-xiaoxi2"></i>
								<i class="iconfont icon-xihuan"></i>
							</div>
						</li>
					</ul>
					<div class="jzgd" @click="infinite2" v-if="flag">
						<button>
							加载更多
						</button>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	import "jquery.cookie";
	export default {
		name: 'XhStore',
		data() {
			return {
				list: [],
				isOk: 1,
				shop: {},
				comments: [],
				commentsHot: "",
				cuxiao: [],
				count: {},
				flag: true,
				page: 0
			}
		},
		methods: {
			infinite2(){
				if(!this.flag){
					return;	
				}
				if(this.page == 0){
					return;
				}
				this.getComments();
			},
			infinite1(){
				if(!this.flag){
					return;	
				}
				if(this.page == 0){
					return;
				}
				this.getCuoxiao();
			},
			infinite(){
				if(!this.flag){
					return;	
				}
				if(this.page == 0){
					return;
				}
				this.getGoods();
			},
			getShopData() {
				let id = this.$route.query.id;
				this.$http.get('/store/store/index?id=' + this.$route.query.id).then(res => {
					this.shop = res.data.store;
					for(var i in res.data.shop_count) {
						this.shop[i] = res.data.shop_count[i];
					}
					this.count = res.data.review_count;
				})
			},
			getComments() {
				let id = this.$route.query.id;
				this.$http.get("/store/store/getreview?id=" + id + "&review_type=" + this.commentsHot+"&page="+this.page).then(res => {
					this.page ++;
					res.data.review.forEach(val=>{
						this.comments.push(val);
					});
					if(res.data.review.length <10){
						this.flag = false;
					}
				})
			},
			checkOk(index) {
				this.page = 0;
				this.flag = true;
				this.comments = [];
				this.list = [];
				this.cuxiao= [];
				if(index == 1) {
					this.getGoods();
				} else if(index == 2) {
					this.getCuoxiao();
				} else if(index == 3) {
					this.getComments();
				}
				this.isOk = index;
			},
			handleCommentsTypeChange(type) {
				this.comments = [];
				this.page = 0;
				this.flag = true;
				this.commentsHot = type;
				this.getComments();
			},
			chat(friId) {
				if(!$.cookie("userId")) {
					this.$router.push({
						name: "UserLogin"
					});
					return;
				}
				this.$http.get(`http://www.chengzhanghao.com:1701/directAddFri?friId=${friId}&userId=${$.cookie("userId")}`).then(res => {
					if(res.data == "ok") {
						this.$router.push({
							name: "Dialog",
							query: {
								fid: friId,
								p: this.shop.shop_name
							}
						});
					}
				})
			},
			getGoods() {
				this.$http.get("/store/store/getgoods?id=" + this.$route.query.id+"&page="+this.page).then(res => {
					if(res.data.code == 200) {
						this.page ++;
						res.data.data.forEach(val=>{
							this.list.push(val);
						})
						console.log(res.data.data.length);
						if(res.data.data.length<10){
							this.flag = false;
							
						}
					}
				});
			},
			getCuoxiao() {
				this.$http.get("/store/store/getcuxiao?id=" + this.$route.query.id+"&page="+this.page).then(res => {
					if(res.data.code == 200) {
						this.page ++;
						res.data.data.forEach(val=>{
							this.list.push(val);
						})
						if(res.data.data.length<10){
							this.flag = false;
						}
					}
				})
			}
		},
		mounted: function() {
			this.getShopData();
			this.getGoods();
		},
	}
</script>
<style scoped>
	@import url("../css/Thirteens.css");
</style>