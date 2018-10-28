<template>
  <div class="shdBox">
    <ul class="totalList">
        <router-link tag="li" v-for="item in list" class="list" :to="{name:'HelpDetail' , query:{id:item.id}}" :key="item.id">
          <div class="listLeft">
            <img src="../static/img/shd-img/tubiao.png" alt="">
            <span>{{item.title}}</span>
          </div>
          <img src="../static/img/shd-img/shdBack1.png" alt="">
        </router-link>
    </ul>
  </div>
</template>
<script>
    export default {
        name: 'Help',
        data() {
            return {
            	list:[]
            }
        },
        mounted(){
        	this.$http.get("/customer/editaccount/helplist").then(res=>{
        		if(res.status==200){
							this.list = res.data;
        		}
        	});
            document.setTitle('帮助');
        }
    }
</script>
<style scoped>
  @import url(../static/css/shd-help.css);
</style>
