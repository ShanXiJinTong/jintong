<template>
  <div>
      <form >
          <ul>
              <li class="login">
                  <p class="hot">快捷登录</p><p class="">账号登录</p>
                  <div class="blue"></div>
              </li>
              <li class="one">
                  <img src="../static/img/img.png" alt="">
                  <b>+86</b>
                  <input type="text" placeholder="请填写手机号码">
              </li>
              <li class="two">
                  <div class="dot"></div>
                  <input type="text" placeholder="短信验证码">
                  <p>获取验证码</p>
              </li>
              <li class="bigbox">
                  <router-link :to="{name:'Index'}">快速登录</router-link>
              </li>
              <li class="txt">
                  <div class="round"></div>
                  <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
              </li>
          </ul>
      </form>
  </div>
</template>
<script>
    export default {
        name: 'UserLogin',
        data() {
            return {}
        }
    }
</script>
<style scoped>
    @import url('../static/css/phoneLogin.css');
</style>
