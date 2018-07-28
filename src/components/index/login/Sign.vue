<template>
  <div id="Sign">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <form >
          <ul>
              <li class="login">
                  <p >用户注册</p>
              </li>
              <li class="one">
                  <img src="../static/img/img.png" alt="">
                  <b>+86</b>

                  <el-form-item label="" prop="phone">
                      <el-input v-model="ruleForm2.phone" placeholder="请填写手机号码"></el-input>
                  </el-form-item>

                  <!--<input type="text" placeholder="请填写手机号码" v-model="phone">-->
              </li>
              <li class="two">
                  <div class="dot"></div>
                  <input type="text" placeholder="短信验证码" v-model="ruleForm2.code">
                  <p>获取验证码</p>
              </li>
              <li class="three">
                  <div class="icon"></div>

                  <el-form-item label="" prop="pass" id="input">

                      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请填写6-20位字母 数字的密码" ></el-input>

                  </el-form-item>
                  <!--<input type="password" placeholder="请填写6-20位字母 数字的密码" v-model="form.password1">-->
              </li>
              <li class="four">
                  <div class="icon"></div>

                  <el-form-item label="" prop="checkPass">
                      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="重复输入您的密码"></el-input>
                  </el-form-item>

                  <!--<input type="password" placeholder="重复输入您的密码" v-model="form.password2">-->
              </li>
              <li class="bigbox" @click="submit">提 交</li>
              <li class="txt">
                  <div class="round"><div class="small"></div></div>
                  <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
              </li>

          </ul>
      </form>
      </el-form>
  </div>
</template>
<script>
    export default {
        name: 'Sign',
        data() {
            var validPhone=(rule, value,callback)=>{
                if (value === ''){
                    callback(new Error('请输入电话号码'))
                }else  if (!isvalidPhone(value)){
                    callback(new Error('请输入正确的11位手机号码'))
                }else {
                    callback()
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {

                    ruleForm2: {
                        pass: '',
                        checkPass: '',
                        phone:'',
                        code:""

                    },
                    rules2: {
                        pass: [
                            { validator: validatePass, trigger: 'blur' }
                        ],
                        checkPass: [
                            { validator: validatePass2, trigger: 'blur' }
                        ],
                        phone: [
                            { validator: validPhone, trigger: 'blur' }
                        ]
                    }

            }
        },
        methods:{
            submit(){
                this.$http({
                    methods:'post',
                    header: {
                        'fecshop-uuid': localStorage['fecshop-uuid'],
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    url:'/customer/register/account',
                    data: this.$qs.stringify(this.ruleForm2)
                }).then(res=>{
                    console.log(res);
                    if(res.status==200){

                        localStorage['access-token'] = res.headers['access-token'];
                        localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                        this.$router.push({name:'MessageFill'});
                    }

                })

            }
        },
        mounted(){
            this.$http({
                method: 'post',
                url:'/customer/register/account'
            }).then(res=>{
                localStorage.setItem("fecshop-uuid",res.headers['fecshop-uuid']);
            })
        }
    }
</script>
<style>
    @import url('../static/css/signIn.css');
</style>
