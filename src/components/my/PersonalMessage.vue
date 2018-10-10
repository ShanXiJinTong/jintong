<template>
   <section class="cyx-contain">
     <form id="form">
       <ul class="cyx-container">
         <li class="cyx-lis">
           <div class="cyx-left">
             <img class="cyx-items" src="./static/img/cyx-gerenziliao/items.png" alt="">
             <span class="cyx-title">头像</span>
           </div>
           <div class="cyx-right">
             <img class="cyx-photo" src="./static/img/cyx-gerenziliao/camera.png" alt="">
             <img class="cyx-next" src="./static/img/cyx-gerenziliao/next.png" alt="">
           </div>
         </li>
         <li class="cyx-lis">
           <div class="cyx-left">
             <img class="cyx-items" src="./static/img/cyx-gerenziliao/items.png" alt="">
             <span class="cyx-title">真实姓名</span>
           </div>
           <div class="cyx-right">
             <span class="cyx-name">张正</span>
             <img class="cyx-next" src="./static/img/cyx-gerenziliao/next.png" alt="">
           </div>
         </li>
         <li class="cyx-lis">
           <div class="cyx-left">
             <img class="cyx-items" src="./static/img/cyx-gerenziliao/items.png" alt="">
             <span class="cyx-title">性别</span>
           </div>
           <div class="cyx-right">
             <img class="cyx-sex" src="./static/img/cyx-gerenziliao/male.png" alt="" width="100%" >
             <img class="cyx-next" src="./static/img/cyx-gerenziliao/next.png" alt="">
           </div>
         </li>
         <li class="cyx-lis">
           <div class="cyx-left">
             <img class="cyx-items" src="./static/img/cyx-gerenziliao/items.png" alt="">
             <span class="cyx-title">手机号</span>
           </div>
           <div class="cyx-right">
             <span class="cyx-phone">182-2876-6902</span>
             <img class="cyx-next" src="./static/img/cyx-gerenziliao/next.png" alt="">
           </div>
         </li>
         <li class="cyx-lis">
           <div class="cyx-left">
             <img class="cyx-items" src="./static/img/cyx-gerenziliao/items.png" alt="">
             <span class="cyx-title">支付密码</span>
           </div>
           <div class="cyx-right">
             <img class="cyx-next" src="./static/img/cyx-gerenziliao/next.png" alt="">
           </div>
         </li>
       </ul>
       <!--<button class="cyx-btn" type="submit">保存</button>-->
     </form>
   </section>
</template>
<script>
    export default {
        name: 'PersonalMessage',
        data() {
            return {
              person:null
            }
        },
        methods:{
           getInfo(){
             this.$http.get('').then(res=>{

             })
           },
           notice(){
             this.$message.info('该页面暂不支持修改,请见谅');
           }
        },
        mounted:function(){
           this.notice();
        }
    }
</script>
<style scoped>
  @import  url('./static/common/header.css');
  @import url(./static/css/cyx-gerenziliao.css);
</style>
