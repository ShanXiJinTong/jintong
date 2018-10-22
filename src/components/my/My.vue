<template>
    <div v-if="myInfo">
        <div class="centers">
            <div class="gerengxingxi">
                <router-link :to="{name:'PersonalMessage'}" style="margin-left: 0">
                    <div class="yuan" :style="'background-image:url('+$store.state.imghost+myInfo.headImg+')'"></div>
                    <div class="zi">
                        <h6>{{myInfo.firstname}}</h6>
                        <div class="nei">
                            <img src="./static/img/jzl-img/huangguan.png" alt=""
                                 style="width: 0.3rem; height: 0.3rem; background-size: cover;display: block;">
                            <span v-if="myInfo.level==''||myInfo.level==0">普通会员</span>
                            <span v-if="myInfo.level==1">白银会员</span>
                            <span v-if="myInfo.level==2">黄金会员</span>
                            <span v-if="myInfo.level==3">钻石会员</span>

                        </div>
                    </div>
                </router-link>
                <router-link :to="{name:'Vip'}">
                    <p style="font-weight: bold">去升级</p>
                    <div class="dian" style="border-radius: 50%;"></div>
                    <div class="dian" style="color: #3bacfe;opacity: 0.5;border-radius: 50%;"></div>
                    <div class="dian" style="background: #3bacfe;opacity: 0.3;border-radius: 50%;"></div>
                </router-link>
            </div>
        </div>
        <div class="xingxi">
            <div class="yh">
                <router-link :to="{name:'Wallet',query:{price:myInfo.money?myInfo.money:0}}" class="shuzi">
                    <span>{{myInfo.money?myInfo.money:0}}</span>
                    <p>余额</p>
                </router-link>
            </div>
            <div class="yh">
                <router-link :to="{name:'Discount'}" class="shuzi">
                    <span>{{myInfo.coupon?myInfo.coupon:0}}</span>
                    <p>优惠劵</p>
                </router-link>
            </div>
            <div class="yh">
                <router-link :to="{name:'Gold',query:{coin:myInfo.coin?myInfo.coin:0}}" class="shuzi">
                    <span>{{myInfo.coin?myInfo.coin:0}}</span>
                    <p>金币</p>
                </router-link>
            </div>
        </div>
        <div class="bottom">
            <div class="wai">
                <router-link :to="{name:'Wallet',query:{price:myInfo.money?myInfo.money:0}}" class="ne">
                    <div class="kuai"></div>
                    <span>钱包</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link class="ne" :to="{name:'Car'}">
                    <div class="kuai"></div>
                    <span>购物车</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link class="ne" :to="{name:'Address'}">
                    <div class="kuai"></div>
                    <span>常用地址</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link class="ne" :to="{name:'Wechat',query:{userNum:1,userId:uid,userName:myInfo.firstname}}">
                    <div class="kuai"></div>
                    <span>客服中心</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link class="ne" :to="{name:'RefundWait'}">
                    <div class="kuai"></div>
                    <span>退货退款</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link class="ne" :to="{name:'Help'}">
                    <div class="kuai"></div>
                    <span>帮助</span>
                </router-link>

            </div>
            <div class="wai">
                <router-link class="ne" :to="{name:'About'}">
                    <div class="kuai"></div>
                    <span>关于我们</span>
                </router-link>
            </div>
            <div class="wai">
                <a class="ne">
                    <div class="kuai"></div>
                    <span>监督热线</span>
                    <h6><a href="tel:13220289350" style="color: rgb(254, 98, 78);">400-789-2211</a></h6>
                </a>
            </div>
            <div class="wai" style="height:0.7rem;line-height:0.7rem;justify-content: center;background: #00AAEE;color: #fff;border-radius:0.5rem;margin-top: 0.5rem;letter-spacing: 1px;font-size: 0.26rem;" @click="loginOut">
                	退出登录
            </div>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
    import Tab from '../common/tab';
    import {getheaders} from "../config";
    import $ from "jquery";
    import "jquery.cookie";

    export default {
        name: 'My',
        data() {
            return {
                myInfo: null,
                uid:localStorage['fecshop-uuid']
            }
        },
        methods: {
        	loginOut(){
        		localStorage.clear();
        		$.cookie("userId","",{expires: -1});
        		$.cookie("userName","",{ expires: -1 });
        		this.$router.push("/UserLogin");
        	},
            getData() {
                this.$http({
                    method: 'get',
                    headers: getheaders,
                    url: '/customer/editaccount/index?uid='+localStorage['fecshop-uuid']
                }).then(res => {
                    this.myInfo = res.data.data;
                    this.myInfo.coupon=res.data.coupon.tot;
                })
            }
        },
        beforeMount() {
            if (!localStorage['access-token']) {
                this.$router.replace({name: "UserLogin"});
            }
        },
        mounted() {
            this.getData();
        },
        components: {
            Tab
        }
    }
</script>
<style scoped>@import url(./static/css/jzl-gerenzhongxin.css);

</style>
