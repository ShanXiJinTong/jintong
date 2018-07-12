<template>
  <div class="content">
    <form action="">
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">联系人</div>
        </div>
        <input class="mwq-textarea" placeholder="姓名" value="xsz">
      </div>
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">联系方式</div>
        </div>
        <input class="mwq-textarea" placeholder="电话">
      </div>
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">服务地址</div>
          <div class="mwq-enter">
            <img src="../static/img/enter.png" alt="">
          </div>
        </div>
        <input class="mwq-textarea">
      </div>
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">门牌号</div>
        </div>
        <input class="mwq-textarea">
      </div>
      <a href="addressContent.html">
        <input type="submit" class="mwq-reserve"  value="保存">
      </a>
    </form>
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
  @import url(../static/css/addAddress.css);
</style>
