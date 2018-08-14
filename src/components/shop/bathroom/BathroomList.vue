<template>
    <div>
        <!--header开始-->
        <header>
            <nav>
                <div class="main">
                    <div class="navBox">
                        <p @click="handleorder('all')">综合</p>
                        <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='all'"></i>
                    </div>
                    <div class="navBox">
                        <p @click="handleorder('sell')">销量</p>
                        <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='sell'"></i>
                    </div>
                    <div class="navBox">
                        <p @click="handleorder('price')">价格降序</p>
                        <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='price'"></i>
                    </div>
                </div>
            </nav>
        </header>
        <!--header结束-->
        <!--section开始-->
        <div class="conIScroll">
            <scroller :on-infinite="infinite" :on-refresh="contentRefresh">
                <div class="yjyBox">
                    <div class="yjySec" v-for="item in list">
                        <router-link :to="{name:'XhDetail',query:{uid:item._id}}" class="yjyPic">
                            <img :src="item.image" alt="">
                        </router-link>
                        <div class="yjyRight">
                            <div class="yjyTitle">
                                <h3>{{item.name}}</h3>
                                <h4>ECC01-001Lw</h4>
                            </div>
                            <div class="yjyEvaluate">
                                <ul>
                                    <li class="yjyDian"></li>
                                    <li class="yjyText">评分</li>
                                    <li class="yjyBranch">5.0</li>
                                </ul>
                                <ul>
                                    <li class="yjyDian"></li>
                                    <li class="yjyText">接单率</li>
                                    <li class="yjyBranch">100%</li>
                                </ul>
                            </div>
                            <div class="yjyDesc">
                                <p>非常专业</p>
                                <p>价格合理</p>
                            </div>
                            <div class="yjySale">
                                <ul class="yjySold">
                                    <li class="yjyDian"></li>
                                    <li class="yjyText">已售</li>
                                    <li class="yjyNum">68</li>
                                </ul>
                                <div class="price">￥{{item.price.value}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>
        <!--section结束-->
    </div>
</template>
<script>
    export default {
        name: 'BathroomList',
        data() {
            return {
                list: [],
                cid: "",
                page: 1,
                totalPage: null,
                orderBy:"all"
            }
        },
        methods: {
            getData(sort='', callback) {
                this.list=[];
                this.$http.get('/catalog/category/index', {
                    params: {
                        sortColumn: sort,
                        categoryId: this.cid,
                    }
                }).then(res => {
                    res.data.data.products.forEach(elemlent => {
                        this.list.push(elemlent.one, elemlent.two);
                    });
                    this.totalPage=res.data.data.page_count;
                    callback && callback();
                })
            },
            infinite(done) {
                this.page+=1;
                if (this.page > this.totalPage) {
                    this.page-=1;
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
                    done();//done()表示这次异步加载数据完成，加载下一次
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
            this.cid=this.$route.query.id;
            this.getData();
        },
    }
</script>
<style scoped>
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
    @import url("../css/Ttwenty.css");
</style>
