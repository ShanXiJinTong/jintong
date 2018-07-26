<template>
<div>
    <!--header开始-->
    <header>
        
        <nav>
            <div class="main">
                <div class="navBox">
                    <p>综合</p>
                    <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
                <div class="navBox">
                    <p>销量</p>
                    <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
                <div class="navBox">
                    <p>价格降序</p>
                    <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
            </div>
        </nav>
    </header>
    <!--header结束-->
    <!--section开始-->
    <div class="conIScroll">
        <div class="yjyBox">
            <div class="yjySec" v-for="item in list">
                <router-link :to="{name:'XhDetail',query:{uid:item._id}}" tag="yjyPic">
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
                        <div class="price">{{item.price.value}}</div>
                    </div>
                </div>
            </div>



        </div>
    </div>
    <!--section结束-->
</div>
</template>
<script>
    export default {
        name: 'BathroomList',
        data() {
            return {
                list:[],

            }
        },
        methods:{
            getData(sort=''){
                let _this=this;
                this.list = [];
                this.$http.get('/catalog/category/index', {
                    params: {
                        sortColumn:sort
                    }
                }).then(res=>{
                    res.data.data.products.forEach(elemlent=>{
                        this.list.push(...[elemlent.one,elemlent.two]);
                    })
                })

            }
        },
        mounted:function () {
            this.getData();
        },
    }
</script>
<style scoped>
    @import url("../css/Ttwenty.css");
</style>
