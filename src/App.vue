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
	.jzgd{
		color: #fff;
		padding: 0.16rem 0.8rem !important;
	}
	.jzgd button{
		width: 100%;
		color: #fff;
		height: 0.6rem;
		border-radius: 1rem;
		background: #00AAEE;
		box-shadow: 0 0 0.1rem #eee;
	}
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
    .haoping .el-rate__icon{
      font-size: 0.02rem;
    }
    .haoping .el-rate{
      height:0.3rem;
    }
    .el-upload--picture-card{
      width: 100px;
      height: 100px;
      line-height: 102px;
    }
    .el-upload-list--picture-card .el-upload-list__item{
      width: 100px;
      height: 100px;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  .section_3 .section_3_input .el-textarea__inner{
    outline: none;
    height: 1.62rem;
    background: rgba(231, 246, 255, 0.5);
  }
</style>
