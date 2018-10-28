<template>
 <div id="Wxlogin">
     <ul class="box">
         <li class="txt">微信登录</li>
         <li class="pic" ><img src="../static/img/pic.png" alt=""></li>
         <li class="word">晋彤电商申请获得以下权限</li>
         <li class="word one">获得你的公开信息：昵称 头像等</li>
         <li class="btn">
             <img src="../static/img/cancel.png" alt="">

             <router-link :to="{name:'UserLogin'}">
                 <img src="../static/img/ensure.png" alt="">
             </router-link>
         </li>
     </ul>
 </div>
</template>
<script>
    export default {
        name: 'Wxlogin',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('晋彤');
        }
    }
</script>
<style scoped>
    @import url('../static/css/WeChatLogin.css');
</style>
