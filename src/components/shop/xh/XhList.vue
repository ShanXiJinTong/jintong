<template>
    <div>
        <!--nav开始-->
        <nav>
            <div class="main">
                <swiper :options="swiperOption" ref="mySwiper" class="photo" style="width:100%;">
                    <swiper-slide v-for="item,key in typedata" :key="key">
                        <p :class="{hot:type===item.name}" @click="getList(item,key)">
                            {{item.name}}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </nav>
        <!--nav结束-->
        <!--cate开始-->
        <div class="cate">
            <div class="main">
                <div class="cateBox"@click="handleorder('all')">
                    <p>综合</p>
                    <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='all'"></i>
                </div>
                <div class="cateBox" @click="handleorder('sell')">
                    <p>销量</p>
                    <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='sell'"></i>
                </div>
                <div class="cateBox" @click="handleorder('price')">
                    <p>价格降序</p>
                    <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='price'"></i>
                </div>
            </div>
        </div>
        <!--nav结束-->
        <!--bag开始-->
        <div class="bag-scroll">
            <scroller
                    :on-infinite="infinite"
                    :on-refresh="contentRefresh"
                    ref="myscroller"
                    class="myScroll"
            >
                <ul class="bag-item" v-for="item in list" v-if="list.length>0">
                    <router-link :to="{name:'XhDetail',query:{uid:item._id}}" >
                        <li class="sk-bag-photo">
                            <img v-lazy="item.image" alt="">
                        </li>
                        <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>{{item.name}}</h3>
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

                                <li v-if="item.price">{{item.special_price.value}}元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="../img/Tnine/bds.png" alt="">
                            <span>包大师</span>
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
                cid: '',
                page: 1,
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
                orderBy:"all"
            }
        },
        watch: {
            type() {
               this.refresh();
            }
        },
        methods: {
            getData(sort = '', callback) {
                let _this = this;
                this.list = [];
                this.$http.get('/catalog/category/index', {
                    params: {
                        categoryId: _this.cid,
                        sortColumn: sort,
                    }
                }).then(res => {
                    var elemlent=res.data.data.products;
                    for (var i=0;i<elemlent.length;i++){
                        if (i==elemlent.length-1){
                            this.list.push(elemlent[i].one);
                        }else {
                            this.list.push(elemlent[i].one, elemlent[i].two);
                        }
                    }
                    if (this.type === "") {
                        this.typedata = res.data.data.filter_category;
                        for (let i in this.typedata) {
                            this.type = this.typedata[i].name;
                            break;
                        }
                    }
                    this.totalPage = res.data.data.page_count;
                    callback && callback();
                })
            },
            getList(obj, key) {
                this.cid = key;
                this.$nextTick(() => {
                    this.type = obj.name;
                })
            },
            refresh() {
                let _this = this;
                this.list = [];
                this.$http.get('/catalog/category/index', {
                    params: {
                        categoryId: _this.cid,
                        sortColumn: "",
                    }
                }).then(res => {
                    var elemlent=res.data.data.products;
                    for (var i=0;i<elemlent.length;i++){
                        if (i==elemlent.length-1){
                            this.list.push(elemlent[i].one);
                        }else {
                            this.list.push(elemlent[i].one, elemlent[i].two);
                        }
                    }
                })
            },
            infinite(done) {
                this.page += 1;
                if (this.page > this.totalPage) {
                    this.page -= 1;
                    done(true);
                    return;
                }
                this.$http.get('/catalog/category/product', {
                    params: {
                        p: this.page,
                        categoryId: this.cid,
                        sortColumn: ""
                    }
                }).then(res => {
                    res.data.data.products.forEach(elemlent => {
                        this.list.push(elemlent.one, elemlent.two);
                    });
                    done();
                })
            },
            contentRefresh(done) {
                this.getData("", done);
            },
            handleorder(type){
                this.orderBy=type;
                switch(type){
                    case "all":this.getData();break;
                    case "sell":this.getData("sell");break;
                    case "price":this.getData("high-to-low");break;
                }
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
</style>
