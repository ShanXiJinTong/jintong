<template>
  <div class="content">
    <form action="javascript:;">
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-juxing"></div>
          <div class="mwq-wenzi">联系人姓名</div>
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
          <div class="mwq-wenzi">邮箱</div>
        </div>
        <input class="mwq-textarea" placeholder="邮箱" v-model="form.email">
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
      <div class="mwq-box">
        <div class="mwq-title">
          <div class="mwq-wenzi">
          <el-checkbox v-model="form.is_default">是否默认</el-checkbox>
          </div>
        </div>
      </div>
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
          address_id:'',
          first_name: '',
          telephone: '',
          addressCountry: '',
          addressState: '',
          city: '',
          street1: '',
          last_name: 'fecshop',
          email: 'fecshop@qq.com',
          is_default:1,
          street2: 'fecshop',
          zip: 'fecshop',
          isDefaultActive: 0
        }
      }
    },
    methods:{
      getAddress(addressid){
         this.$http.get('/customer/address/edit',{
            headers:getheaders,
            params:{
               address_id:addressid
            }
         }).then(res=>{
            let data  = res.data.data.address;
           console.log(data);
           for(let i in this.form){
               this.form[i] = data[i]=== undefined ? '中国': data[i];
            }
           this.form.is_default = Boolean(this.form.is_default == 1);

         })
      },
      saveAddress(){
        this.form.isDefaultActive = Number(this.form.is_default);
        this.$http({
           method: 'post',
           url: '/customer/address/save',
           headers:postheaders,
           data: this.$qs.stringify(this.form)
         }).then(res=>{
            if(res.data.code === 200){
              this.$router.push({name:'Address'})
            }
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
