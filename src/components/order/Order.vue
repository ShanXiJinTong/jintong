<template>
	<div id="Order">
		<!--横向滚动栏开始-->
		<div id="wrapper">
			<ul class="x-ulone">
				<li v-for="(tabName,index) in tabsName" :class="['x-fl',state==tabName.status?'hot':'']" @click="tabsSwitch(tabName.status)">
					<div></div>
					{{tabName.name}}
				</li>
			</ul>
		</div>
		<!--横向滚动栏结束-->
		<!--订单开始-->
		<div class="middle" id="wrapper2" style="margin-bottom: 1rem;">
				<div class="x-box" v-for="item in orderlist">
					<router-link :to="{name:'OrderDetail',query:{order_id:item.order_id}}">
						<div class="x-DR">
							<div class="x-commodity">
								<img :src="$store.state.imghost+'images/'+item.shop_logo" alt="" id="x-c-left">

								<div class="x-c-right">
									<div id="x-name"><b>{{item['increment_id']}} </b></div>
									<ul id="x-li">
										<li class="x-blue x-jone"><b> {{item.firstname}}</b></li>
										<li class="x-blue x-jtwo" v-if="item.order_status==0">待付款</li>
										<li class="x-blue x-jtwo" v-else-if="item.order_status<3">待收货</li>
										<li class="x-blue x-jtwo" v-else-if="item.order_status==4">已完成</li>
										<li class="x-blue x-jtwo" v-else-if="item.order_status==5">申请退货</li>
										<li class="x-blue x-jtwo" v-else-if="item.order_status==6">退货</li>
										<li class="x-blue x-jthree"> ¥{{item.subtotal}}</li>
									</ul>
								</div>
							</div>
						</div>
					</router-link>
				</div>
				<div class="jzgd" @click="infinite" v-if="flag==0">
					<button>
						加载更多
					</button>
				</div>
		</div>
		<!--footer结束-->
		<Tab></Tab>
	</div>
</template>
<script>
	import Tab from "../common/tab";
	import { getheaders, postheaders } from "../config";

	export default {
		name: 'Order',
		data() {
			return {
				tabsName: [{
						name: '全部',
						status: -1
					},
					{
						name: "代付款",
						status: 0
					}, {
						name: "待收货",
						status: 2
					}, {
						name: "已完成",
						status: 4
					}
				],
				active: false,
				orderlist: [],
				order_id: null,
				state: -1,
				page: 0,
				flag: 0
			}
		},
		computed: {
			display() {
				let arr = this.orderlist.filter(element => {
					if(this.state === 'all') {
						return true;
					} else {
						return element.order_status === this.state;
					}
				});
				return arr;
			}
		},
		beforeMount() {
			if(!localStorage['access-token']) {
				this.$router.replace({
					name: "UserLogin"
				});
			}
		},
		methods: {
			infinite() {
				if(this.flag == 1) {
					return;
				}
				this.getData();
			},
			tabsSwitch(statusname) {
				this.state = statusname;
				this.page = 0;
				this.orderlist = [];
				this.flag = 0;
				this.getData();
			},
			getData() {
				this.$http({
					method: 'get',
					headers: getheaders,
					url: '/customer/order/index',
					params: {
						page: this.page,
						uid: localStorage["fecshop-uuid"],
						type: this.state
					}
				}).then(res => {
					this.page++;
					if(res.data.code === 200) {
						res.data.data.forEach((forEach) => {
							this.orderlist.push(forEach);
						});
						if(res.data.data.length < 10) {
							this.flag = 1;
						}
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
	/*横向滚动开始*/
	
	#wrapper {
		border-bottom: 0.01rem solid #a2deff;
		width: 100%;
		max-width: 7.5rem;
		height: 0.82rem;
		box-sizing: border-box;
		position: fixed;
		/*left: 0;*/
		top: 0;
		z-index: 999;
	}
	
	#wrapper .x-ulone {
		list-style: none;
		height: 100%;
		background: #f8fcff;
		border-bottom: 0.01rem solid #a2deff;
	}
	
	.x-fl {
		display: block;
		width: 25%;
		height: 100%;
		float: left;
		font-size: 0.22rem;
		color: #c9cbcc;
		text-align: center;
		line-height: 0.82rem;
		position: relative;
	}
	
	.x-fl.hot div {
		width: 80%;
		height: 0.04rem;
		background: #36a8fe;
		position: absolute;
		left: 10%;
		bottom: -0.02rem;
		z-index: 999;
	}
	/*横向滚动结束*/
	
	.middle {
		position: absolute;
		top: 1rem;
		/*bottom: 0.98rem;*/
		left: 0;
		width: calc(100% - 0.48rem);
		margin: 0 0.24rem;
	}
	/*订单开始*/
	
	.middle .x-box {
		width: 100%;
		height: auto;
		margin-bottom: 0.3rem;
	}
	
	.middle .x-box .x-DR .x-commodity {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: flex-start;
	}
	
	#x-c-left {
		width: 1.74rem;
		height: 1.74rem;
		margin-right: 0.27rem;
		box-shadow: 0 0.03rem 0.21rem 0.01rem #dfdfdf;
		border-radius: 0.1rem;
	}
	
	.x-c-right {
		width: calc(100% - 2.01rem);
		height: 1.74rem;
		position: relative;
	}
	
	#x-name {
		width: 100%;
		margin-bottom: 0.24rem;
		font-size: 0.3rem;
		color: #4f5b64;
		display: flex;
		justify-content: space-between;
	}
	
	#x-name b {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	#x-name span {
		font-size: 0.3rem;
		color: #43c93e;
	}
	
	#x-li {
		width: 100%;
		height: 1.23rem;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	
	.x-jone {
		width: 100%;
		margin-bottom: 0.15rem;
		font-size: 0.18rem;
		color: #41b2fc;
		text-align: left;
	}
	
	.x-jtwo {
		width: 100%;
		margin-bottom: 0.24rem;
		font-size: 0.22rem;
		color: #c9cbcc;
		text-align: left;
	}
	
	.x-jtwo b {
		color: #36a8fe;
		font-weight: bold;
	}
	
	.x-jthree {
		width: 100%;
		font-size: 0.22rem;
		color: #646666;
		text-align: left;
	}
	
	.x-jfour {
		font-size: 0.22rem;
		color: #646666;
		text-align: left;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	
	.x-jfive {
		width: 100%;
		font-size: 0.3rem;
		color: #fbb548;
		text-align: right;
		position: absolute;
		bottom: -0.8rem;
	}
	
	.x-blue:before {
		content: "\02022";
		color: #41b2fc;
		margin-right: 0.1rem;
	}
	
	.x-green:before {
		content: "\02022";
		color: #31d094;
		margin-right: 0.1rem;
	}
	/*订单结束*/
	/*按键开始*/
	
	.x-an {
		width: 100%;
		height: 0.7rem;
		display: flex;
		justify-content: flex-end;
		margin-top: 0.01rem;
		margin-bottom: 0.6rem;
	}
	
	.x-anone {
		width: auto;
		height: 0.61rem;
		padding: 0 0.62rem;
		background: linear-gradient(to right, #27d29c, #33e171);
		box-shadow: 0 0.04rem 0.2rem rgba(55, 223, 116, 0.75);
		border-radius: 3rem;
		margin-left: 0.29rem;
		font-size: 0.22rem;
		color: #FFFFFF;
		text-align: center;
		outline: none;
	}
	
	.x-antwo {
		background: #e7f6ff;
		box-shadow: none;
		color: #41b2fc;
	}
</style>