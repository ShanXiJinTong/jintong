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
      <ul class="left">
        <li class="title">A</li>
        <li class="hot">
          <div class="dian"></div>
          <p>鞍山市</p>
        </li>
        <li class="title">B</li>
        <li class="hot">
          <div class="dian"></div>
          <p>保定市</p>
        </li>
        <li class="hot">
          <div class="dian"></div>
          <p>宝鸡市</p>
        </li>
        <li class="hot">
          <div class="dian"></div>
          <p>保定市</p>
        </li>
      </ul>
      <ul class="right">
        <li class="hot">A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
        <li>#</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Searchbox from "../../common/Searchbox"
  export default {
    name: 'SelectCity',
    data() {
      return {

      }
    },
    components:{
      Searchbox
    }
  }
</script>
<style scoped>
  @import url(../static/css/adress.css);
</style>
