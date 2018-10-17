<template>
	<div>
		<div class="shangjiajieshao">
			<div class="top">
				<div class="yuanjiao"></div>
				<div class="jieshao">商家
					<span>介绍</span>
				</div>
			</div>
			<p class="bottom">{{info.shop_description}}</p>
		</div>
		<div class="line">
			<div class="line1"></div>
		</div>
		<div class="dianpuzhanshi">
			<div class="zi">
				<div class="yuanjiao2"></div>
				<div class="zhanshi">店铺
					<span>展示</span>
				</div>
			</div>
			<div class="photo">
				<!--<img :src="$store.state.imghost+'images/'+info.shop_logo" alt="">-->
				<div :style="'width:100%;height:100%;background: url('+$store.state.imghost+'images/'+info.shop_logo+') no-repeat center center /100% auto ;'"></div>
			</div>

		</div>
		<div class="line">
			<div class="line1"></div>
		</div>
		<div class="shangjiaxinxi">
			<div class="one">
				<div class="oneleft">
					<div class="yuanjiao3"></div>
					<div class="xinxi">商家
						<span>信息</span>
					</div>
				</div>
				<a href="javascript:">
					<div class="oneright" @click="chat(info.uid)">联系商家</div>
				</a>
			</div>
			<div class="two">
				<img src="../img/ren.png" alt=""> 商家名称 : {{info.shop_name}}
			</div>
			<div class="three">
				<img src="../img/weizhi.png" alt=""> 所在城市 : {{info.city}}
			</div>
			<div class="four">
				<img src="../img/zhizhao.png" alt=""> 注册执照 : {{info.business_licence_number}}
			</div>
		</div>
		<div class="line">
			<div class="line1"></div>
		</div>
		<div class="zhizhaogongshi">
			<div class="shang">
				<div class="yuanjiao4"></div>
				<div class="gongshi">执照
					<span>公示</span>
				</div>
			</div>
			<div class="xia">
				<img src="../img/hui.png" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	import "jquery.cookie";

	export default {
		name: 'WaterStoreIntro',
		data() {
			return {
				info: {}
			}
		},
		mounted() {
			this.$http.get("/store/store/getshopinfo?id=" + this.$route.query.id).then(res => {
				this.info = res.data.shop;
				this.info.city = res.data.city.city_name;
			});
		},
		methods: {

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
								p: this.info.shop_name
							}
						});
					}
				})
			}
		}
	}
</script>
<style scoped>
	@import url("../css/Tsixteen.css");
</style>