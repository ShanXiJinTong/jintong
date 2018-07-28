<template>
  <div id="SelectCity">
      <section class="search">
          <div class="input">
              <input type="text" placeholder="搜索您需要的服务 商品" v-model="searchName">
              <img src="../static/img/sousuo.jpg" alt=""  @click="searchCity(searchName)">
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
               <p @click="showCity(city.city_name)">{{city.city_name}}</p>
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


  export default {
    name: 'SelectCity',
    data() {
      return {
          city:[],
          letter:[],
          searchName:""
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
          showCity(cityName){
             localStorage.city=cityName;
             this.$router.back();
          },
          searchCity(cityName){
              let result=this.city.filter(element=> element.city_name==cityName)
              if(result.length){
                     localStorage.city=cityName;
                     this.$router.back();
                 }
                 else{
                     alert("输入有误");
                 }

          }
      },
    components:{
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
              return arr;
          }
      }

  }
</script>
<style scoped>
  @import url(../static/css/adress.css);
</style>
