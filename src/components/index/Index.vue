<template>
	<div id="index">
        <div class="sousuos">
		 <section class="search">
			<router-link :to="{name:'SelectCity'}">
				<div>
					<span>{{city}}</span>
					<i class="el-icon-arrow-down"></i>
				</div>
			</router-link>
			<router-link :to="{name:'Search'}" class="input">
				<input type="text" disabled placeholder="搜索您需要的服务商品">
				<img src="../common/static/img/sousuo.png" alt="">
			</router-link>
		</section>
        </div>
		<section class="lunbo">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide v-for="(item,index) in advList" v-bind:key="index">
					<img :src="item.img" alt="">
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<ul class="class">
			<li v-for="(item,index) in menu" :key="item.id">
				<router-link :to="{name:'XhList',query:{categoryId:item.id}}">
					<div class="img"></div>
					<p>{{item.name}}</p>
				</router-link>
			</li>
			<li></li>
		</ul>
		<Tab></Tab>
	</div>
</template>
<script>
	import Tab from "../common/tab"
	export default {
		name: 'Index',
		data() {
			return {
				advList: [],
				city: localStorage.city,
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
					}
				},
				menu: []
			}
		},
		methods: {
			getMenu() {
				this.$http.get('/general/base/menu').then(res => {
				    console.log(res.data);
						for(var i in res.data ){
							var arr = {
							    name:res.data[i].name,
								id:i
							}
							this.menu.push(arr);
						}
				})
			},
		},
		created() {
			this.$http.get('/general/base/banner').then((res) => {
				this.advList = res.data;
			})
		},
		mounted: function() {
			var _this = this;
			this.getMenu();
			window.init = function() {
				var map = new AMap.Map('container');
				AMap.plugin('AMap.CitySearch', function() {
				var citySearch = new AMap.CitySearch()
				citySearch.getLocalCity(function(status, result) {
					if(status === 'complete' && result.info === 'OK') {
						if(!_this.city)_this.city = result.city
						localStorage.city1 = result.city;
					}
				})
			})
			}
			var url = 'https://webapi.amap.com/maps?v=1.4.8&key=58000678813c445b221ca9c4a9ac60fe&callback=init';
			var jsapi = document.createElement('script');
			jsapi.charset = 'utf-8';
			jsapi.src = url;
			document.head.appendChild(jsapi);
		},
		components: {
			Tab
		}
	}
</script>
<style scoped>
	@import url('./static/css/index.css');
</style>