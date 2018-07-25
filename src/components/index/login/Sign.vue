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
                  <input type="text" placeholder="请填写手机号码">
              </li>
              <li class="two">
                  <div class="dot"></div>
                  <input type="text" placeholder="短信验证码">
                  <p>获取验证码</p>
              </li>
              <li class="three">
                  <div class="icon"></div>
                  <input type="text" placeholder="请填写6-20位字母 数字的密码">
              </li>
              <li class="four">
                  <div class="icon"></div>
                  <input type="text" placeholder="重复输入您的密码">
              </li>
              <li class="bigbox">提 交</li>
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
            return {}
        }
    }
</script>
<style scoped>
    @import url('../static/css/signIn.css');
</style>
