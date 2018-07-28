<template>
  <div id="search">
    <header class="tab">
      <form class="wsq-searchBox">
        <img src="../static/img/sousuoicon.png" @click='sendkey(searchkey)' style="z-index: 999"/>
        <input type="text" v-model="searchkey" placeholder="搜素您需要搜索的内容">
      </form>
    </header>
    <div v-if="flag">
      <div class="box">
        <div class="one"></div>
        <span class="blue">最近&nbsp;</span>
        <span>搜索</span>
      </div>
      <ul>
        <li v-for="(item,index) in history" v-bind:key="index" @click="sendkey(item)">{{item}}</li>
      </ul>
      <div class="box">
        <div class="one"></div>
        <span class="blue">大家&nbsp;</span>
        <span>都在搜</span>
      </div>
      <ul>
        <li v-for="(item,index) in MoutPeople" v-bind:key="index" @click="sendkey(item)">{{item}}</li>
      </ul>
    </div>
    <div v-else>
      <template v-if="products.length">

      </template>
      <template v-else>
        <div class="boxms"><img src="../static/img/icon2.png" alt=""></div>
        <div class="text">
          <p>很遗憾 没有为您找到合适的内容 <br> 换个关键词试试吧</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Search',
    data() {
      return {
        flag: true,
        searchkey: '',
        products:[],
        history: [],
        MoutPeople: ['水管', '龙头', '弹跳面板', '龙头', '水管', '龙头', '龙头',]
      }
    },
    methods: {
      sendkey(key) {

        // 在这里进行ajax请求
        if (key === '') {
          return;
        }

        this.$http.get("/catalogsearch/index/index", {
          params: {
            q: key,
            filterAttrs: {},
            price: "",
          },
            headers:{
                'access-token':'dSJJmn9s_4wvJ6X4PW1gsI4ARw9xmOYZ',
                'fecshop-currency':'EUR',
                'fecshop-lang':'zh',
                'fecshop-uuid':'e15c77d4-921c-11e8-a965-00163e021360',
            }
        }).then(res => {
            console.log(res);
            let count = Number(res.data.data.searchCount);
            this.products=res.data.data.products;
            this.history.push(key);
            this.flag = false;
            // let arr = uniq(this.history);
            console.log(this.history);
            localStorage.history=JSON.stringify(this.history);
            console.log(this.history);
            console.log(this.products);
        })
      }
    },
      mounted(){
         this.history=JSON.parse(localStorage.history);
      }

  }
</script>
<style scoped>
  @import url(../static/css/sou.css);
  .boxms{
    width: 4rem;
    height: 3.4rem;
    margin: 0 auto;
    margin-top: 2.6rem;
  }
  .boxms >img{
    display: block;
    margin: auto auto;
  }
  .text{
    height: auto;
    width: 4rem;
    margin: 0.2rem auto;
    overflow: hidden;
  }
  .text >p{
    text-align: center;
    font-size: 0.26rem;
    color: rgba(0,0,0,0.4);
    font-weight: bold;
  }
</style>
