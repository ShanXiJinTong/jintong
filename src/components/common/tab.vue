<template>
  <footer>
    <router-link to="/" exact tag="div" class="sk-tabItem">
      <img src="./static/img/sy.png" alt="">
      <h3>首页</h3>
    </router-link>
    <router-link :to="{name:'Bathroom'}" tag="div" class="sk-tabItem">
      <img src="./static/img/store.png" alt="">
      <h3>商城</h3>
    </router-link>
    <div class="sk-tabItem">
      <img src="./static/img/rz.png" alt="">
      <h3>入驻</h3>

      <!--Teight-icon开始-->
      <!--<div class="xrBg">-->
        <!--<div class="xrIcon">-->
          <!--<div class="xrIconbox">-->
            <!--<a href="">-->
              <!--<div class="xrIcon1">-->
                <!--<img src="./static/img/Teight1.png" alt="">-->
              <!--</div>-->
            <!--</a>-->
            <!--<span>商家入驻</span>-->
          <!--</div>-->
          <!--<div class="xrIconbox">-->
            <!--<a href="">-->
              <!--<div class="xrIcon2">-->
                <!--<img src="./static/img/Teight2.png" alt="">-->
              <!--</div>-->
            <!--</a>-->
            <!--<span>水司入驻</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="xrclose">-->
          <!--<div class="xrcircle">×</div>-->
        <!--</div>-->
      <!--</div>-->



      <!--Teight-icon结束-->
    </div>
    <router-link :to="{name:'Order'}" tag="div" class="sk-tabItem">
      <img src="./static/img/order.png" alt="">
      <h3>订单</h3>
    </router-link>
    <router-link :to="{name:'My'}" tag="div" class="sk-tabItem">
      <img src="./static/img/personal.png" alt="">
      <h3>我的</h3>
    </router-link>

  </footer>
</template>
<script>
  export default {
    name: 'tab',
    data() {
      return {}
    }
  }
</script>
<style scoped>
  @import url('./static/css/Teight.css');
  footer {
    width: 100%;
    height: 1rem;
    background: #f8fcff;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.13rem 0.24rem 0.08rem;
    /*padding: 0 0.24rem;*/
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  footer .sk-tabItem {
    width: 0.5rem;
    height: 0.79rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    opacity: 0.5;
  }

  footer .sk-tabItem img {
    display: block;
    height: 0.40rem;
  }

  footer .sk-tabItem h3 {
    font-size: 0.22rem;
    line-height: 0.4rem;
    font-weight: normal;
    color: #59C3FE;
  }

  footer .sk-tabItem.router-link-active {
    opacity: 1;
  }

</style>
