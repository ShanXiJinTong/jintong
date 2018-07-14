<template>
  <div class="shdBox">
    <ul class="totalList">
        <router-link tag="li" class="list" :to="{name:'HelpDetail' , query:{hid:1}}">
          <div class="listLeft">
            <img src="../static/img/shd-img/tubiao.png" alt="">
            <span>如何预约上门服务</span>
          </div>
          <img src="../static/img/shd-img/shdBack1.png" alt="">
        </router-link>
        <router-link tag="li" class="list" :to="{name:'HelpDetail' , query:{hid:2}}">
          <div class="listLeft">
            <img src="../static/img/shd-img/tubiao.png" alt="">
            <span>如何下单</span>
          </div>
          <img src="../static/img/shd-img/shdBack1.png" alt="">
        </router-link>
    </ul>
  </div>
</template>
<script>
    export default {
        name: 'Help',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(../static/css/shd-help.css);
</style>
