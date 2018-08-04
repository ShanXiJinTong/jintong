<template>
<div id="shop">

    <!--banner开始-->
    <section class="wsq-banner">
        <div class="wsq-title" v-if="menu.length">
                <router-link :to="{name:path[index],query:{cid:item.id}}" tag="div" :class='["wsq-cateaty",{hot:index==0}]' v-for="(item,index) in menu" :key="item.id">{{item.name}}</router-link>
        </div>
    </section>
    <!--banner结束-->

    <!--Icon开始-->
  <ul class="xrIcon" v-if="menu.length">
        <router-link :to="{name:'XhList',query:{categoryId:item._id}}" tag="li"  class="xrIconbox" v-for="item in menu[0].child" :key="item._id">
            <div class="xrIcon1">
                <div class="bg"></div>
                <!--<img src="./img/Tnine/Tnine1.png" alt="">-->
            </div>
            <span>{{item.name}}</span>
        </router-link>

    </ul>
    <!--Icon结束-->

    <!--xrTitle开始-->
    <div class="xrTitle">
        <div class="xrContent">
            <div class="xrDot"></div>
            <div class="xrText"><span>全部</span>服务</div>
        </div>
    </div>
    <!--xrTitle结束-->

    <!--bag开始-->
    <div class="bag-scroll">
        <div class="sk-bag-scroll">
            <scroller
                    :on-infinite="infinite"
                    :on-refresh="contentRefresh"
                    ref="myscroller"
                    class="myScroll"
            >
            <ul class="bag-item" v-for="item in list">
                <li class="sk-bag-photo">
                    <router-link :to="{name:'XhDetail',query:{uid:item.product_id}}">
                    <img :src="item.image" alt="">
                    </router-link>
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
                            <li>{{item.price.value}}元/件</li>
                        </ul>
                    </div>
                    <div class="sk-service-operator">
                        <img src="./img/Tnine/bds.png" alt="">
                        <span>包大师</span>
                    </div>
                </li>
            </ul>
            </scroller>
        </div>

    </div>
    <!--bag结束-->
    <Tab></Tab>

</div>
</template>
<script>
    import Tab from "../common/tab";
    export default {
        name: 'Shop',
        data() {
            return {
                list:[],
                menu:[],
                path:['Shop','Bathroom','Bathroom'],
                page: 1,
                totalPage: null,
            }
        },
        watch:{
            type:function(){
                this.refresh();
            }
        },
        methods:{
            getData(){
                this.$http.get('/cms/home/index').then(res=>{
                    res.data.data.productList.forEach(elemlent=>{
                        this.list.push(elemlent.one,elemlent.two);
                    })
                })
            },
            getMenu(){
                this.$http.get('/general/base/menu').then(res=>{
                  if(!res.data){ return ;}
                  for(let i in res.data){
                        if(res.data[i].name && res.data[i].child) {
                            this.menu.push({id: res.data[i]['_id'], name: res.data[i].name,child:res.data[i].child});
                        }
                   }
                   this.menu = this.menu.slice(0,3);
                })
            },
            refresh(){
                let _this = this;
                this.list = [];
                this.$http.get('/catalog/category/index', {
                    params: {
                        categoryId: _this.cid,
                        sortColumn:"",
                        //  filterAttrs:this.type
                    }
                }).then(res => {
                    res.data.data.products.forEach(elemlent => {
                        this.list=[...[elemlent.one, elemlent.two]];
                    })
                    this.totalPage = res.data.data.page_count;
                })
            },
            infinite(done) {
                this.page += 1;
                if (this.page > this.totalPage) {
                    this.page -= 1;
                    done(true)
                    return;
                }
                this.$http.get('/catalog/category/product', {
                    params: {
                        p: this.page,
                        categoryId: this.cid,
                        sortColumn: ""
                    }
                }).then(res=>{
                    res.data.data.products.forEach(elemlent => {
                        this.list.push(elemlent.one, elemlent.two);
                    });
                    done();
                })
            },
            contentRefresh(){
                this.getData();
            }
        },
        mounted:function () {
             this.getData();
             this.getMenu();
        },
        components:{
            Tab
        }
    }
</script>
<style scoped>
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
    @import url("./css/Tnine.css");
    .myScroll {
        width: 100%;
        height: 100%;
    }
</style>
