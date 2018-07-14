<template>
  <div id="app">
    <router-view/>
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
</style>
