<template>
  <section class="search">
    <router-link :to="{name:url}" tag="div" class="input">
      <input type="text" disabled :placeholder="placeholder">
      <img src="./static/img/sousuo.png" alt="">
    </router-link>
  </section>
</template>
<script>
  export default {
    name: 'Searchbox',
    data() {
      return {

      }
    },
    props:[
      "placeholder","url"
    ]
  }
</script>
<style scoped>
  .search {
    height: 0.78rem;
    padding: 0 .24rem;
  }

  .search .input {
    width: 100%;
    height: 0.6rem;
    position: relative;
  }

  .search img {
    width: 0.38rem;
    height: 0.38rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0.18rem;
  }

  .search input {
    width: 100%;
    height: 0.6rem;
    padding-left: 0.8rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    background: rgba(235, 247, 255, 0.58);
    border: solid 0.03rem rgba(55, 169, 254, 0.1);
    float: right;
  }
  .search input::placeholder{
    color: #ccc;
  }
</style>
