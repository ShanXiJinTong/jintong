<template>
  <div id="app">
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app{
    font-size: 14px;
    /*overflow: hidden;*/
    max-width: 7.5rem;
    margin:0 auto;
    position: relative;
  }
  .swiper-slide{
    justify-content: center;
  }
  a{
    text-decoration: none;
  }
  *{
    -webkit-tap-highlight-color: transparent;
  }
  button{
    border: none;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  *{
    box-sizing: border-box;
  }
</style>
