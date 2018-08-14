<template>
    <div>
        <!--单品详情-->
        <div class="LZJ-singleDetail">
            <div class="LZJ-main">
                <router-link :to="{name:'WaterStoreIntro'}" tag="div" class="LZJ-Thumb">
                    <img src="../img/thumb.png" alt="">
                </router-link>
                <div class="LZJ-infos">
                    <div class="LZJ-title">{{shop.shop_company_name}}
                    </div>
                    <div class="LZJ-bargain">
                        <div class="LZJ-already">
                            <div class="LZJ-spot"></div>
                            <div class="LZJ-poi">已接</div>
                            <span>29</span>
                        </div>
                        <div class="LZJ-already">
                            <div class="LZJ-spot"></div>
                            <div class="LZJ-poi">成交</div>
                            <span>90</span>
                            %
                        </div>
                        <div class="LZJ-already" style="margin-right: 0">
                            <div class="LZJ-spot"></div>
                            <div class="LZJ-poi">好评</div>
                            <span>98</span>
                            %
                        </div>
                    </div>
                    <div class="LZJ-service">
                        <img src="../img/icon-time.png" alt="">
                        <div class="LZJ-offer">服务时间</div>
                        <div class="LZJ-times">9:00-12:00</div>
                    </div>
                    <div class="LZJ-dates">最近可约 16:00</div>
                    <div class="LZJ-advice" @click="chat($route.query.id)">咨询</div>
                </div>
            </div>
        </div>
        <!--banner-->
        <section class="wsq-banner">

            <div class="wsq-title">
                <div :class="['wsq-cateaty', isOk==1?'hot':'']" @click="checkOk(1)">全部项目</div>
                <div :class="['wsq-cateaty', isOk==2?'hot':'']" @click="checkOk(2)" style="margin: 0 0.25rem">促销项目</div>
                <div :class="['wsq-cateaty', isOk==3?'hot':'']" @click="checkOk(3 )">用户评价</div>

            </div>
        </section>
        <!--更多详情分类-->
        <div class="bag-scroll">
            <div class="sk-bag-scroll" :class="{block:isOk==1}">
                <ul class="bag-item" v-for="item in list">
                    <li class="sk-bag-photo">
                        <router-link :to="{name:'XhDetail',query:{uid:item.product_id}}">
                            <img :src="'http://img.chengzhanghao.com:81/media/catalog/product/'+item.image.main.image" alt="">

                        </router-link>
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>{{item.name.name_en}}</h3>
                        </div>
                        <div class="sk-service-desc">
                            <p>服饰内外污渍清洗，去霉杀菌，不包含补色补伤</p>
                        </div>
                        <div class="sk-estimate_sale_price">
                            <ul class="sk-estimate sk-item">
                                <li class="dot"></li>
                                <li class="text">好评</li>
                                <li class="number">90<span>%</span></li>
                            </ul>
                            <ul class="sk-sale sk-item">
                                <li class="dot"></li>
                                <li class="text">月售</li>
                                <li class="number">278</li>
                            </ul>
                            <ul class="sk-price">
                                <li>{{item.special_price}}元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="sk-bag-scroll" :class="{block:isOk==2}">
                <ul class="bag-item" v-for="item in cuxiao">
                    <li class="sk-bag-photo">
                        <router-link :to="{name:'XhDetail',query:{uid:item.product_id}}">
                            <img :src="item.image" alt="">
                        </router-link>
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>{{item.name.name_en}}</h3>
                        </div>
                        <div class="sk-service-desc">
                            <p>服饰内外污渍清洗，去霉杀菌，不包含补色补伤</p>
                        </div>
                        <div class="sk-estimate_sale_price">
                            <ul class="sk-estimate sk-item">
                                <li class="dot"></li>
                                <li class="text">好评</li>
                                <li class="number">90<span>%</span></li>
                            </ul>
                            <ul class="sk-sale sk-item">
                                <li class="dot"></li>
                                <li class="text">月售</li>
                                <li class="number">278</li>
                            </ul>
                            <ul class="sk-price">
                                <li>{{item.price}}元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="sk-scroll" :class="{block:isOk==3}">
                <!--nav开始-->
                <nav>
                    <div class="main">
                        <div :class="['navBox',{hot:commentsHot==''}]" @click="handleCommentsTypeChange('')">
                            <p>全部</p>
                            <p>{{count.zong}}</p>
                        </div>
                        <div :class="['navBox',{hot:commentsHot=='hao'}]" @click="handleCommentsTypeChange('hao')">
                            <p>好评</p>
                            <p>{{count.hao}}</p>
                        </div>
                        <div :class="['navBox',{hot:commentsHot=='zhong'}]" @click="handleCommentsTypeChange('zhong')">
                            <p>中评</p>
                            <p>{{count.zhong}}</p>
                        </div>
                        <div :class="['navBox',{hot:commentsHot=='cha'}]" @click="handleCommentsTypeChange('cha')">
                            <p>差评</p>
                            <p>{{count.cha}}</p>
                        </div>
                    </div>
                </nav>
                <!--nav结束-->
                <ul class="com-item" v-for="item in comments">
                    <li class="sk-photo">
                        <img src="../img/photo.png" alt="">
                    </li>
                    <li class="sk-content">
                        <div class="sk-user_time">
                            <h5>{{item.name}}</h5>
                            <div class="star">
                                <i class="iconfont icon-xing hot"></i>
                                <i class="iconfont icon-xing hot"></i>
                                <i class="iconfont icon-xing hot"></i>
                                <i class="iconfont icon-xing"></i>
                                <i class="iconfont icon-xing"></i>
                            </div>
                            <span>{{item.review_date1}}</span>
                        </div>
                        <div class="sk-desc">
                            <p>{{item.review_content}}</p>
                        </div>
                        <div class="sk-pos">
                            <span class="province">北京</span>
                            <span class="city">海淀区</span>
                            <span class="service">四双跑步鞋清洗</span>
                        </div>

                        <div class="sk-like">
                            <i class="iconfont icon-xiaoxi2"></i>
                            <i class="iconfont icon-xihuan"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import "jquery.cookie";
    export default {
        name: 'XhStore',
        data() {
            return {
                list: [],
                isOk: 1,
                shop:{},
                comments:[],
                commentsHot:"",
                cuxiao:[],
                count:{}
            }
        },
        methods: {
            getData() {
                let id=this.$route.query.id;
                this.$http.get('/store/store/index?id='+id).then(res => {
                    this.shop=res.data.store;
                    res.data.shop.forEach(elemlent => {
                        this.list.push(elemlent);
                    });
                    res.data.cuxiao.forEach(element=>{
                        this.cuxiao.push(element);
                    });

                    this.count=res.data.review_count;
                })
            },
            getComments(){
                let id=this.$route.query.id;
                this.$http.get("/store/store/getreview?id="+id+"&review_type="+this.commentsHot).then(res=>{
                  this.comments=res.data.review;
              })
            },
            checkOk(index) {
                this.isOk = index;
            },
            handleCommentsTypeChange(type){
                this.commentsHot=type;
                this.getComments();
            },
            chat(friId) {
                var friId = 4;
                this.$http.get(`http://localhost:1701/directAddFri?friId=${friId}&userId=${$.cookie("userId")}`).then(res =>{
                    if(res.data == "ok"){
                        this.$router.push({name:"Dialog",query:{fid:friId,p:this.shop.shop_name}});
                    }
                })
            }
        },
        mounted: function () {
            this.getData();
            this.getComments();
        },
    }
</script>
<style scoped>
    @import url("../css/Thirteens.css");
</style>
