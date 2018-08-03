<template>

  <div id="UserLogin">
      <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">-->
          <ul id="ul">
              <li class="login" @click="changeOk()">
                  <p :class="{hot:isOk}">快捷登录</p><p :class="{hot:!isOk}">账号登录</p>
                  <div class="blue"></div>
              </li>

              <div class="dis" :class="{block:isOk}">
                  <li class="one">
                      <img src="../static/img/img.png" alt="">
                      <b>+86</b>
                      <input type="text" placeholder="请填写手机号码" v-model="form.email">
                  </li>
                  <li class="two">
                      <div class="dot"></div>
                      <input type="password" placeholder="短信验证码" v-model="form.password">
                      <p>获取验证码</p>
                  </li>
                  <li class="bigbox">
                      <button @click="check()">快速登录</button>

                  </li>
              </div>

              <div class="dis" :class="{block:!isOk}">
                  <li class="one">
                      <div class="dot"></div>
                      <span>用户名：</span>

                      <input type="text" v-model="ruleForm.email" placeholder="请输入手机号码">
                  </li>
                  <li class="two">
                      <div class="dot"></div>
                      <span>密&nbsp;码：</span>
                      <input type="password" v-model="ruleForm.password" placeholder="请输入密码">
                  </li>
                  <li class="bigbox">
                      <button @click="handleSubmit()">登录</button>
                  </li>

                  <el-alert
                          title="登录失败"
                          type="error"
                          show-icon class="none" :class="{block1:dis}">
                  </el-alert>

              </div>

              <li class="txt">
                  <div class="round"></div>
                  <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
              </li>
          </ul>
      <!--</el-form>-->
  </div>
</template>
<script>

    export default {
        name: 'UserLogin',
        data() {

            return {
                isOk:1,
                dis:false,
                form:{
                    email:'',
                    password:''
                },
                ruleForm: {
                    email: '',
                    password:''
                }
            }
        },
        methods:{
           check(){
            this.$http({
               method:'post',
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded',
                   'access-token':localStorage['access-token']
               },
               url:'/customer/login/account',
               data: this.$qs.stringify(this.form)
            }).then(res=>{
                if(res.data.code ==200){
                  localStorage['access-token'] = res.headers['access-token'];
                  localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                  this.$router.push({name:'Index'});
               }
            })
           },
            handleSubmit(){
                this.$http({
                    method:'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'access-token':localStorage['access-token'],
                    },
                    url:'/customer/login/account',
                    data: this.$qs.stringify(this.ruleForm)
                }).then(res=>{
                    if(res.data.code ==200){
                        localStorage['access-token'] = res.headers['access-token'];
                        localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                        this.$router.push({name:'Index'});
                    }
                })
            },

            changeOk(){
               if(this.isOk==1){
                   this.isOk=0;
               }
               else{
                   this.isOk=1;
               }
            }
        }
    }
</script>
<style>
    @import url('../static/css/phoneLogin.css');
</style>
