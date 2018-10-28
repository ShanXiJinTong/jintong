<template>
    <div>
        <!--搜索框-->
        <form class="wsq-searchBox">
            <img src="../img/sousuoicon.png" height="24" width="40"/>
            <input type="text" placeholder="搜素您需要定位的城市">
        </form>
        <!--搜索结束-->
        <!--banner开始-->
        <section class="wsq-banner">


            <div class="wsq-title" >
              <router-link :to="{name:'Xh'}" tag="div" class="wsq-cateaty">洗护</router-link>
              <router-link :to="{name:'SellWater'}" tag="div" class="wsq-cateaty hot" style="margin: 0 0.25rem">售水</router-link>
              <router-link :to="{name:'Bathroom'}" tag="div" class="wsq-cateaty">卫浴</router-link>
                <!--<router-link :to="{name:path[index],query:{cid:item.id}}" tag="div" class="wsq-cateaty" v-for="(item,index) in menu" :key="item.id">{{item.name}}</router-link>-->
            </div>
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
                        <router-link :to="{name:'BathroomList'}" tag="p">
                            查看更多 <span>
            <img src="../img/rightjiantou.png" height="9" width="10"/></span></router-link>
                    </a>
                </div>

            </div>
            <div class="wsq-wrapper">
                <div class="wsq-scroller">
                    <ul>
                        <li v-for="item in list">
                            <img :src="item.image" height="94" width="90"/>
                            <div class="wsq-sore">5.0</div>
                            <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
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
                        </li>

                    </ul>
                </div>
            </div>
        </section>
        <!--热门推荐结束-->

    </div>
</template>
<script>
    export default {
        name: 'SellWater',
        data() {
            return {
                list:[],
                menu:[],
                path:['Shop','Bathroom','SellWater'],
            }
        },
        methods:{
            getData(sort=''){
                let _this=this;
                this.list = [];
                this.$http.get('/catalog/category/index', {
                    params: {
                        categoryId:_this.cid,
                        sortColumn:sort
                    }
                }).then(res=>{
                    res.data.data.products.forEach(elemlent=>{
                        this.list.push(...[elemlent.one,elemlent.two]);
                    })
                })
            },
            getMenu(){
                this.$http.get('/general/base/menu').then(res=>{
                    for(let i in res.data){
                        if(res.data[i].name && res.data[i].child) {
                            this.menu.push({id: res.data[i]['_id'], name: res.data[i].name});
                        }
                    }
                    this.menu = this.menu.slice(0,3);

                })
            }
        },
        mounted:function () {
            this.cid = this.$route.query.categoryId;
            this.getData();
            this.getMenu();
            document.setTitle('搜索');
        },
    }
</script>
<style scoped>

    @import url("../css/Tnineteen.css");
    .wsq-banner{
      width: 100%;
      height: auto;
      background-color: #fbfeff;
      box-shadow:  0 0.2rem 0.43rem rgba(59,172,254,0.1);
      padding: 0 0.24rem;
      box-sizing: border-box;
      margin-bottom: 0.4rem;
    }
    .wsq-banner .wsq-title{
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.2rem;
    }
    .wsq-banner .wsq-title .wsq-cateaty{
      /*width: 1.33rem;*/
      height: 0.52rem;
      border-radius: 0.26rem;
      background: rgba(59,172,254,0.1);
      text-align: center;
      line-height: 0.52rem;
      color: rgb(59,172,254);
    }
    .wsq-banner .wsq-title .wsq-cateaty.hot{
      color: #ffffff;
      background: rgb(59,172,254);
    }
    .wsq-banner .wsq-img{
      width: 100%;
      height: 2.55rem;
      border-radius: 0.1rem;

    }
    .wsq-banner .wsq-img img{
      width: 100%;
      height: 100%;
    }
</style>
