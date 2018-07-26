<template>
  <div>

          <ul>
              <li class="login">
                  <p class="hot">快捷登录</p><p class="">账号登录</p>
                  <div class="blue"></div>
              </li>
              <li class="one">
                  <img src="../static/img/img.png" alt="">
                  <b>+86</b>
                  <input type="text" v-model="email" placeholder="请填写手机号码">
              </li>
              <li class="two">
                  <div class="dot"></div>
                  <input type="text" v-model="password" placeholder="短信验证码">
                  <p>获取验证码</p>
              </li>
              <li class="bigbox">
                  <!--<router-link :to="{name:'Index'}">快速登录</router-link>-->
                  <button @click="check">Submit</button>
              </li>
              <li class="txt">
                  <div class="round"></div>
                  <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
              </li>
          </ul>

  </div>
</template>
<script>
    export default {
        name: 'UserLogin',
        data() {
            return {
               email:'',
               password:''
            }
        },
        methods:{
           check(){
            this.$http({
               method:'post',
               header: {
                'Content-Type': 'application/x-www-form-urlencoded'
               },
               url:'/customer/login/account',
               data: this.$qs.stringify({email:this.email,password:this.password})
            }).then(res=>{
               if(res.data.code ==200){
                  localStorage['access-token'] = res.headers['access-token'];
                  localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                  this.$router.push({name:'Index'});
               }
            })
           }
        }
    }
</script>
<style scoped>
    @import url('../static/css/phoneLogin.css');
</style>
