<template>
	<div class="content">
		<div class="mwq-model" v-for="item in addressList">
			<div class="mwq-adressText" @click="chooseAddress(item)">
				<div class="mwq-info">
					<div class="mwq-name">{{item['first_name']}}</div>
					<div class="mwq-phoneNumber">{{item['telephone']}}</div>
				</div>
				<div class="mwq-adress">{{item['state']}} {{item['city']}} {{item['street1']}} {{item['street2']}}</div>
			</div>
			<div class="mwq-label">
				<div class="mwq-left">
					<div :class="['mwq-icon',item['is_default']==1?'hot':'']" @click="setDefault(item)">
					</div>
					<div class="mwq-defaultAdress" @click="setDefault(item)">默认地址</div>
				</div>
				<div class="mwq-right">
					<img src="../static/img/delete.png" alt="" class="mwq-img1" @click="removeAdddress(item.address_id)">
					<router-link :to="{name:'EditAddress',query:{aid:item['address_id']}}">
						<img src="../static/img/xiugai.png" alt="" class="mwq-img2">
					</router-link>
				</div>
			</div>
		</div>
		<router-link :to="{name:'AddAddress'}" tag="div" class="mwq-newAddadress">
			新增地址
		</router-link>
	</div>
</template>
<script>
	import { getheaders, postheaders } from "../../config";

	export default {
		name: 'Address',
		data() {
			return {
				addressList: []
			}
		},
		methods: {
			setDefault(item) {
				var is_default = item.is_default == 0 ? 1 : 0;
				this.$http.get("/customer/addr/addrsavedefault", {
					params: {
						id: item.address_id,
						is_default: is_default,
						cid: localStorage['fecshop-uuid']
					}
				}).then(res => {
					if(res.data.info == "修改成功") {
						this.addressList.forEach(ele => ele.is_default = 0);
						item.is_default = is_default;
					}
				});
			},
			getAddress() {
				this.$http({
					method: 'get',
					url: '/customer/addr/addrlist?customer_id=' + localStorage["fecshop-uuid"],
					headers: getheaders
				}).then(res => {
					this.addressList = res.data.info;
				})
			},
			removeAdddress(address_id) {
				console.log(address_id);
				this.$http.get("/customer/addr/addrdel", {
					params: {
						id: address_id,
						cid: localStorage['fecshop-uuid']
					}
				}).then(res => {
					if(res.data.code == 200) {
						this.addressList = this.addressList.filter(element => element.address_id != address_id);
					}
				})
			},
			chooseAddress(item) {
				this.$router.back();
				sessionStorage.aid = item.address_id;
			}
		},
		mounted() {
			this.getAddress();
		}

	}
</script>
<style scoped>
	@import url(../static/css/Ttwo.css);
</style>