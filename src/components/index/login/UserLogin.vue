<template>
	<div id="UserLogin" style="overflow: hidden;">
		<ul id="ul">
			<li class="login" @click="changeOk()">
				<p :class="{hot:isOk}">快捷登录</p>
				<p :class="{hot:!isOk}">账号登录</p>
				<div class="blue"></div>
			</li>
			<div class="dis" :class="{block:isOk}">
				<li class="one">
					<img src="../static/img/img.png" alt="">
					<b>+86</b>
					<input type="text" placeholder="请填写手机号码" v-model="form.tel" @blur="checkTel">
				</li>
				<li class="two">
					<div class="dot"></div>
					<input type="password" placeholder="短信验证码" v-model="form.password">
					<p :class="{btn:flag,btn1:!flag}" @click="fs">获取验证码</p>
				</li>
				<li class="bigbox">
					<button @click="check()">快速登录</button>
				</li>
			</div>
			<div class="dis" :class="{block:!isOk}">
				<li class="one">
					<div class="dot"></div>
					<span>用户名：</span>

					<input type="text" v-model="ruleForm.tel" placeholder="请输入手机号码">
				</li>
				<li class="two">
					<div class="dot"></div>
					<span>密&nbsp;码：</span>
					<input type="password" v-model="ruleForm.password" placeholder="请输入密码">
				</li>
				<li class="bigbox">
					<button @click="handleSubmit()">登录</button>
				</li>
			</div>
			<li class="txt">
				<div class="round"></div>
				<router-link :to="{name:'Sign'}">注册即视为同意接受晋彤电商发送的商业性信息</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'UserLogin',
		data() {
			return {
				isOk: 1,
				dis: false,
				form: {
					tel: '',
					password: ''
				},
				ruleForm: {
					tel: '',
					password: ''
				},
				flag: false,
				param: false
			}
		},
		methods: {
			check() {
				if(this.form.tel == "") {
					this.$message({
						message: '请输入电话码',
						type: 'warning',
						duration: 700
					});
				} else if(!this.form.password) {
					this.$message({
						message: '请输入验证码',
						type: 'warning',
						duration: 700
					});
				} else if(!this.flag) {
					this.$message({
						message: '手机号未注册',
						type: 'warning',
						duration: 700
					});
				} else if(this.param == this.form.password && this.param) {

					this.$http.get("/customer/login/getuserinfo?tel=" + this.form.tel).then(res => {
						if(res.data.code == 200) {
							localStorage['access-token'] = 123123123;
							localStorage['fecshop-uuid'] = res.data.data.id;
							document.cookie = "userName=" + res.data.data.firstname;
							document.cookie = "userId=" + res.data.data.id;
							this.$router.go(-1);
							this.$message({
								message: '登录成功',
								type: 'success',
								duration: 700
							});
						}else{
							
						}
					});

				} else {
					this.$message({
						message: '验证码输入有误',
						type: 'warning',
						duration: 700
					});
				}

			},
			fs() {
				if(!this.flag) {

					return;
				}
				this.$http.get("/customer/login/fasong?tel=" + this.form.tel).then(res => {

					if(res.data.code == 200) {
						this.$message({
							message: '发送成功',
							type: 'success',
							duration: 700
						});
						this.param = res.data.param;
					}else{
						this.$message({
							showClose: true,
							message: '登录失败，请重新登录',
							type: 'error',
							duration: 700
						});
					}

				});
			},
			handleSubmit() {
				this.$http({
					method: 'post',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'access-token': localStorage['access-token'],
					},
					url: '/customer/login/checklogin',
					data: this.$qs.stringify(this.ruleForm)
				}).then(res => {
					if(res.data.status == 200) {
						localStorage['access-token'] = 123123123;
						localStorage['fecshop-uuid'] = res.data.id;
						document.cookie = "userName=" + res.data.firstname;
						document.cookie = "userId=" + res.data.id;
						this.$router.go(-1);
						this.$message({
							message: '登录成功',
							type: 'success',
							duration: 700
						});
					} else {
						this.$message({
							showClose: true,
							message: '登录失败，请重新登录',
							type: 'error',
							duration: 700
						});
					}
				})
			},

			changeOk() {
				if(this.isOk == 1) {
					this.isOk = 0;
				} else {
					this.isOk = 1;
				}

			},
			checkTel() {
				if(!this.form.tel) {
					return;
				}
				this.$http.get("/customer/login/checktel?tel=" + this.form.tel).then(res => {
					if(res.data.code != 200) {
						this.flag = false;
						this.param = false;
						this.$message({
							message: res.data.info,
							type: "warning",
							duration: 600
						});
					} else {
						this.flag = true;
					}
				});
			}
		}
	}
</script>
<style>
	@import url('../static/css/phoneLogin.css');
</style>