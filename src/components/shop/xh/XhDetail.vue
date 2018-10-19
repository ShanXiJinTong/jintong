<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" class="photo" v-if="shopDetail">
            <swiper-slide v-for="(item,index) in imgs" v-bind:key="index"
                          :style="'background: url('+$store.state.imghost+'media/catalog/product/'+item.image+')no-repeat center center /100% auto'">
                <!--<img :src="'http://img.chengzhanghao.com:81/media/catalog/product/'+item.image" alt="">-->
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="introduction" v-if="shopDetail">
            <div class="one">{{shopDetail.name}}</div>
            <div class="two">
                <p v-html="shopDetail.description"></p>
            </div>
            <div class="three">
                <div class="tl" v-if="shopDetail['goods_type']==1">
                    <span>现价 {{shopDetail.special_price}}元／件</span>
                    <del>原价 {{shopDetail.price}}元／件</del>
                </div>
                <div class="tl" v-else>
                    <span>定金 {{shopDetail.deposit}}</span>
                    <span>定金</span>
                    <span>上门服务</span>
                </div>
                <div class="tr">
                    <span class="tr1"></span>
                    <span class="tr2">月售</span>
                    <span class="tr3">{{shopDetail.volume?shopDetail.volume:0}}</span>
                </div>
            </div>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>
        <div class="lingjuan" @click="get(shopDetail.shop_id)">
            <img src="../img/lingjuan.png" alt="">
            <div class="lingjuan2">领券</div>
            <div class="lingjuan3" v-if="couponName">{{couponName}}</div>
        </div>
        <div class="tuikuan" :class="{display:display}">
            <div class="youhui">
                <div class="tktitle">
                    <span class="tkcolor">领取</span>优惠券
                    <div class="tkclose">
                    </div>
                </div>
                <ul class="tkbox">
                    <li class="tklist" v-for="item in coupon">
                        <div class="left">
                            <div class="money">
                                <div class="tkyuan">
                                </div>
                                <h3>{{item.discount}}元</h3>
                            </div>
                            <div class="tktext" v-if="item.conditions>0">订单满{{item.conditions}}元可用</div>
                            <div class="tktext" v-else>无条件</div>
                            <h5>有效期至{{item.gqsj}}</h5>
                        </div>
                        <div class="get" style="background: #ccc;box-shadow: 0 0.05rem 0.2rem 0 rgba(204,204,204,0.5);"
                             v-if="item.customer_id">已领取
                        </div>
                        <div class="get" @click="getCoupon(item)" v-else>领取</div>
                    </li>
                </ul>
                <div class="tkbutton" @click="get()">关闭</div>
            </div>
        </div>
        <div class="line">
            <div class="line1 "></div>
        </div>
        <div class="term">
            <div class="termm">
                <div class="term1">
                    <span></span>
                    <span>无额外收费</span>
                </div>
                <div class="term1">
                    <span></span>
                    <span>爽约包赔</span>
                </div>
                <div class="term1">
                    <span></span>
                    <span>不满意重新服务</span>
                </div>
            </div>
        </div>
        <div class="line">
            <div class="line1 "></div>
        </div>
        <div class="usercomment">
            <div class="userleft">
                <div class="container">
                    <div class="rect blue"></div>
                    <h2>
                        <span>用户</span>
                        <span>评价</span>
                    </h2>
                </div>
                <router-link :to="{name:'XhEvaluate'}">
                    <div class="searchAll">
                        <span>查看全部</span>
                        <div class="searchAllreturn">
                            <img src="../img/return.png" alt="">
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="scroll">
                <ul>
                    <li>
                        <div class="shopleft">
                            <img src=""/></div>
                        <div class="shopright">
                            <div class="name">
                                <div class="xing">
                                    <span>张峰</span>
                                    <div class="haoping">
                                        <el-rate
                                                disabled
                                        v-model="value5"
                                        :colors="colors"
                                        >
                                        </el-rate>
                                    </div>
                                </div>
                                <span>2018.03.02</span>
                            </div>
                            <div class="desc">
                                <span>服务专业，商家细节做得特别好，准时到达</span>
                            </div>
                            <div class="dingwei">
                                <!--<img src="img/shopdetail/dingwei.png"/>-->
                                <span>北京  海淀区  四双跑步鞋清理</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="shopleft">
                            <img src=""/></div>
                        <div class="shopright">
                            <div class="name">
                                <div class="xing">
                                    <span>张峰</span>
                                    <div class="haoping">
                                        <el-rate
                                          v-model="value5"
                                        disabled
                                        :colors="colors"
                                        >
                                        </el-rate>
                                    </div>
                                </div>
                                <span>2018.03.02</span>
                            </div>
                            <div class="desc">
                                <span>服务专业，商家细节做得特别好，准时到达</span>
                            </div>
                            <div class="dingwei">
                                <!--<img src="img/shopdetail/dingwei.png"/>-->
                                <span>北京  海淀区  四双跑步鞋清理</span>
                            </div>
                            <div class="picture">
                                <img src=""/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--商品详情-->
        <div class="shopdetail">
            <div class="userleft">
                <div class="rect"></div>
                <h2>
                    <span class="green">商品</span>
                    <span>详情</span>
                </h2>
            </div>
        </div>
        <div class="line">
            <div class="line1 "></div>
        </div>
        <!--相似推荐-->
        <div class="similarrecommendation">
            <div class="userleft">
                <div class="rect"></div>
                <h2>
                    <span class="green">相似</span>
                    <span>推荐</span>
                </h2>
            </div>
            <ul>
                <li>
                    <img src="img/shuilongtou.png">
                    <span>潜水艇高端龙头</span>
                    <span>60元</span>
                </li>
                <li>
                    <img src="img/shuilongtou.png">
                    <span>潜水艇高端龙头</span>
                    <span>60元</span>
                </li>
                <li>
                    <img src="img/shuilongtou.png">
                    <span>潜水艇高端龙头</span>
                    <span>60元</span>
                </li>
                <li>
                    <img src="img/shuilongtou.png">
                    <span>潜水艇高端龙头</span>
                    <span>60元</span>
                </li>
                <li>
                    <img src="img/shuilongtou.png">
                    <span>潜水艇高端龙头</span>
                    <span>60元</span>
                </li>
                <li>
                    <img src="img/shuilongtou.png">
                    <span>潜水艇高端龙头</span>
                    <span>60元</span>
                </li>
            </ul>
        </div>
        <div class="root">
            <div class="rl">
                <router-link :to="{name:'XhStore',query:{id:shopDetail.shop_id}}" tag="a">
                    <div class="rl1">
                        <img src="../img/dianpu.png" alt="">
                        <span>店铺</span>
                    </div>
                </router-link>
                <a href="javascript:">
                    <div class="rl2">
                        <img src="../img/lianxi.png" alt="">
                        <span @click="chat(shopDetail.uid)">联系商家</span>
                    </div>
                </a>
            </div>
            <div class="rr">
                <a @click="handleClick">
                    <div class="rr1">加入购物车</div>
                </a>
                <div v-if="shopDetail['goods_type']==1">
                    <a @click="handleSubmit">
                        <div class="rr2">立即下单</div>
                    </a>
                </div>
                <div v-else>
                    <a @click="handleSubmit1">
                        <div class="rr2">立即下单</div>
                    </a>
                </div>
            </div>
            <!--<div class="rr" v-if="shopDetail['goods_type']==2" style="justify-content: flex-end;">-->
            <!--<a @click="handleSubmit1">-->
            <!--<div class="rr2" style="width: 3.5rem;">立即下单</div>-->
            <!--</a>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
<<<<<<< HEAD
	import $ from "jquery";
	import "jquery.cookie";
	export default {
		name: 'XhDetail',
		data() {
			return {
				uid: '',
				shopDetail: {},
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
					}
				},
				display: 0,
				coupon: [],
				couponName:""
			}
		},
		computed: {
			imgs() {
                console.log(this.shopDetail);
                if(this.shopDetail.img) {
					this.shopDetail.img.gallery.push(this.shopDetail.img.main);
					return this.shopDetail.img.gallery;
				} else {
					return [];
				}
			}
		},
		methods: {
			getCoupon(item) {
				this.$http.get('/catalog/product/getcoupon?coupon_id=' + item.coupon_id + "&customer_id=" + localStorage["fecshop-uuid"]).then(res => {
					if(res.data == "ok") {
						item.customer_id = true;
						this.coupon = Object.assign({}, this.coupon);
						this.$message({
							type: "success",
							message: "领取成功"
						});
					} else {
						item.flag = false;
						this.$message({
							type: "error",
							message: "领取失败"
						});
					}
				})
			},
			getData() {
				this.$http.get('/catalog/product/index?product_id=' + this.uid).then(res => {
=======
    import $ from "jquery";
    import "jquery.cookie";
    export default {
        name: 'XhDetail',
        data() {
            return {
                uid: '',
                shopDetail: {},
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },
                display: 0,
                coupon: [],
                couponName: "",
                colors: ['#36a8fe', '#36a8fe', '#36a8fe'],
                value5:3
            }
        },
        computed: {
            imgs() {
                if (this.shopDetail.img) {
                    this.shopDetail.img.gallery.push(this.shopDetail.img.main);
                    return this.shopDetail.img.gallery;
                } else {
                    return [];
                }
            }
        },
        methods: {
            getCoupon(item) {
                this.$http.get('/catalog/product/getcoupon?coupon_id=' + item.coupon_id + "&customer_id=" + localStorage["fecshop-uuid"]).then(res => {
                    if (res.data == "ok") {
                        item.customer_id = true;
                        this.coupon = Object.assign({}, this.coupon);
                        this.$message({
                            type: "success",
                            message: "领取成功"
                        });
                    } else {
                        item.flag = false;
                        this.$message({
                            type: "error",
                            message: "领取失败"
                        });
                    }
                })
            },
            getData() {
                this.$http.get('/catalog/product/index?product_id=' + this.uid).then(res => {
>>>>>>> 3eaa91d9dd71fe15a5e214886ba13d0e4af8691f

                    this.shopDetail = res.data.data.product;

                    this.coupon = res.data.data.coupon;

                    if (this.coupon.length > 0) {
                        this.couponName = this.coupon[0].coupon_name;
                    }
                })
            },
            handleClick() {
                if (!(localStorage['access-token'] && localStorage['fecshop-uuid'])) {
                    this.$router.push({
                        name: 'UserLogin'
                    })
                } else {
                    this.$http.get(`/customer/car/addcar?shop_id=${this.shopDetail.shop_id}&customer_id=${localStorage['fecshop-uuid']}&product_id=${this.shopDetail._id}&num=1`, {}).then(res => {
                        if (res.data.status == 1) {
                            this.$router.push({
                                name: 'Car',
                                query: {
                                    uid: this.uid
                                }
                            });
                        }
                    })
                }
            },
            handleSubmit() {
                if (!(localStorage['access-token'] && localStorage['fecshop-uuid'])) {
                    this.$router.push({
                        name: 'UserLogin'
                    })
                } else {
                    this.$router.push({
                        name: 'WaitServicePay',
                        query: {
                            sid: this.shopDetail.shop_id,
                            gid: this.shopDetail._id,
                            price: this.shopDetail.special_price
                        }
                    })
                }
            },
            handleSubmit1() {
                if (!(localStorage['access-token'] && localStorage['fecshop-uuid'])) {
                    this.$router.push({
                        name: 'UserLogin'
                    })
                } else {
                    this.$router.push({
                        name: 'WaitServicePay1',
                        query: {sid: this.shopDetail.shop_id, gid: this.shopDetail._id, price: this.shopDetail.deposit}
                    })
                }
            },
            get(shop_id) {
                if (this.display == 1) {
                    this.display = 0;
                    return;
                }
                if ((localStorage['access-token'] && localStorage['fecshop-uuid'])) {
                    this.coupon = [];
                    this.$http.get('/catalog/product/index1?product_id=' + this.uid + "&customer_id=" + localStorage["fecshop-uuid"] + "&shop_id=" + shop_id)
                        .then(res => {
                            this.coupon = res.data;
                            this.coupon = Object.assign({}, this.coupon);
                            this.display = 1;
                        })
                } else {
                    this.$router.push("/UserLogin");
                }
            },
            chat(friId) {
                if ($.cookie("userId")) {
                    this.$http.get(`http://www.chengzhanghao.com:1701/directAddFri?friId=${friId}&userId=${$.cookie("userId")}`).then(res => {
                        if (res.data == "ok") {
                            this.$router.push({
                                name: "Dialog",
                                query: {
                                    fid: friId,
                                    p: this.shopDetail.shop_name
                                }
                            });
                        }
                    })
                } else {
                    this.$router.push("/UserLogin");
                }
            },
            getComments() {
                let id = this.$route.query.uid;
                this.$http.get("/store/store/getreview?id=" + id + "&review_type=" + this.commentsHot + "&page=" + this.page).then(res => {
                    this.page++;
                    res.data.review.forEach(val => {
                        this.comments.push(val);
                    });
                    if (res.data.review.length < 10) {
                        this.flag = false;
                    }
                })
            },
        },
        mounted: function () {
            this.uid = this.$route.query.uid;
            this.getData();
        }
    }
</script>
<style scoped>
    @import url("../css/Televen.css");
</style>
