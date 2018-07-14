<template>
  <div class="content">
    <div class="mwq-model">
      <div class="mwq-adressText">
        <div class="mwq-info">
          <div class="mwq-name">张三丰</div>
          <div class="mwq-phoneNumber">182****9902</div>
        </div>
        <div class="mwq-adress">太原市小店区学府街滨河东路34号</div>
      </div>
      <div class="mwq-label">
        <div class="mwq-left">
          <div class="mwq-icon">
            <img src="../static/img/gouxuan.png" alt="">
          </div>
          <div class="mwq-defaultAdress">默认地址</div>
        </div>
        <div class="mwq-right">

          <img src="../static/img/delete.png" alt="" class="mwq-img1" >
          <router-link :to="{name:'EditAddress',query:{aid:1}}">
            <img src="../static/img/xiugai.png" alt="" class="mwq-img2">
          </router-link>
        </div>
      </div>
    </div>
    <div class="mwq-model">
      <div class="mwq-adressText">
        <div class="mwq-info">
          <div class="mwq-name">张三丰</div>
          <div class="mwq-phoneNumber">182****9902</div>
        </div>
        <div class="mwq-adress">太原市小店区学府街滨河东路34号</div>
      </div>
      <div class="mwq-label">
        <div class="mwq-left">
          <div class="mwq-icon">
            <img src="" alt="">
          </div>
          <div class="mwq-defaultAdress">默认地址</div>
        </div>
        <div class="mwq-right">
          <img src="../static/img/delete.png" alt="" class="mwq-img1">
          <router-link :to="{name:'EditAddress',params:{aid:2}}">
            <img src="../static/img/xiugai.png" alt="" class="mwq-img2">
          </router-link>
        </div>
      </div>
    </div>
    <router-link :to="{name:'AddAddress'}" tag="div" class="mwq-newAddadress">
      新增地址
    </router-link>
  </div>
</template>
<script>
    export default {
        name: 'Address',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(../static/css/Ttwo.css);
</style>
