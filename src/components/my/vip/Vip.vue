<template>
	<div>
		<div class="middle">
			<div class="person">
				<div class="left" :style="'background-image: url('+$store.state.imghost+myInfo.headImg+');'"></div>
				<div class="middle">
					<span style="font-size: 0.3rem;color: #333;font-weight:bold;">{{myInfo['firstname']}}</span><br>
					<span style="font-size: 0.22rem;color: #33cc9f;font-weight: bold;">·&nbsp;</span>
					<span style="font-size: 0.2rem;color: #666;font-weight:bold;">累计充值</span>
					<span style="font-size: 0.16rem;color: #41b2fc;font-weight: bold">&nbsp;&nbsp;1689</span>
					<span style="font-size: 0.16rem;color: #333;font-weight: bold;opacity: .4">&nbsp;.&nbsp;{{newDatas.money}}</span>
				</div>
				<router-link :to="{name:'VipImprove'}" class="right">
					<div class="gb-title" style="font-size: 0.2rem">
						<span style="color: #41b2fc;font-weight: bold;margin-right: 0.1rem;">升级攻略</span>
						<div class="dian" style="border-radius: 50%;"></div>
						<div class="dian" style="color: #3bacfe;opacity: 0.5;border-radius: 50%;"></div>
						<div class="dian" style="background: #3bacfe;opacity: 0.3;border-radius: 50%;"></div>
					</div>
				</router-link>
				<div class="bottom">
					<div class="left">
						<img src="../static/img/yhq-pic/yellow.png" alt="" style="width: 0.3rem;height: 0.3rem;margin-right: 0.14rem;">
						<span style="font-size:0.22rem;color:#666;font-weight: bold ">{{oldDatas.name?oldDatas.name:"普通"}}会员</span>
					</div>
					<div class="line"></div>
					<div class="right">
						<img src="../static/img/yhq-pic/gray.png" alt="" style="width: 0.25rem;height: 0.25rem;">
						<span style="font-size:0.22rem;color: #666;font-weight: bold;margin-left: 0.16rem;">{{newDatas.name}}会员</span>
					</div>
				</div>
			</div>
		</div>
		<!--第二行-->
		<div class="content"  v-if="oldDatas.privilege">
			<div class="nxrYuan"></div>
			<span>我的<p>特权</p></span>
		</div>
		<div class="middle" v-if="oldDatas.privilege">
			<div class="box1" v-for="item in oldDatas.privilege">
				<img :src="$store.state.imghost+'images/'+item.img" alt="">
				<p>{{item.name}}</p>
			</div>
		</div>
		<!--<div class="middle" v-else>
			<div class="box1">
				无
			</div>
		</div>-->
		<!--第三行-->
		<div class="content">
			<div class="left" style="width: auto">
				<div class="nxrYuan"></div>
				<span>下一级<p>特权</p></span>
			</div>
			
		</div>

		<div class="middle">
			<div class="box1" v-for="item in newDatas.privilege">
				<img :src="$store.state.imghost+'images/'+item.img" alt="">
				<p>{{item.name}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	import { getheaders } from "../../config";

	export default {
		name: 'Vip',
		data() {
			return {
				myInfo: {},
				oldDatas:{},
				newDatas:{}
			}
		},
		methods: {
			getData() {
				this.$http({
					method: 'get',
					headers: getheaders,
					url: '/customer/editaccount/getvip?uid='+localStorage['fecshop-uuid']
				}).then(res => {
					if(res.data.code == 200){
						this.myInfo = res.data.user;
					}
					res.data.rule.forEach((val)=>{

						if(val.id == this.myInfo.level){

							
							this.oldDatas = val							
						}else if(val.id == ((this.myInfo.level?this.myInfo.level:0)*1+1)){

					
							
							this.newDatas = val;
						}

					});

				})
			}
		},
		created() {
			this.getData();
		},
		mounted:function () {
            document.setTitle('我的特权会员');
        }
	}
</script>
<style scoped>
	@import url(../static/css/yhq-myVip.css);
</style>