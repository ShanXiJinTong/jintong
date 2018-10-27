<template>
  <section class="container">
    <div class="top">
      <ul>
        <li id="no" :class="type==0?'top-hot':''" @click="xz(0)">未使用</li>
        <li id="yes" :class="type==1?'top-hot':''" @click="xz(1)">已使用</li>
        <li id="date" :class="type==2?'top-hot':''" @click="xz(2)">已过期</li>
      </ul>
    </div>
    <div class="list" v-if="datas.length>0">
	      <ul class="youhuiquan">
	        <li class="green" v-for="item,index in datas" :key="index">
	          <div class="litop">
	            <div :style="'background:url('+$store.state.imghost+'images/'+item.shop_logo+') center center;background-size:cover;width: 0.69rem;height: 0.69rem;border-radius:100%'" alt=""></div>
	            <div class="litop-left">
	              <div class="title">{{item.shop_name}}</div>
	              <div class="tiaojian">{{item.coupon_name}}</div>
	            </div>
	            <div class="litop-right">
	              <div class="price">{{item.discount}}</div>
	              <div class="yuan">元</div>
	            </div>
	          </div>
	          <div class="limid"></div>
	          <div class="libottom">
	            <div class="dot"></div>
	            <div class="youxiaoqi">{{item.expiration_date}}</div>
	            <div class="lijishiyong" @click="jump(item.shop_id)">立即使用</div>
	          </div>
	        </li>
	      </ul>
	      <div class="jzgd" @click="infinite" v-if="flag==0">
					<button>
						加载更多
					</button>
				</div>
    </div>
  	<div v-else>
			<img src='./static/img/coupon.png' style="width: 100%;" />
  	</div>
  </section>
</template>
<script>
    export default {
        name: 'Discount',
        data() {
            return {
            	page:0,
            	type:0,
            	datas:[],
            	flag:0
            }
        },
        methods:{
        	jump(id){
        		this.$router.push({name:"XhStore",query:{id:id}});
        	},
        	infinite(){
        		if(this.flag ==1){
        			return;
        		}
        		this.getData();
        		this.page++;
        	},
        	getData(flag){
        		this.$http.get("/customer/editaccount/couponlist",{
        			params:{
        				page:this.page,
        				type:this.type,
        				uid:localStorage['fecshop-uuid']
        			}
        		}).then((res)=>{
        			res.data.data.forEach((val)=>{
							 	this.datas.push(val);        				
        			});
								if(res.data.data.length<10){
									this.flag = 1;
								}
        		});
        	},
        	xz(type){
        		this.datas=[];
        		this.type = type;
        		this.page = 0;
        		this.datas = [];
        		this.flag = 0;
        		this.getData();
        	}
        },
        mounted(){
        	this.getData();
            document.setTitle('优惠券');
        }
    }
</script>
<style scoped>
  @import url(./static/css/zy-youhuiquan.css);
</style>
