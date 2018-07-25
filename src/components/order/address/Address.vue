<template>
  <div class="content">
    <div class="mwq-model" v-for="item in carList">
      <div class="mwq-adressText" @click="setAddress(item)">
        <div class="mwq-info">
          <div class="mwq-name">{{item['first_name']+item['last_name']}}</div>
          <div class="mwq-phoneNumber">{{item['telephone']}}</div>
        </div>
        <div class="mwq-adress">{{item['street1']+item['street2']}}</div>
      </div>
      <div class="mwq-label">
        <div class="mwq-left">
          <div :class="['mwq-icon',item['is_default']==1?'hot':'']" @click="setDefault(item)">
            <!--<img :src="item['is_default'] == 1?'../static/img/gouxuan.png':''" alt="">-->
          </div>
          <div class="mwq-defaultAdress">默认地址</div>
        </div>
        <div class="mwq-right">

          <img src="../static/img/delete.png" alt="" class="mwq-img1" >
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
    import { mapGetters, mapMutations} from 'vuex'
    export default {
        name: 'Address',
        data() {
            return {}
        },
        computed:{
          ...mapGetters([
             'carAddress',
             'carList'
          ])
        },
        methods:{
           setDefault(item){
              let addresslist = JSON.parse( JSON.stringify( this.carList));
              addresslist.forEach(element=>{
                 element['is_default'] = 2;
              });
              let currentaddress = addresslist.filter(element=>element.address_id === item.address_id)[0];
              currentaddress['is_default'] = 1;
              this.setcarList(addresslist);
           },
           setAddress(item){
              this.setcarAddress(item);
              this.$router.back();
           },
          ...mapMutations({
             'setcarList':'carList',
             'setcarAddress':'caraddress'
          })
        }

    }
</script>
<style scoped>
  @import url(../static/css/Ttwo.css);
</style>
