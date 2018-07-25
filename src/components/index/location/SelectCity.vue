<template>
  <div id="SelectCity">
      <section class="search" >
          <div class="input">
              <input type="text" placeholder="搜索您需要的服务 商品">
              <img src="../static/img/sousuo.jpg" alt="">
          </div>
      </section>
    <!--<Searchbox placeholder="请输入您搜索的城市" url="Search"></Searchbox>-->
    <div class="current">
      <div class="min">
        <div class="icon"></div>
        <p>当前定位城市</p>
        <a href="">太原</a>
      </div>
    </div>
    <div class="list">
      <ul class="left">
        <li v-for="item in getLetter">
           <div class="title" :id="item">{{item}}</div>
           <div class="hot" v-for="city in getCity[item]">
               <div class="dian" ></div>
               <p @click="search(city.city_name)">{{city.city_name}}</p>
           </div>
        </li>

      </ul>
      <ul class="right">
        <li class="hot" v-for="item in getLetter" @click="returnTop(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  // import Searchbox from "../../common/Searchbox";

  export default {
    name: 'SelectCity',
    data() {
      return {
         city:[],
          letter:[]
      }
    },
      methods:{
         getData() {
             this.$http.get("http://appserver.uekuek.com/general/base/syscityall").then(res=>{
                 this.city=res.data;
             })

         },
          returnTop(item){
              document.querySelector(`#${item}`).scrollIntoView(true);
          },
          search(cityName){
             localStorage.city=cityName;
             this.$router.back();
          }
      },
    components:{
      // Searchbox
    },
      mounted:function () {
          this.getData();
      },
      computed:{
        getLetter(){
            let letterArr=this.city.map(element=>element.sindex.toUpperCase());
            let set = new Set(letterArr);
            return Array.from(set).sort();
        },
          getCity(){
              let arr={};
              this.city.forEach(element=>{
                  let char = element.sindex.toUpperCase();
                  if(!arr[char]){
                      arr[char] = [];
                  }
                  arr[char].push(element);
              });
              for(let i in this.getLetter){
                  let char = this.getLetter[i];
                  arr[char.toUpperCase()]
              }
              console.log(arr);
              return arr;
          }
      }

  }
</script>
<style scoped>
  @import url(../static/css/adress.css);
</style>
