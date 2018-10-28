<template>
	<div>
		<div class="content">
			<img src="../static/img/gb-pic/gb.jpg" alt="" width="100%" height="100%"><span>会员<p>等级介绍</p></span>
		</div>
		<div class="xian"></div>
		<div class="middle">
			<ul style="color: #31d094;">
				<li v-for="item in list">
					<p>累计充值{{item.money}}元可成为白银会员 即可享受{{item.name}}会员特权</p>
				</li>
			</ul>
		</div>
		<!--第二部分-->
		<div class="content">
			<img src="../static/img/gb-pic/gb.jpg" alt="" width="100%" height="100%"><span>会员<b>特权介绍</b></span>
		</div>
		<div class="xian"></div>
			<div class="down" v-for="item in list1">
				<img :src="$store.state.imghost+'images/'+item.img" alt="">
				<div class="kuai">
					<h5>{{item.name}}</h5>
					<h6>{{item.name1}}及以上会员可以在第一时间免费享受{{item.name}}特权</h6>
				</div>
		</div>

	</div>
</template>
<script>
	export default {
		name: 'VipImprove',
		data() {
			return {
				list: [],
				list1: []
			}
		},
		created() {
			this.$http.get("/customer/editaccount/getvip2").then(res => {
				if(res.data.code == 200) {
					this.list = res.data.rule;
					this.list.forEach((val)=>{
						val.privilege.forEach((value,index)=>{
							if(this.list1.length==0){
								value.name1=val.name;
								this.list1.push(value);
								return ;
							}
							var n = 0;
							this.list1.forEach(value1=>{
								if(value.id == value1.id){
									n=1;
								}
							})
							if(n==0){
								value.name1=val.name;
								this.list1.push(value);
							}
						});
					});
					console.log(this.list1);
				}
			});
		},
		mounted:function () {
            document.setTitle('升级攻略');
        }
	}
</script>
<style scoped>
	@import url(../static/css/gb-JT2.css);
</style>