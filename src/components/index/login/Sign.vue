<template>
	<div id="Sign">
		<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<form>
				<ul>
					<li class="login">
						<p>用户注册</p>
					</li>
					<li class="one">
						<img src="../static/img/img.png" alt="">
						<b>+86</b>

						<el-form-item label="" prop="tel">
							<el-input v-model="ruleForm2.tel" placeholder="请填写手机号码" auto-complete="true"></el-input>
						</el-form-item>
					</li>
					<li class="two">
						<div class="dot"></div>
						<input type="text" placeholder="短信验证码" v-model="code">
						<p :class="{btn:flag,btn1:!flag}" @click="fs">获取验证码</p>
					</li>
					<li class="three">
						<div class="icon"></div>

						<el-form-item label="" prop="password">
							<el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="请填写6-20位字母 数字的密码"></el-input>
						</el-form-item>
						<!--<input type="password" placeholder="请填写6-20位字母 数字的密码" v-model="ruleForm2.password">-->
					</li>

					<li class="four">
						<div class="icon"></div>
						<el-form-item label="" prop="repassword">
							<el-input type="password" v-model="ruleForm2.repassword" auto-complete="off" placeholder="重复输入您的密码"></el-input>
						</el-form-item>
						<!--<input type="password" placeholder="重复输入您的密码" v-model="ruleForm2.password">-->
					</li>
					<li class="bigbox" @click="submit">提 交</li>
					<li class="txt">
						<div class="round">
							<div class="small"></div>
						</div>
						<span>注册即视为同意接受晋彤电商发送的商业性信息</span>
					</li>

				</ul>

			</form>
		</el-form>
	</div>
</template>
<script>
    import {Input,Icon,Form} from "element-ui"
	export default {
		name: 'Sign',
		data() {
			var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			var validatePhone = (rule, value, callback) => {
				if(!value) {
					this.flag = false;
					return callback(new Error('号码不能为空!!'));
				}
				if(this.param && this.tel != this.ruleForm2.tel) {
					return callback(new Error('请重新发送验证码'));
				}
				if(!phoneReg.test(value)) {
					this.flag = false;
					return callback(new Error('格式有误'))
				}
				this.$http.get("/customer/login/checktel?tel=" + this.ruleForm2.tel).then(res => {
					if(res.data.code == 200) {
						this.flag = false;
						callback(new Error("该手机号已注册"));
					} else {
						this.flag = true;
						return callback();
					}
				});
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
//					if(this.ruleForm2.password !== '') {
//						this.$refs.ruleForm2.validateField('pass');
//					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				imgUrl: '',
				code: '',
				ruleForm2: {
					"tel": "",
					"password": "",
					"repassword": ""
				},
				flag: false,
				param: false,
				rules: {
					tel: [{
						required: true,
						validator: validatePhone,
						trigger: 'blur'
					}],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					repassword: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
				},
				tel: "",
				flag1: true
			}
		},
		methods: {
			submit() {
				if(this.param != this.code) {
					this.$message({
						message: '验证码输入有误',
						type: 'error',
						duration: 800
					});
					return;
				}
				this.flag1 = false;
				this.$refs['ruleForm2'].validate((valid) => {
					if(valid) {
						this.$http({
							method: 'post',
							url: '/customer/login/regedit',
							data: this.$qs.stringify(this.ruleForm2)
						}).then(res => {
							if(res.data.status == 1) {
								this.$message({
									message: '注册成功',
									type: 'success',
									duration: 700
								});
								this.$router.push({
									name: 'UserLogin'
								});
							} else {
								this.$message({
									showClose: true,
									message: '注册失败，请重新注册',
									type: 'error',
									duration: 700

								});
								this.$router.push({
									name: 'Sign'
								});
								this.flag1 = true;
							}

						})
					}
				});
			},
			fs() {
				if(!this.flag) {
					return;
				}
				this.$http.get("/customer/login/fasong?tel=" + this.ruleForm2.tel).then(res => {

					if(res.data.code == 200) {
						this.$message({
							message: '发送成功',
							type: 'success',
							duration: 700
						});
						this.param = res.data.param;
						this.tel = this.ruleForm2.tel;
					} else {
						this.$message({
							showClose: true,
							message: '发送失败,请重新发送',
							type: 'error',
							duration: 700
						});
					}
				})
			}
		},

		mounted:function () {
            document.setTitle('晋彤');
        }
	}
</script>
<style>
	@import url('../static/css/signIn.css');
	.el-input__inner {
		background: none;
	}
</style>