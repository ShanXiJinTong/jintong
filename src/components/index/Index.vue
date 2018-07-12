<template>
     <div id="index">
       <section class="search">
         <span>太原 </span><i class="iconfont icon-down"></i>
         <div class="input">
           <input type="text" placeholder="搜索您需要的服务 商品">
           <img src="./static/img/sousuo.png" alt="">
         </div>
       </section>
       <section class="lunbo">
         <div class="img"><img src="./static/img/a.png" alt=""></div>
         <div class="img"><img src="./static/img/a.png" alt=""></div>
         <div class="img"><img src="./static/img/a.png" alt=""></div>
         <ul class="btn">
           <li class="hot"></li>
           <li></li>
           <li></li>
         </ul>
       </section>
       <ul class="class">
         <li>
           <a href="./water1.html">
             <div class="img"><img src="./static/img/l1.png" alt=""></div>
             <p>水路综合</p>
           </a>
         </li>
         <li>
           <a href="">
             <div class="img"><img src="./static/img/l2.png" alt=""></div>
             <p>水管维修</p>
           </a>

         </li>
         <li>
           <a href="">
             <div class="img"><img src="./static/img/l3.png" alt=""></div>
             <p>管道维修</p>
           </a>

         </li>
         <li>
           <a href="">
             <div class="img"><img src="./static/img/l4.png" alt=""></div>
             <p>龙头维修</p>
           </a>

         </li>
         <li>
           <a href="">
             <div class="img"><img src="./static/img/l5.png" alt=""></div>
             <p>地漏疏通</p>
           </a>

         </li>
         <li>
           <a href="">
             <div class="img"><img src="./static/img/l6.png" alt=""></div>
             <p>阀门维修</p>
           </a>

         </li>
         <li>
           <a href="">
             <div class="img"><img src="./static/img/l7.png" alt=""></div>
             <p>下水道疏通</p>
           </a>

         </li>
         <li>
           <a href="">
             <div class="img"><img src="./static/img/l8.png" alt=""></div>
             <p>其他</p>
           </a>
         </li>
         <li></li>
       </ul>
     </div>
</template>
<script>
  //  import wx from "weixin-js-sdk"
  //  wx.config({
  //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //     appId: 'wx6365026f119bdb02', // 必填，公众号的唯一标识
  //     timestamp:1414587457, // 必填，生成签名的时间戳
  //     nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
  //     signature: '87b424819f1f4445d3ba81bd08a3a3013139e0ab',// 必填，签名
  //     jsApiList: ['chooseImage']         // 必填，需要使用的JS接口列表
  // });
  //
  //  wx.error(function(res){//通过error接口处理失败验证
  //    console.log(res);
  //    // config信息验证失败会执行error函数
  //  });


  export default {
    name: 'Index',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      this.$http.get('/general/base/menu').then((res) => {
        console.log(res);
      })
    }
  }


</script>
<style scoped>
  @import url('./static/css/index.css');
</style>
