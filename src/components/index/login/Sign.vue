<template>
  <div>
      <form >
          <ul>
              <li class="login">
                  <p >用户注册</p>
              </li>
              <li class="one">
                  <img src="../static/img/img.png" alt="">
                  <b>+86</b>
                  <input type="text" placeholder="请填写手机号码" v-model="form.phone">
              </li>
              <li class="two">
                  <div class="dot"></div>
                  <input type="text" placeholder="短信验证码" v-model="form.code">
                  <p>获取验证码</p>
              </li>
              <li class="three">
                  <div class="icon"></div>
                  <input type="password" placeholder="请填写6-20位字母 数字的密码" v-model="form.password1">
              </li>
              <li class="four">
                  <div class="icon"></div>
                  <input type="password" placeholder="重复输入您的密码" v-model="form.password2">
              </li>
              <li class="bigbox" @click="submit">提 交</li>
              <li class="txt">
                  <div class="round"><div class="small"></div></div>
                  <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
              </li>

          </ul>
      </form>
  </div>
</template>
<script>
    export default {
        name: 'Sign',
        data() {
            return {
                form:{
                    phone:"",
                    code:"",
                    password1:"",
                    password2:""
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
                    data: this.$qs.stringify(this.form)
                }).then(res=>{
                    console.log(res);
                    if(res.status==200){

                        localStorage['access-token'] = res.headers['access-token'];
                        localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                        this.$router.push({name:'Index'});
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
<style scoped>
    @import url('../static/css/signIn.css');
</style>
