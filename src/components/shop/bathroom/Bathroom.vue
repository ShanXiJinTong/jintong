<template>
	<div>
		<!--banner开始-->
		<section class="wsq-banner">
			<div class="wsq-img">
				<swiper :options="swiperOption" ref="mySwiper" style="height: 100%;">
					<swiper-slide v-for="(item,index) in advList" v-bind:key="index">
						<div class="img" :style="'width:100%;height:100%;background:url('+$store.state.imghost+'media/'+item.img+')no-repeat center center /100% auto'"></div>
						<!--<img :src="$store.state.imghost+'media/'+item.img" alt="" style="width: 100%;height: 100%;">-->
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</section>
		<!--banner结束-->
		<!--热门推荐开始-->
		<div class="wsq-more"  style="padding-bottom: 1rem;">
			<section class="">
				<div class="wsq-line">
					<div class="wsq-lineL">
						<div class="wsq-dot"></div>
						<div class="wsq-text" style="letter-spacing: 0.01rem;">
							<span><b>热门</b></span>
							<span><b>推荐</b></span>
						</div>
					</div>
				</div>
				<div class="wsq-wrapper">
					<div class="wsq-scroller">
						<ul>
							<li v-for="item in recommend">
								<router-link :to="{name:'XhDetail',query:{uid:item['_id']['$oid']}}">
									<!--<router-link :to="{name:'XhDetail',query:{uid:item.product_id}}">-->
									<div class="img" :style="'background:url('+$store.state.imghost+'media/catalog/product/'+item.image.main.image+') no-repeat center center /100% auto'"></div>
									<!--<img :src="" height="94" width="90" />-->
									<!--</router-link>-->
									<div class="shopinfo">
										<div class="wsq-name">{{item.name.name_zh}}</div>
										<div class="right"><span>{{item.price}}元</span></div>
									</div>
									<h6>{{item.sku}}</h6>
									<div class="wsq-sale">
										<div class="wsq-saleLeft">
											<div class="wsq-dot"></div>
											<p>已售<span>{{item.volume?item.volume:0}}</span></p>
										</div>
										<div class="wsq-saleRight">
											<div class="wsq-dot"></div>
											<p>好评率<span>100%</span></p>
										</div>
									</div>
									<div class="wsq-desc">
										<div>非常专业</div>
										<div>价格合理</div>
									</div>
								</router-link>

							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="" v-for="val in list">
				<div class="wsq-line">
					<div class="wsq-lineL">
						<div class="wsq-dot"></div>
						<div class="wsq-text" style="letter-spacing: 0.01rem;">
							<span><b>{{val.name.name_zh}}</b></span>
							<span><b>推荐</b></span>
						</div>
					</div>
					<div class="wsq-lineR">
						<a href="">
							<router-link :to="{name:'XhList',query:{categoryId:val['_id']['$oid']}}" tag="p">
								查看更多 <span>
            <img src="../img/rightjiantou.png" height="9" width="10"/></span></router-link>
						</a>
					</div>
				</div>
				<div class="wsq-wrapper">
					<div class="wsq-scroller">
						<ul>
							<li v-for="item in val.goods">
								<router-link :to="{name:'XhDetail',query:{uid:item['_id']['$oid']}}">
									<div class="img" :style="'background:url('+$store.state.imghost+'media/catalog/product/'+item.image.main.image+')no-repeat center center /100% auto'"></div>
									<!--<img :src="" height="94" width="90" />-->
									<div class="shopinfo">
										<div class="wsq-name">{{item.name.name_zh}}</div>
										<div class="right"><span>{{item.price}}元</span></div>
									</div>

									<h6>{{item.sku}}</h6>
									<div class="wsq-sale">
										<div class="wsq-saleLeft">
											<div class="wsq-dot"></div>
											<p>已售<span>{{item.volume?item.volume:0}}</span></p>
										</div>
										<div class="wsq-saleRight">
											<div class="wsq-dot"></div>
											<p>好评率<span>100%</span></p>
										</div>
									</div>
									<div class="wsq-desc">
										<div>非常专业</div>
										<div>价格合理</div>
									</div>
								</router-link>

							</li>
						</ul>
					</div>
				</div>
			</section>
				
			<!--热门推荐结束-->
			
			
		</div>
		<Tab></Tab>
	</div>
</template>

<script>
	import Tab from '../../common/tab';

	export default {
		name: 'Bathroom',
		data() {
			return {
				list: [],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
					}
				},
				nowid: "",
				advList: [],
				recommend:[]
			}
		},
		methods: {
			getData(callback) {
				this.$http.get('/store/store/recommend').then(res => {
					if(res.status == 200) {
						this.advList = res.data.banner;
						this.recommend = res.data.recommend;
						this.list = res.data.category;
					}
				})
			}
		},
		mounted: function() {
			this.getData();
		},
		components: {
			Tab
		}
	}
</script>
<style scoped>
	@import url("../css/Tnineteen.css");
</style>