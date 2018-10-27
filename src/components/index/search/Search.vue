<template>
    <div id="search">
        <header class="tab">
            <form class="wsq-searchBox">
                <img src="../static/img/sousuo.png" @click='sendkey(searchkey)' @input="sendkey(searchkey)"
                     style="z-index: 999"/>
                <input type="text" @keydown.13="sendkey(searchkey)" v-model="searchkey" placeholder="搜索您需要搜索的内容"
                       style="line-height: 1em">
            </form>
        </header>
        <div v-if="flag" class="posBox">
            <div class="box">
                <div class="one"></div>
                <span class="blue">最近&nbsp;</span>
                <span>搜索</span>
            </div>
            <ul class="styleFather">
                <li class="styleList" v-for="(item,index) in history" v-bind:key="index" @click="sendkey(item)">
                    {{item}}
                </li>
            </ul>
        </div>
        <div v-else>
            <template v-if="products.length">
                <router-link :key="index"
                             :to="{name:'XhDetail',query:{'uid':item._id.$oid,sname:item.shop?item.shop.shop_name:''}}"
                             class="bag-item" v-for="item,index in products" tag='ul'>
                    <li class="sk-bag-photo">
                        <div class="img"
                             :style="'background: url('+$store.state.imghost+'media/catalog/product/'+item.image.main.image+') no-repeat center center /100% auto'"></div>
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>{{item.name.name_zh}}</h3>
                        </div>
                        <div class="sk-service-desc">
                            <p>{{item.description}}</p>
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
                                <ul class="sk-price" v-if="item.type==1">
                                    <li>{{item.special_price }}元/件</li>
                                </ul>
                                <ul class="sk-price" v-if="item.type==2">
                                    <li>{{item.deposit}}定金</li>
                                </ul>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img :src="$store.state.imghost+'images/'+item.shop.shop_logo" alt="">
                            <span>{{item.shop?item.shop.shop_name:""}}</span>
                        </div>
                    </li>
                </router-link>
                <div class="jzgd" @click="infinite" v-if="n==0">
                    <button>
                        加载更多
                    </button>
                </div>
            </template>
            <template v-else>
                <div class="boxms">
                    <img src="../static/img/icon2.png" alt="">
                </div>
                <div class="text text1">
                    <p>很遗憾 没有为您找到合适的内容 <br> 换个关键词试试吧</p>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Search',
        data() {
            return {
                flag: true,
                page: 0,
                totalPage: 3,
                searchkey: '',
                products: [],
                history: [],
                n: 0
            }
        },
        methods: {
            sendkey(key) {
                this.searchkey = key;
                // 在这里进行ajax请求
                if (key === '') {
                    return;
                }
                this.page = 0;
                this.$http.get("/catalogsearch/index/index?q=" + key + "&page=0", {
                    headers: {
                        'access-token': 'dSJJmn9s_4wvJ6X4PW1gsI4ARw9xmOYZ',
                        'fecshop-currency': 'EUR',
                        'fecshop-lang': 'zh',
                        'fecshop-uuid': 'e15c77d4-921c-11e8-a965-00163e021360',
                    }
                }).then(res => {
                    this.products = res.data;
                    if (res.data.length < 10) {
                        this.n = 2
                    }
                    this.history.push(key);
                    this.flag = false;
                    let arr = this.history;
                    let newarr = [];
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = i + 1; j < arr.length; j++) {
                            if (arr[i] == arr[j]) {
                                j = ++i;
                            }
                        }
                        newarr.push(arr[i]);
                    }
                    localStorage.history = JSON.stringify(newarr);
                })
            },
            infinite() {
                if (this.n == 2) {
                    return;
                }
                this.page += 1;
                this.$http.get("/catalogsearch/index/index?q=" + this.searchkey + "&page=" + this.page, {
                    headers: {
                        'access-token': 'dSJJmn9s_4wvJ6X4PW1gsI4ARw9xmOYZ',
                        'fecshop-currency': 'EUR',
                        'fecshop-lang': 'zh',
                        'fecshop-uuid': 'e15c77d4-921c-11e8-a965-00163e021360'
                    }
                }).then(res => {
                    this.products = this.products.concat(res.data)
                    if (res.data.length < 10) {
                        this.n = 2
                    }
                })

            },
        },
        mounted() {
            if (localStorage.history) {
                this.history = JSON.parse(localStorage.history);
            };
            document.setTitle('搜索');
        }
    }
</script>
<style scoped>
    @import url(../static/css/sou.css);
    @import url(../static/css/Tten.css);

    .boxms {
        width: 4rem;
        height: 6rem;
        padding-top: 2.6rem;
        margin: 0 auto;
    }

    .boxms > img {
        display: block;
        margin: auto auto;
    }

    ._v-container {
        height: calc(100% - 1rem);
        position: absolute;
        top: 1rem !important;
        left: 0;
        overflow: hidden;
    }

    .text {
        height: auto;
        margin: 0.1rem auto;
        overflow: hidden;
        line-height: 0.44rem;
    }

    .text > p {
        text-align: center;
        font-size: 0.26rem;
        color: rgba(0, 0, 0, 0.4);
        font-weight: bold;
    }

    input::-webkit-input-placeholder {
        font-size: 0.1rem;
        color: #CDDDE9;
        /*line-height: 0.3rem;*/
    }
</style>
