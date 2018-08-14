<template>
    <div>
        <!--banner开始-->
        <section class="wsq-banner">
                <swiper :options="swiperOption" ref="mySwiper" class="wsq-title">
                    <swiper-slide :to="{name:path[index],query:{cid:item.id}}" tag="div" :class="['wsq-cateaty',{hot:nowid==item.id}]"
                                  v-for="(item,index) in menu" :key="item.id">
                        <p>
                            <router-link :to="{name:'XhList',query:{categoryId:item.id}}">
                                {{item.name}}
                            </router-link>
                        </p>
                    </swiper-slide>
                </swiper>
            <div class="wsq-img"><img src="../img/banner1.png" height="128" width="351"/></div>
        </section>
        <!--banner结束-->
        <!--热门推荐开始-->
        <section class="wsq-more">
            <div class="wsq-line">
                <div class="wsq-lineL">
                    <div class="wsq-dot"></div>
                    <div class="wsq-text"><span><b>热门</b></span><span><b>推荐</b></span></div>
                </div>
                <div class="wsq-lineR">
                    <a href="">
                        <router-link :to="{name:'BathroomList',query:{id:$route.query.cid}}" tag="p">
                            查看更多 <span>
            <img src="../img/rightjiantou.png" height="9" width="10"/></span></router-link>
                    </a>
                </div>

            </div>
            <div class="wsq-wrapper">
                <div class="wsq-scroller">
                    <scroller
                    :on-refresh="refresh"
                    >
                        <ul>
                            <li v-for="item in list">
                                <router-link :to="{name:'XhDetail',query:{uid:item.product_id}}">
                                <!--<router-link :to="{name:'XhDetail',query:{uid:item.product_id}}">-->
                                    <img :src="item.image" height="94" width="90"/>
                                <!--</router-link>-->
                                <div class="wsq-sore">5.0</div>
                                <div class="wsq-name">{{item.name}}</div>
                                <div class="right"><span>{{item.price.value}}</span></div>
                                <h6>ECC01-001Lw</h6>
                                <div class="wsq-sale">
                                    <div class="wsq-saleLeft">
                                        <div class="wsq-dot"></div>
                                        <p>已售<span>52</span></p>
                                    </div>
                                    <div class="wsq-saleRight">
                                        <div class="wsq-dot"></div>
                                        <p>接单率<span>100%</span></p>
                                    </div>
                                </div>
                                <div class="wsq-desc">
                                    <h5>非常专业</h5>
                                    <h5>价格合理</h5>
                                </div>
                                </router-link>

                            </li>
                        </ul>
                    </scroller>
                </div>
            </div>
        </section>
        <!--热门推荐结束-->

    </div>
</template>
<script>
    export default {
        name: 'Bathroom',
        data() {
            return {
                list: [],
                menu: [],
                path: ['Shop', 'Bathroom', 'Bathroom'],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    freeMode:true,
                    slidesPerView:3,
                    spaceBetween: 40,
                    cancelable:false
                },
                nowid:""
            }
        },
        methods: {
            getData(callback) {
                this.$http.get('/cms/home/index').then(res => {
                    this.list=[];
                    res.data.data.productList.forEach(elemlent => {
                        this.list.push(elemlent.one, elemlent.two);
                        callback&&callback();
                    })
                })
            },
            getMenu() {
                this.$http.get('/general/base/menu').then(res => {
                    for (let i in res.data) {
                            this.menu.push({id: res.data[i]['_id'], name: res.data[i].name});
                    }
                    this.nowid=this.menu[0].id;
//                    this.menu = this.menu.slice(0,8);
                })
            },
            refresh(done){
                this.getData(done);
            },
            getList(item){
                this.nowid=item.id;
            }
        },
        mounted: function () {
            this.cid = this.$route.query.categoryId;
            this.getData();
            this.getMenu();
        },
    }
</script>
<style scoped>
    @import url("../css/Tnineteen.css");

</style>
