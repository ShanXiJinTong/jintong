<template>
<div>
  <section class="nxrAbout">
    <div class="nxrPic"></div>
    <div class="aboutGroup">
      <div class="aboutContent">
        <div class="nxrYuan"></div>
        <div class="aboutText">晋彤电商 V1.0</div>
        <div class="nxrYuan"></div>
      </div>
    </div>
  </section>
  <div class="hengXian"></div>
  <section class="nxrContent">

  </section>
  <div class="hengXian1"></div>
  <section class="nxrTalWeiXin">
    <div class="left">
      <div class="nxrYuan"></div>
      <div class="nxrName">微信公众号</div>
    </div>
    <div class="right">
      <span class="rightName">晋彤电商</span>
    </div>
  </section>
  <div class="hengXian2"></div>
  <section class="nxrTalWeiXin  nxrTalHeZuo">
    <div class="left">
      <div class="nxrYuan"></div>
      <div class="nxrName">商务合作</div>
    </div>
    <div class="right">
      <span class="rightName rightNumber">400-054-6902</span>
    </div>
  </section>
  <div class="hengXian2"></div>
</div>
</template>
<script>
    export default {
        name: 'About',
        data() {
            return {
               content:'这是晋彤电商'
            }
        },
        methods:{
        }
    }
</script>
<style scoped>
  @import url(static/css/nxrAbout.css);
</style>
