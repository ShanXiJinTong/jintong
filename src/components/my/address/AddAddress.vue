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
            <el-checkbox v-model="form.isDefaultActive">是否默认</el-checkbox>
          </div>
        </div>
      </div>
      <button  class="mwq-reserve" @click="saveAddress">
        保存
      </button>
    </form>
  </div>
</template>
<script>
   import {postheaders} from "../../config";

   export default {
        name: 'AddAddress',
        data() {
            return {
              form:{
                address_id:'',
                first_name: ' 张三',
                last_name: 'full',
                telephone: '1234567',
                email: '1657612880@qq.com',
                addressCountry: '中国',
                addressState: 'China',
                city: '太原',
                street1: '平阳路',
                street2: '学府街',
                is_default:1,
                zip: 'fecshop',
                isDefaultActive: false
              }
            }
        },
        methods:{
          saveAddress(){
              this.$http({
                method:'post',
                headers:postheaders,
                url:'/customer/address/save',
                data:this.$qs.stringify(this.form)
              }).then(res=>{
                 if(res.data.code == 200){
                     this.$router.push({name:'Address'});
                 }
              })
          }
        }

    }
</script>
<style scoped>
  @import url(../static/css/addAddress.css);
</style>
