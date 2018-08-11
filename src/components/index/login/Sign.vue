<template>
  <div id="Sign">
      <form >
          <ul>
              <li class="login">
                  <p >用户注册</p>
              </li>
              <li class="one">
                  <img src="../static/img/img.png" alt="">
                  <b>+86</b>

                  <input type="text" placeholder="请填写手机号码" v-model="ruleForm2.email">
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
                  <input type="password" placeholder="请填写6-20位字母 数字的密码" v-model="ruleForm2.password">
              </li>
              <li class="four">
                  <div class="icon"></div>
                  <input type="password" placeholder="重复输入您的密码" v-model="ruleForm2.password">
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
                    imgUrl:'',
                    code:'',
                    ruleForm2: {
                        "email": "",
                        "password": "",
                        "firstname": "",
                        "lastname": "",
                        "is_subscribed": "",
                        "captcha": "",
                        'cookies[_fta]':'9ddb336a-e4d7-e670-ca34-f36c573162b9',
            'cookies[_fta_site_id]':'9b17f5b4-b96f-46fd-abe6-a579837ccdd9',
            'cookies[_ftreturn]':'1',
            'cookies[_fto]':'1',
            'cookies[_ftactivity]':'home_page',
            'cookies[_ftactivity_child]':'home_page',
            'cookies[_ftreferdomain]':'redirect',
            'cookies[_ftreferurl]':'redirect',
                    }
            }
        },
        methods:{
            submit(){
                this.$http({
                    method:'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'fecshop-uuid': localStorage['fecshop-uuid'],
                        'fecshop-currency':'EUR',
                        'fecshop-lang':'zh',
                        'Host':'fecshop.appserver.fancyecommerce.com',
                        'Origin':'http://demo.fancyecommerce.com',
                'Referer':'http://demo.fancyecommerce.com/',
                    },
                    url:'/customer/register/account',
                    data: this.$qs.stringify(this.ruleForm2)
                }).then(res=>{
                    console.log(res);
                    console.log(this.ruleForm2.captcha);
                    if(res.data.code==200){
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
</style>
