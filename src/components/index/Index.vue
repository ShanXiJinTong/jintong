<template>
  <div id="index">
    <section class="search">
        <router-link :to="{name:'SelectCity'}">
        <span>{{city}}</span>
        </router-link>
        <router-link :to="{name:'Search'}" class="input">
        <input type="text" disabled placeholder="搜索您需要的服务商品">
        <img src="../common/static/img/sousuo.png" alt="">
      </router-link>
    </section>
    <section class="lunbo">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in advList" v-bind:key="index">
          <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <ul class="class">
      <li v-for="(item,index) in menu"  :key="item.id">
          <router-link :to="{name:'XhList',query:{categoryId:item.id}}">
             <div class="img"></div>
             <p>{{item.name}}</p>
          </router-link>
      </li>

    </ul>
    <Tab></Tab>
  </div>
</template>
<script>
  //  import wx from "weixin-js-sdk"
  //  wx.config({
  //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //     appId: 'wx6365026f119bdb02', // 必填，公众号的唯一标识
  //     timestamp:1414587457, // 必填，生成签名的时间戳
  //     nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
  //     signature: '87b424819f1f4445d3ba81bd08a3a3013139e0ab',// 必填，签名
  //     jsApiList: ['chooseImage']         // 必填，需要使用的JS接口列表
  // });
  //
  //  wx.error(function(res){//通过error接口处理失败验证
  //    console.log(res);
  //    // config信息验证失败会执行error函数
  //  });


  import Tab from "../common/tab"
  export default {
    name: 'Index',
    data() {
      return {
        advList: [],
        city:"",
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          }
        },
        menu:[]
      }
    },
    methods: {
        getMenu(){
            this.$http.get('/general/base/menu').then(res=>{
                for(let i in res.data){
                    if(res.data[i].name ) {
                        this.menu.push({id: res.data[i]['_id'], name: res.data[i].name,child:res.data[i].child});
                    }
                }
                this.menu = this.menu.slice(1,8);
            })
        },
    },
    created() {
      this.$http.get('/cms/home/index').then((res) => {
        this.advList = res.data.data.advertiseImg.bigImgList;
      })
    },
      mounted:function () {
       /* if(!localStorage.city){;
            this.$router.push({name:'SelectCity'})
        }
          this.city=localStorage.city;*/
          this.getMenu();
      },
    components:{
      Tab
    }
  }


</script>
<style scoped>
  @import url('./static/css/index.css');
</style>
