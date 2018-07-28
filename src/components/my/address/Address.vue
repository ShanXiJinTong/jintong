<template>
  <div class="content">
    <div class="mwq-model" v-for="item in addressList">
      <div class="mwq-adressText" @click="setDefault(item)">
        <div class="mwq-info">
          <div class="mwq-name">{{item['first_name']+item['last_name']}}</div>
          <div class="mwq-phoneNumber">{{item['telephone']}}</div>
        </div>
        <div class="mwq-adress">{{item['street1']+item['street2']}}</div>
      </div>
      <div class="mwq-label">
        <div class="mwq-left">
          <div :class="['mwq-icon',item['is_default']==1?'hot':'']" @click="setDefault(item)">
          </div>
          <div class="mwq-defaultAdress">默认地址</div>
        </div>
        <div class="mwq-right">

          <img src="../static/img/delete.png" alt="" class="mwq-img1" @click="removeAdddress(item.address_id)">
          <router-link :to="{name:'EditAddress',query:{aid:item['address_id']}}">
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
  import {getheaders, postheaders} from "../../config";

  export default {
    name: 'Address',
    data() {
      return {
        addressList: [],
        form: {
          address_id: '',
          first_name: '',
          telephone: '',
          addressCountry: '',
          addressState: '',
          city: '',
          street1: '',
          last_name: 'fecshop',
          email: 'fecshop@qq.com',
          is_default: 1,
          street2: 'fecshop',
          zip: 'fecshop',
          isDefaultActive: false
        }
      }
    },
    methods: {
      setDefault(item) {
        this.addressList.forEach(element => element.is_default = 2);
        item.is_default = 1;

        for (let i in this.form) {
          this.form[i] = item[i] === undefined ? '中国' : item[i];
        }
        this.form.isDefaultActive = 1;
        this.$http({
          method: 'post',
          url: '/customer/address/save',
          headers: postheaders,
          data: this.$qs.stringify(this.form)
        }).then(res => {
          if (res.data.code === 200) {
            this.$router.back();
          }
        })


      },
      getAddress() {
        this.$http({
          method: 'get',
          url: '/customer/address/index',
          headers: getheaders
        }).then(res => {
          this.addressList = res.data.data.addressList;
        })
      },
      removeAdddress(address_id) {
        this.$http({
          method: 'post',
          headers: postheaders,
          url: '/customer/address/remove',
          data: this.$qs.stringify({address_id: address_id})
        }).then(res => {

          if (res.data.code == 200) {
            this.addressList = this.addressList.filter(element => element.address_id != address_id);
          }
        })
      }
    },
    mounted() {
      this.getAddress();
    }

  }
</script>
<style scoped>
  @import url(../static/css/Ttwo.css);
</style>
