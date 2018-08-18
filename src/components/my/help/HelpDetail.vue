<template>
 <div>
  <div class="shdtitleBox">
    <div class="title">
      <img src="../static/img/shd-img/tubiao.png" alt="">
      <span>{{datas.title}}</span>
      <img src="../static/img/shd-img/tubiao.png" alt="">
    </div>
  </div>
  <div class="shdpTitle" v-html="datas.content">
  </div>
 </div>
</template>
<script>
    export default {
        name: 'HelpDetail',
        data() {
            return {
            	datas:{}
            }
        },
        mounted(){
        	this.$http.get("/customer/editaccount/helps?id="+this.$route.query.id).then(res=>{
        		if(res.data.code == 200){
        			this.datas = res.data.data
        		}
        	});
        }
    }
</script>
<style scoped>
  @import url(../static/css/shd-helpContent.css);
</style>
