<template>
        <button @click="fun">按钮</button>
</template>
<script>
  import wx from "weixin-js-sdk"
  wx.config({
     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
     appId: 'wx6365026f119bdb02', // 必填，公众号的唯一标识
     timestamp:1414587457, // 必填，生成签名的时间戳
     nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
     signature: '87b424819f1f4445d3ba81bd08a3a3013139e0ab',// 必填，签名
     jsApiList: ['chooseImage']         // 必填，需要使用的JS接口列表
 });

  wx.error(function(res){//通过error接口处理失败验证
    console.log(res);
    // config信息验证失败会执行error函数
  });
  export default {
    name: 'Index',
    data() {
      return {

      }
    },
    methods:{
       fun(){
         wx.ready(function(){
           wx.chooseImage({
             count: 1, // 默认9
             sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
             sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
             success: function (res) {
               var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
               console.log('asdf');
             }
           });
         });
       }
    },
    mounted(){

    }
  }






</script>
<style scoped>
</style>
