<template>
    <div class="refundWait">
      <div class="listtop">
        <!--cate开始-->
        <div class="cate">
          <div class="main">
            <div :class="['cateBox',{hot:active=='全部'}]" @click="handleorder('default')">
              <p>评分</p>
            </div>
            <div :class="['cateBox',{hot:active=='退款'}]" @click="handleorder(flag?'saledesc':'saleasc','nums')">
              <p>销量</p>
              <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='saledesc'||orderBy=='saleasc'" :class="{xz:orderBy=='saleasc'}"></i>
            </div>
            <div :class="['cateBox',{hot:active=='退货退款'}]" @click="handleorder(flag1?'pricedesc':'priceasc','price')">
              <p>价格</p>
              <i class="iconfont icon-xiangxiajiantou" v-if="orderBy=='pricedesc'||orderBy=='priceasc'" :class="{xz:orderBy=='priceasc'}"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="bag-scroll">
        <ul class="bag-item">
          <router-link :to="{name:'RefundTo'}">
            <li class="sk-bag-photo">
            </li>
            <li class="sk-bag-content">
              <div class="sk-service-type">
                <h3>商品类型</h3>
              </div>
              <div class="sk-service-desc">
                <p>商品描述</p>
              </div>
              <div class="sk-estimate_sale_price">
                <ul class="sk-estimate sk-item">
                  <li class="dot"></li>
                  <!--<li class="text" v-if="item.praise==-1">评分</li>-->
                  <li class="text">评分</li>
                  <li class="number"><span>1.5</span></li>
                </ul>
                <ul class="sk-sale sk-item">
                  <li class="dot"></li>
                  <li class="text">月售</li>
                  <li class="number">22</li>
                </ul>
                <ul class="sk-price">
                  <li>20定金</li>
                </ul>
              </div>
              <div class="sk-service-operator">
                <img src="" alt="">
                <span style="line-height: 0.2rem">名字</span>
              </div>
            </li>
          </router-link>
        </ul>
        <div class="jzgd" @click="infinite" v-if="!flag2">
          <button>
            加载更多
          </button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RefundWait",
        data() {
          return {
            type: "",
            active:"评分",
            list: [],
            isHot:'洗衣',
            cid: this.$route.query.categoryId,
            page: 0,
            totalPage: null,
            typedata: null,
            swiperOption: {
              pagination: {
                el: '.swiper-pagination',
              },
              freeMode:true,
              slidesPerView:3,
              cancelable:false
            },
            orderBy:"default",
            flag:true,
            flag1:true,
            flag2:false,
          }
        },
        methods: {
          getData(type) {
            if(type=='page'){
  //          		this.page++;
            }else{
              this.page = 0;
              this.flag2 = false;
            }
            let _this = this;
            this.$http.get('/catalog/category/index', {
              params: {
                categoryid: _this.cid,
                type: this.orderBy,
                page:this.page
              }
            }).then(res => {
              this.page++;
              if(res.data.goods.length<10){
                this.flag2 = true;
              }
              res.data.goods.forEach(val=>{
                this.list.push(val);
              });
              this.typedata = res.data.category;
            })
          },
          getList(item) {
            this.list = [];
            this.cid = item['_id']['$oid'];
            this.type = item.name.name_zh;
            this.getData();
          },
          infinite() {
            if(this.flag2){
              return;
            }
            this.getData('page');
          },
          handleorder(type,flag){
            if(flag == 'nums'){
              this.flag = !this.flag;
            }else if(flag == 'price'){
              this.flag1 = !this.flag1;
            }
            this.list = [];
            this.orderBy=type;
            this.getData();

            var el=event.target;
            this.active=el.innerText;
            // console.log();
          },
          tagHot(){
            var el = event.target;
            this.isHot = el.innerText;
          }
        },
        mounted: function () {
          this.cid = this.$route.query.categoryId;
          this.isHot = this.$route.query.cate
          // this.getData();
        },
    }
</script>

<style scoped>
  @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
  @import url("../shop/css/Tten.css");
  .myScroll {
    width: 100%;
    height: 100%;
  }
  .xz{
    transform: rotate(180deg);
  }
  .cate .main .hot p{
    font-size: 0.28rem;
    font-weight: bolder;
    color:#41b2fc;
  }
</style>
