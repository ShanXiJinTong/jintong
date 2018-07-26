<template>
  <div class="content">
    <form action="">
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">联系人</div>
        </div>
        <input class="mwq-textarea" placeholder="姓名" value="xsz" v-model="form.first_name">
      </div>
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">联系方式</div>
        </div>
        <input class="mwq-textarea" placeholder="电话" v-model="form.telephone">
      </div>
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">服务地址</div>
          <div class="mwq-enter">
            <img src="../static/img/enter.png" alt="">
          </div>
        </div>
        <input class="mwq-textarea" v-model="form.street1">
      </div>
      <!--<div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">门牌号</div>
        </div>
        <input class="mwq-textarea">
      </div>-->
        <button  class="mwq-reserve" @click="saveAddress(form)">
            保存
        </button>
        <!--<input type="submit" class="mwq-reserve"  value="保存">-->
    </form>
  </div>
</template>
<script>
  import {getheaders , postheaders} from '../../config'
  export default {
    name: 'EditAddress',
    data() {
      return {
        addressid:1,
        form: {
          first_name: '',
          telephone: '',
          addressCountry: '',
          addressState: '',
          city: '',
          street1: '',
          last_name: 'fecshop',
          email: 'fecshop@qq.com',
          isDefaultActive: true,
          street2: 'fecshop',
          zip: 'fecshop',
        }
      }
    },
    methods:{
      getAddress(addressid){
         this.$http.get('/customer/address/edit',{
            getheaders,
            params:{
               address_id:addressid
            }
         }).then(res=>{
            let data  = res.data.data.address;
         })
      },
      saveAddress(form){
        console.log(form);
        this.$http({
           method: 'post',
           url: '/customer/address/save',
           postheaders,
           data: form
         }).then(res=>{
            console.log(res);
         })
      }
    },
    mounted:function(){
       this.addressid = this.$route.query.aid;
       this.getAddress(this.addressid);
    }
  }
</script>
<style scoped>
  @import url(../static/css/addAddress.css);
</style>
