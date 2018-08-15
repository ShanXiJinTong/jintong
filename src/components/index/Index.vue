<template>
  <div id="index">
    <section class="search">
        <router-link :to="{name:'SelectCity'}">
            <div>
                <span>{{city}}</span>
                <i class="el-icon-arrow-down"></i>
            </div>
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
          <img :src="item.img" alt="">
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
      <li></li>
    </ul>
    <Tab></Tab>
  </div>
</template>
<script>

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
            })
        },
    },
    created() {
      this.$http.get('/general/base/banner').then((res) => {
          this.advList = res.data;
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
