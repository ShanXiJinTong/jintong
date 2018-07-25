<template>
  <div id="SelectCity">
    <Searchbox placeholder="请输入您搜索的城市" url="Search"></Searchbox>
    <div class="current">
      <div class="min">
        <div class="icon"></div>
        <p>当前定位城市</p>
        <a href="">太原</a>
      </div>
    </div>
    <div class="list">
      <dl class="left">
        <dt class="title" v-for="item in getLetter">{{item}}</dt>
        <dd class="hot" v-for="city in getCity">
          <div class="dian" ></div>
          <p v-for="cityItem in city">{{cityItem.city_name}}</p>
        </dd>


      </dl>
      <ul class="right">
        <li class="hot" v-for="item in getLetter">{{item}}</li>

      </ul>
    </div>
  </div>
</template>
<script>
  import Searchbox from "../../common/Searchbox";

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
                 console.log(this.city);
             })

         }
      },
    components:{
      Searchbox
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
