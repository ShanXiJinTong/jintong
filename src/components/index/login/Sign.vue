<template>
  <div id="Sign">
      <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <form >
          <ul>
              <li class="login">
                  <p >用户注册</p>
              </li>
              <li class="one">
                  <img src="../static/img/img.png" alt="">
                  <b>+86</b>

                  <el-form-item label="" prop="email">
                      <el-input v-model="ruleForm2.telphone" placeholder="请填写手机号码" auto-complete="true"></el-input>
                  </el-form-item>

                  <!--<input type="text" placeholder="请填写手机号码" v-model="ruleForm2.email">-->
              </li>
              <li class="two">
                  <div class="dot"></div>
                  <input type="text" placeholder="短信验证码" v-model="code">
                  <p>获取验证码</p>
              </li>
              <li class="two">
                  <div class="dot"></div>
                  <input type="text" placeholder="验证码" style="border:1px solid #000;" v-model="ruleForm2.captcha">
                  <img :src="imgUrl" alt="">
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
                  <el-form-item label="" prop="pass">
                      <el-input type="password" v-model="ruleForm2.repassword" auto-complete="off" placeholder="重复输入您的密码"></el-input>
                  </el-form-item>
                  <!--<input type="password" placeholder="重复输入您的密码" v-model="ruleForm2.password">-->
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
            var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
            var validatePhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('号码不能为空!!'))
                }
                setTimeout(() => {
                    if (!phoneReg.test(value)) {
                        callback(new Error('格式有误'))
                    } else {
                        callback()
                    }
                }, 1000)
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.password !== '') {
                        this.$refs.ruleForm2.validateField('pass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                    imgUrl:'',
                    code:'',
                    ruleForm2: {
                        "telphone": "",
                        "password": "",
                        "repassword":""
//                        "pass":"",
//                        "firstname": "",
//                        "lastname": "",
//                        "is_subscribed": "",
//                        "captcha": "",
//                        'cookies[_fta]':'9ddb336a-e4d7-e670-ca34-f36c573162b9',
//                        'cookies[_fta_site_id]':'9b17f5b4-b96f-46fd-abe6-a579837ccdd9',
//                        'cookies[_ftreturn]':'1',
//                        'cookies[_fto]':'1',
//                        'cookies[_ftactivity]':'home_page',
//                        'cookies[_ftactivity_child]':'home_page',
//                        'cookies[_ftreferdomain]':'redirect',
//                        'cookies[_ftreferurl]':'redirect',
                    },
                   rules: {
                       telphone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
                       password: [
                           { validator: validatePass, trigger: 'blur' }
                       ],
                       repassword: [
                           { validator: validatePass2, trigger: 'blur' }
                       ]
                  },
            }
        },
        methods:{
            submit(){
                this.$http({
                    method:'post',
//                    headers: {
//                        'Content-Type': 'application/x-www-form-urlencoded',
//                        'fecshop-uuid': localStorage['fecshop-uuid'],
//                        'fecshop-currency':'EUR',
//                        'fecshop-lang':'zh',
//                        'Host':'fecshop.appserver.fancyecommerce.com',
//                        'Origin':'http://demo.fancyecommerce.com',
//                        'Referer':'http://demo.fancyecommerce.com/',
//                    },
                    url:'/customer/login/regedit',
                    data: this.$qs.stringify(this.ruleForm2)
                }).then(res=>{
                    console.log(res);
                    console.log(this.ruleForm2.captcha);
                    if(res.data.status==1){
                        // localStorage['access-token'] = res.headers['access-token'];
                        // localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                        //this.$router.push({name:'Index'});
                        this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        this.$router.push({name:'UserLogin'});
                    }
                    else{
                        this.$message({
                            showClose: true,
                            message: '注册失败，请重新注册',
                            type: 'error'
                        });
                        this.$router.push({name:'Sign'});
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

            this.$http({
                method: 'post',
                headers:{
                    'access-token':localStorage['access-token'],
                    'fecshop-uuid': localStorage['fecshop-uuid']
                },
                url:'/customer/site/captcha'
            }).then(res=>{
                this.imgUrl='data:image/gif;base64,'+res.data.data.image;
            })
        }
    }
</script>
<style>
    @import url('../static/css/signIn.css');
    .el-input{
        background: none;
    }
</style>
