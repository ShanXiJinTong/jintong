<template>
  <div class="content">
    <div class="mwq-box">
      <div class="mwq-title">
        <div class="mwq-juxing"></div>
        <div class="mwq-wenzi">联系人</div>
      </div>
      <div class="mwq-textarea">姓名</div>
    </div>
    <div class="mwq-box">
      <div class="mwq-title">
        <div class="mwq-juxing"></div>
        <div class="mwq-wenzi">联系方式</div>
      </div>
      <div class="mwq-textarea">电话</div>
    </div>
    <div class="mwq-box">
      <div class="mwq-title">
        <div class="mwq-juxing"></div>
        <div class="mwq-wenzi">服务地址</div>
        <div class="mwq-enter">
          <img src="../static/img/enter.png" alt="">
        </div>
      </div>
      <div class="mwq-textarea"></div>
    </div>
    <div class="mwq-box">
      <div class="mwq-title">
        <div class="mwq-juxing"></div>
        <div class="mwq-wenzi">门牌号</div>
      </div>
      <div class="mwq-textarea"></div>
    </div>
    <div class="mwq-reserve">保存</div>
  </div>
</template>
<script>
    export default {
        name: 'EditAddress',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(../static/css/Tthree.css);
</style>
