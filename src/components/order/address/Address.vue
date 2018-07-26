<template>
  <div class="content">
    <div class="mwq-model" v-for="item in addressList" @click="setDefault(item)">
      <div class="mwq-adressText">
        <div class="mwq-info">
          <div class="mwq-name">{{item['first_name']+item['last_name']}}</div>
          <div class="mwq-phoneNumber">{{item['telephone']}}</div>
        </div>
        <div class="mwq-adress">{{item['street1']+item['street2']}}</div>
      </div>
      <div class="mwq-label">
        <div class="mwq-left">
          <div :class="['mwq-icon',item['is_default']==1?'hot':'']">
            <!--<img :src="item['is_default'] == 1?'../static/img/gouxuan.png':''" alt="">-->
          </div>
          <div class="mwq-defaultAdress">默认地址</div>
        </div>
        <div class="mwq-right">

          <img src="../static/img/delete.png" alt="" class="mwq-img1">
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
  import headers from '../../config'

  export default {
    name: 'Address',
    data() {
      return {
        addressList: [],
        defaultAddress: {
          first_name: '',
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
    methods: {
      setDefault(item) {
        this.addressList.forEach(element => {
          element['is_default'] = 2;
        });
        let currentaddress = this.addressList.filter(element => element.address_id === item.address_id)[0];
        currentaddress['is_default'] = 1;
      },
      getAddress() {
        this.$http.get('/customer/address/index', {
          headers
        }).then(res => {
          this.addressList = res.data.data.addressList;
          let address = this.addressList.filter(element => element['is_default'] == 1)[0];
          for (let i in this.defaultAddress) {
            this.defaultAddress[i] = addressList[i]
          }
        })
      },
    },
    mounted() {
      this.getAddress();
    }

  }
</script>
<style scoped>
  @import url(../static/css/Ttwo.css);
</style>
