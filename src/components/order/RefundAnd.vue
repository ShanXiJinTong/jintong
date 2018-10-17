<template>
<div id="RefundAnd">
    <!--内容部分开始-->
    <div id="main">
    <div class="x-commodity">
        <img src="./img/tou.png" alt="" id="x-c-left">
        <div class="x-c-right">
            <div id="x-name"><b>潜水艇高端龙头</b></div>
            <ul id="x-li">
                <li class="x-blue" id="x-jone"><b>ECC01-001Lw</b></li>
                <li class="x-blue" id="x-jtwo">商品规格潜水艇高端龙头</li>
                <li class="x-blue" id="x-jthree">¥60.00</li>
                <li class="x-green" id="x-jfour">×1</li>
                <li class="x-green" id="x-jfive">实付款：¥60.00</li>
            </ul>
        </div>
    </div>
    <div class="box box1">
        <div class="zuo">
            <div class="fang"></div>
            <h1>退货</h1>
            <h2>状态</h2>
        </div>
        <div class="you" @click="mask2()">
            <i class="iconfont icon-yduiqianjin"></i>
            <h3>{{isHot}}</h3>
        </div>
    </div>
    <div class="box box2">
        <div class="zuo">
            <div class="fang"></div>
            <h1>退款</h1>
            <h2>原因</h2>
        </div>
        <div class="you" @click="mask1()">
            <i class="iconfont icon-yduiqianjin"></i>
            <h3>{{isHot1}}</h3>
        </div>
    </div>
    <div class="tui">
        <div class="shang">
            <div class="fang"></div>
            <h1>退款</h1>
            <h2>金额</h2>
            <span>（最多¥78.00，含发货邮费）</span>
        </div>
        <h3>¥60.00</h3>
    </div>
    <div class="shuo">
        <h1>退款说明</h1>
    </div>
    <div class="ping">
        <div class="top">
            <div class="fang"></div>
            <h1>上传</h1>
            <h2>凭证</h2>
            <span>（最多6张）</span>
        </div>
        <div class="bottom">
            <img src="./img/photo.png" alt="">
        </div>
    </div>
    <router-link :to="{name:'RefundTo'}">
    <div class="dialog-B">提交</div>
    </router-link>
    </div>
    <!--遮罩-->
    <div class="glpark" :class="{hot:isOk}"></div>
    <div class="glpark" :class="{hot:isOk1}"></div>
    <!---->
    <div class="tuikuan" :class="{hot:isOk}">
        <div class="tktitle">
            <span class="tkcolor">退款</span>原因
            <div class="tkclose" @click="mask1()">
                <img src="./img/cuohao.png" alt="">
            </div>
        </div>

      <ul class="tkbox">
        <li class="tklist" @click="maskhot1()">
          <div class="left">
            <div class="tkyuan"></div>
            <span class="tktext">退运费</span>
          </div>
          <img src="./img/tuikuan.png" alt="" :class="['right',isHot1=='退运费'?'hot':'']">
        </li>
        <li class="tklist" @click="maskhot1()">
          <div class="left">
            <div class="tkyuan"></div>
            <span class="tktext">大小/尺寸与商品描述不符</span>
          </div>
          <img src="./img/tuikuan.png" alt="" :class="['right',isHot1=='大小/尺寸与商品描述不符'?'hot':'']">
        </li>
        <li class="tklist" @click="maskhot1()">
          <div class="left">
            <div class="tkyuan"></div>
            <span class="tktext">颜色/款式/型号与商品描述不符</span>
          </div>
          <img src="./img/tuikuan.png" alt="" :class="['right',isHot1=='颜色/款式/型号与商品描述不符'?'hot':'']">
        </li>
        <li class="tklist" @click="maskhot1()">
          <div class="left">
            <div class="tkyuan"></div>
            <span class="tktext">材质与商品描述不符</span>
          </div>
          <img src="./img/tuikuan.png" alt="" :class="['right',isHot1=='材质与商品描述不符'?'hot':'']">
        </li>
        <li class="tklist" @click="maskhot1()">
          <div class="left">
            <div class="tkyuan"></div>
            <span class="tktext">做工粗造有瑕疵</span>
          </div>
          <img src="./img/tuikuan.png" alt="" :class="['right',isHot1=='做工粗造有瑕疵'?'hot':'']">
        </li>
        <li class="tklist" @click="maskhot1()">
          <div class="left">
            <div class="tkyuan"></div>
            <span class="tktext">质量问题</span>
          </div>
          <img src="./img/tuikuan.png" alt="" :class="['right',isHot1=='质量问题'?'hot':'']">
        </li>
      </ul>
        <div class="tkbutton" @click="mask1()">完成</div>
    </div>

    <!--goods-->
    <div class="goods" :class="{hot:isOk1}">
        <div class="gtitle">
            <span class="gcolor">货物</span>状态
            <div class="gclose" @click="mask2()">
                <img src="./img/cuohao.png" alt="">
            </div>
        </div>

        <ul class="gbox">
            <li class="glist" @click="maskhot()">
                <div class="left">
                    <div class="gyuan"></div>
                    <span class="gtext">已收到货</span>
                </div>
                <img src="./img/tuikuan.png" alt="" :class="['right',isHot=='已收到货'?'hot':'']">
            </li>
            <li class="glist" @click="maskhot()">
                <div class="left">
                    <div class="gyuan"></div>
                    <span class="gtext">未收到货</span>
                </div>
                <img src="./img/tuikuan.png" alt="" :class="['right',isHot=='未收到货'?'hot':'']">
            </li>
        </ul>
        <div class="gbutton" @click="mask2()">完成</div>
    </div >
</div>
</template>
<script>
    export default {
        name: 'RefundAnd',
        data() {
            return {
                isOk:false,
                isOk1:false,
                isHot:'请选择',
                isHot1:'买错了'
            }
        },
        methods:{
            mask1(){
                if(this.isOk==false){
                    this.isOk=true;
                }
                else{
                    this.isOk=false;
                }
            },
            mask2(){
                if(this.isOk1==false){
                    this.isOk1=true;
                }
                else{
                    this.isOk1=false;
                }
            },
            maskhot(){
                var el = event.target;
                this.isHot = el.innerText
            },
            maskhot1(){
                var el = event.target;
                this.isHot1 = el.innerText
            }

        }
    }
</script>
<style scoped>

    .box{
        width: calc(100% - 0.48rem);
        height: 1.01rem;
        margin: 0 0.24rem 0;
        border-bottom: 0.02rem solid rgb(241,244,245);
        display: flex;
        justify-content:space-between;
    }
    .box .zuo{
        width: 1.30rem;
        height: 100%;
        overflow: hidden;
    }
    .box .zuo .fang{
        width: 0.1rem;
        height: 0.05rem;
        border-radius: 0.01rem;
        background: rgb(65,178,252);
        margin-top: 0.5rem;
        float: left;
    }
    .box .zuo h1{
        font-size: 0.26rem;
        line-height: 1.01rem;
        color:rgb(71,71,71);
        margin-left: 0.1rem;
        float: left;
    }
    .box .zuo h2{
        font-size: 0.26rem;
        line-height: 1.01rem;
        color:rgb(65,178,252);
        float: left;
    }
    .box .you{
        width: 1.60rem;
        height: 100%;
        overflow: hidden;
    }
    .box .you .iconfont{
        font-size: 0.24rem;
        color: #41b2fc;
        line-height: 1.01rem;
        font-weight: 900;
        float: right;
    }
    .box .you h3{
        max-width: 3.75rem;
        font-size: 0.26rem;
        line-height: 1.01rem;
        margin-right: 0.4rem;
        color: rgb(100,102,102);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .tui{
        width: calc(100% - 0.48rem);
        height: 1.50rem;
        margin: 0 0.24rem;
    }
    .tui .shang{
        width: 100%;
        height: 0.26rem;
        margin-top: 0.5rem;
    }
    .tui .shang .fang{
        width: 0.1rem;
        height: 0.05rem;
        border-radius: 0.01rem;
        background: rgb(252,188,65);
        margin-top: 0.1rem;
        float: left;
    }
    .tui .shang h1{
        font-size: 0.26rem;
        line-height: 0.26rem;
        margin-left: 0.1rem;
        color:rgb(71,71,71);
        float: left;
    }
    .tui .shang h2{
        font-size: 0.26rem;
        line-height: 0.26rem;
        color:rgb(252,188,65);
        float: left;
    }
    .tui .shang span{
        color:rgb(175,177,178);
        font-size: 0.22rem;
        line-height: 0.22rem;
        margin-top: 0.04rem;
        float: left;
    }
    .tui h3{
        color:rgb(252,188,65) ;
        margin-top: 0.22rem;
        margin-left: 0.2rem;
        font-size: 0.24rem;
        line-height: 0.24rem;
    }
    .shuo{
        width: calc(100% - 0.48rem);
        height: 1.50rem;
        margin: 0 0.24rem;
        background: rgb(241,250,255);
        border-radius: 0.3rem;
    }
    .shuo h1{

        display: block;
        font-size: 0.22rem;
        margin-top: 0.24rem;
        margin-left: 0.2rem;
        color: rgb(185,201,210);
        line-height: 0.22rem;
    }
    .ping{
        width: calc(100% - 0.48rem);
        height: 2.13rem;
        margin: 0 0.24rem;
    }
    .ping .top{
        width: 100%;
        height: 0.26rem;
        margin-top: 0.35rem;
    }
    .ping .top .fang{
        width: 0.1rem;
        height: 0.05rem;
        border-radius: 0.01rem;
        background: rgb(68,217,138);
        margin-top: 0.1rem;
        float: left;
    }
    .ping .top h1{
        font-size: 0.26rem;
        line-height: 0.26rem;
        margin-left: 0.1rem;
        color:rgb(71,71,71);
        float: left;
    }
    .ping .top h2{
        font-size: 0.26rem;
        line-height: 0.26rem;
        color:rgb(68,217,138);
        float: left;
    }
    .ping .top span{
        color:rgb(175,177,178);
        font-size: 0.22rem;
        line-height: 0.22rem;
        margin-top: 0.04rem;
        float: left;
    }
    .ping .bottom{
        width: 1.02rem;
        height: 1.02rem;
        margin-top: 0.3rem;
        margin-left: 0.2rem;
    }
    .ping .bottom img{
        width: 100%;
        height: 100%;
    }
    .dialog-B{
        width:4.54rem;
        height: 0.6rem;
        margin: 0.65rem auto 0;
        border-radius:3rem;
        background: linear-gradient(to right,#27d29c,#33e171);
        box-shadow: 0 0.07rem 0.35rem 0.01rem #37df74ba;
        color: #FFFFFF;
        font-size: 0.24rem;
        text-align: center;
        line-height: 0.6rem;
    }

    .x-commodity{
        width: 100%;
        height:3.55rem ;
        display: flex;
        justify-content: flex-start;
        border-bottom: 0.02rem solid rgb(241,244,245);
        padding: 0 0.24rem;
        box-sizing: border-box;
    }
    #x-c-left{
        width:1.74rem ;
        height: 1.74rem;
        margin-right: 0.27rem;
        margin-top: 0.5rem;
    }
    .x-c-right{
        width: calc(100% - 2.01rem);
        height: 2.55rem;
        position: relative;
        margin-top: 0.5rem;
    }
    #x-name{
        width: 100%;
        font-size: 0.3rem;
        color: #4f5b64;
        text-align: left;
    }
    #x-li{
        width: 100%;
        height: 1.95rem;
        position: absolute;
        left: 0;
        top: 0.5rem;
    }
    #x-jone{
        width: 100%;
        margin-bottom: 0.1rem;
        font-size: 0.18rem;
        color: #41b2fc;
        text-align: left;
    }
    #x-jtwo{
        width: 100%;
        margin-bottom: 0.15rem;
        font-size: 0.22rem;
        color: #c9cbcc;
        text-align: left;
    }
    #x-jthree{
        width: 100%;
        font-size: 0.22rem;
        color: #646666;
        text-align: left;
    }
    #x-jfour{
        width: 100%;
        font-size: 0.22rem;
        color: #646666;
        text-align: left;
        position: absolute;
        /*left: calc(100% - 0.7rem);*/
        /*left: 2rem;*/
        bottom: 0.7rem;
        display: flex;
        justify-content: flex-end;
        margin-right: 0.7rem;
    }
    #x-jfive{
        width: 100%;
        font-size: 0.3rem;
        color: #fbb548;
        text-align: left;
        position: absolute;
        display: flex;
        justify-content: flex-end;
        margin-right: 0.7rem;
        bottom: 0rem;
    }
    .x-blue:before{
        content: "\02022";
        color: #41b2fc;
        margin-right: 0.1rem;
    }
    .x-green:before{
        content: "\02022";
        color: #31d094;
        margin-right: 0.1rem;
    }
    /*遮罩*/
    .glpark{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: absolute;
        left: 0;
        top: 0;
        display: none;
    }
    .glpark.hot{
        display: block;
    }
    /**/
    .tuikuan{
        width: 100%;
        height: 9rem;
        padding: 0.24rem 0.24rem;
        box-sizing: border-box;
        background: #FFFFFF;
        position: absolute;
        left: 0;
        bottom: -9rem;
        transition: all ease .5s;
        display: none;
        /*transform: translate3d(0,3rem,0);*/
    }
    .tuikuan.hot{
        display: block;
        transform: translate3d(0,-9rem,0);
    }
    .tuikuan .tktitle{
        width: 100%;
        height: 0.88rem;
        font-size: 0.22rem;
        font-weight: bold;
        text-align: center;
    }
    .tuikuan .tktitle .tkcolor{
        color: #41B2FC;
    }
    .tuikuan .tktitle .tkclose{
        float: right;
    }
    .tkbox .tklist{
        width: 100%;
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.02rem solid #fafafa;
    }
    .tkbox .tklist .left{
        width:auto ;
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
    }
    .tkbox .tklist .left .tkyuan{
        width: 0.06rem;
        height: 0.06rem;
        background: #44b5ff;
        border-radius: 50%;
        margin: auto auto;
        box-shadow: 0  0.02rem 0.05rem 0 rgba(68,181,255,0.43) ;

    }
    .tkbox .tklist .left .tktext{
        width: 6.5rem;
        height: 100%;
        font-size: 0.24rem;
        line-height: 0.88rem;
        margin-left: 0.1rem;
    }
    .tkbox .tklist .right{
        width: 0.3rem;
        height: 0.3rem;
        display: none;
    }
    .tkbox .tklist .right.hot{
        display: block;
    }
    .tkbutton{
        width: 4.9rem;
        height: 0.98rem;
        border-radius: 0.5rem;
        background: -webkit-linear-gradient(left,#37e06f, #32d69a);
        background: -o-linear-gradient(right,#37e06f, #32d69a);
        background: -moz-linear-gradient(right,#37e06f,#32d69a);
        background: linear-gradient(to right,#37e06f, #32d69a);
        box-shadow: 0rem 0.04rem 0.2rem 0rem
        rgba(55, 223, 116, 0.75);
        font-size: 0.2rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.98rem;
        margin: 0.7rem  auto 0 auto;
    }
    .goods{
        width: 100%;
        height: 5.2rem;
        padding: 0.24rem 0.24rem;
        box-sizing: border-box;
        background: #FFFFFF;
        position: absolute;
        left: 0;
        bottom: -5.2rem;
        display: none;
        /*transition: all ease .5s;*/
    }
    .goods.hot{
        display: block;
        transform: translate3d(0,-5.2rem,0);
    }
    .goods .gtitle{
        width: 100%;
        height: 0.88rem;
        font-size: 0.22rem;
        font-weight: bold;
        text-align: center;
    }
    .goods .gtitle .gcolor{
        color: #41B2FC;
    }
    .goods .gtitle .gclose{
        float: right;
    }
    .gbox .glist{
        width: 100%;
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.02rem solid #fafafa;
    }
    .gbox .glist .left{
        width:auto ;
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
    }
    .gbox .glist .left .gyuan{
        width: 0.06rem;
        height: 0.06rem;
        background: #44b5ff;
        border-radius: 50%;
        margin: auto auto;
        box-shadow: 0  0.02rem 0.05rem 0 rgba(68,181,255,0.43) ;

    }
    .gbox .glist .left .gtext{
        width: 6.5rem;
        height: 100%;
        font-size: 0.24rem;
        line-height: 0.88rem;
        margin-left: 0.1rem;
    }
    .gbox .glist .right{
        width: 0.3rem;
        height: 0.3rem;
        display: none;
    }
    .gbox .glist .right.hot{
        display: block;
    }
    .gbutton{
        width: 4.9rem;
        height: 0.98rem;
        border-radius: 0.5rem;
        background: -webkit-linear-gradient(left,#37e06f, #32d69a);
        background: -o-linear-gradient(right,#37e06f, #32d69a);
        background: -moz-linear-gradient(right,#37e06f,#32d69a);
        background: linear-gradient(to right,#37e06f, #32d69a);
        box-shadow: 0rem 0.04rem 0.2rem 0rem
        rgba(55, 223, 116, 0.75);
        font-size: 0.2rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.98rem;
        margin: 0.7rem  auto 0 auto;
    }

</style>
