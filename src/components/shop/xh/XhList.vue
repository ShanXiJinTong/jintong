<template>
    <div>
        <!--nav开始-->
        <nav>
            <div class="main">
                <swiper :options="swiperOption" ref="mySwiper" class="photo" style="width:100%;height: 100%;">
                	<swiper-slide style="">
                        <p :class="{hot:type===''}" @click="getList({name:{name_zh:''},'_id':{'$oid':$route.query.categoryId}})">
                        	全部
                            </p>
                    </swiper-slide>
                    <swiper-slide v-for="item,key in typedata" :key="key" style="">
                        <p :class="{hot:type===item.name.name_zh}" @click="getList(item)">
                            {{item.name.name_zh}}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </nav>
        <!--nav结束-->
        <!--cate开始-->
        <div class="cate">
            <div class="main">
                <div class="cateBox" @click="handleorder('default')">
                    <p>综合</p>
                    <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='default'"></i>
                </div>
                <div class="cateBox" @click="handleorder(flag?'saledesc':'saleasc','nums')">
                    <p>销量</p>
                    <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='saledesc'||orderBy=='saleasc'" :class="{xz:orderBy=='saleasc'}"></i>
                </div>
                <div class="cateBox" @click="handleorder(flag1?'pricedesc':'priceasc','price')">
                    <p>价格降序</p>
                    <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='pricedesc'||orderBy=='priceasc'" :class="{xz:orderBy=='priceasc'}"></i>
                </div>
            </div>
        </div>
        <!--nav结束-->
        <!--bag开始-->
        <div class="bag-scroll">
            <scroller
                    :on-infinite="infinite"
                    ref="myscroller"
                    class="myScroll"
            >
                <ul class="bag-item" v-for="item in list" v-if="list.length>0">
                    <router-link :to="{name:'XhDetail',query:{uid:item['_id']['$oid'],sname:item.shop.shop_name}}" >
                        <li class="sk-bag-photo" :style="'background: url('+$store.state.imghost+'media/catalog/product/'+item.image.main.image+') no-repeat center /100% auto'">
                            <!--<img :src="item.image" alt="">-->
                        </li>
                        <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>{{item.name.name_zh}}</h3>
                        </div>
                        <div class="sk-service-desc">
                            <p>{{item.meta_description.meta_description_zh}}</p>
                        </div>
                        <div class="sk-estimate_sale_price">
                            <ul class="sk-estimate sk-item">
                                <li class="dot"></li>
                                <li class="text" v-if="item.praise==-1">暂无评论</li>
                                    <li class="text" v-else>好评</li>
                                    <li class="number" v-if="item.praise>-1">{{item.praise}}<span>%</span></li>
                            </ul>
                            <ul class="sk-sale sk-item">
                                <li class="dot"></li>
                                <li class="text">月售</li>
                                <li class="number">{{item.volume?item.volume:0}}</li>
                            </ul>
                            <ul class="sk-price">

                                <li v-if="item.price">{{item.special_price }}元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img :src="'http://img.chengzhanghao.com:81/images/'+item.shop.shop_logo" alt="">
                            <span style="line-height: 0.2rem">{{item.shop.shop_name}}</span>
                        </div>
                    </li>
                    </router-link>
                </ul>
            </scroller>
        </div>
        <!--bag结束-->
    </div>
</template>
<script>
    export default {
        name: 'XhList',
        data() {
            return {
                type: "",
                list: [],
                cid: this.$route.query.categoryId,
                page: 0,
                totalPage: null,
                typedata: {},
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    freeMode:true,
                    slidesPerView:3,
                    cancelable:false
                },
                orderBy:"default",
                flag:true,
                flag1:true,
                flag2:false,
                flag3:true
            }
        },
        methods: {
            getData(type) {
            	if(type=='page'){
            		this.page++;
            	}else{
            		this.page = 0;
            		this.flag2 = false;
            	}
                let _this = this;
                this.list = [];
                this.flag3 = false;
                this.$http.get('/catalog/category/index', {
                    params: {
                        categoryid: _this.cid,
                        type: this.orderBy,
                        page:this.page
                    }
                }).then(res => {
                	if(res.data.goods.length<10){
                		this.flag2 = true;
                	}
                	res.data.goods.forEach(val=>{
	                    this.list.push(val);
                	});
                    this.typedata = res.data.category;
                    this.list = res.data.goods;
                })
            },
            getList(item) {
            	this.goods = [];
                this.cid = item['_id']['$oid'];
                this.type = item.name.name_zh;
                this.getData();
            },
            infinite(done) {
            	if(this.flag2){
            		done(true);
            		return;
            	}
            	if(this.page==0){
            		done();
            		return;
            	}
                this.getData();
            },
            handleorder(type,flag){
            	if(flag == 'nums'){
            		this.flag = !this.flag;
            	}else if(flag == 'price'){
            		this.flag1 = !this.flag1;
            	}
            	this.goods = [];
                this.orderBy=type;
                this.getData();
            }
        },
        mounted: function () {
            this.cid = this.$route.query.categoryId;
            this.getData();
        },
    }
</script>
<style scoped>
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
    @import url("../css/Tten.css");

    .myScroll {
        width: 100%;
        height: 100%;
    }
    .xz{
    	transform: rotate(180deg);
    }
</style>
