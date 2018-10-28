<template>
<div id="RefundDetail" >
    <!--列表开始-->
    <div class="sunShopbox" >
        <div class="sunBottom">
            <div class="sunLeft">
                <img src="./img/tou.png" alt="" width="100%" height="100%">
            </div>
            <ul class="sunRight">
                <li>
                    <span>潜水艇高端龙头</span>
                </li>
                <li id="LW">
                    <span></span>
                    <p class="pTop">ECOO1-001LW</p>
                </li>
                <li id="LW2">
                    <span></span>
                    <p class="pTop2">商品规格潜水艇高端龙头</p>
                </li>

                <li id="LW3">
                    <span></span>
                    <p class="pTop3">￥60.00</p>
                    <div class="LW_right">
                        <p class="one1"></p>
                        <p class="one2">×1</p>
                    </div>
                </li>

            </ul>
        </div>
        <div class="sunBottoms">
            <span></span>
            <p>实付款: ￥60.00</p>
        </div>
    </div>
    <div class="section_1">

        <div class="sec_left">
            <span class="sex"></span>
            <p>退款<span>原因</span></p>
        </div>
        <div class="sec_right" @click="mask1()">
            <p>{{isHot}}</p>
            <i class="iconfont error">&#xe650;</i>
        </div>
    </div>
    <div class="section_2">
        <div class="sec_top">
            <span class="sex"></span>
            <p>退款<span>金额</span></p>
            <span class="sex2">( 最多￥78.00,含发货邮费 )</span>
        </div>
        <p class="moNey">￥60.00</p>
    </div>
    <div class="section_3">
        <el-input type="textarea" placeholder="退款说明" class="section_3_input" />
    </div>

    <div class="sec_4">
        <div class="sec_bto">
            <span class="sex_c"></span>
            <p>上传<span>凭证</span></p>
            <span class="sex3">( 最多6张 )</span>
        </div>
        <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
    <router-link :to="{name:'RefundTo'}">
    <div class="button_y">
        提交
    </div>
    </router-link>


    <!--遮罩-->
    <div class="glpark" :class="{hot:isOk}"></div>
    <!---->
    <div class="tuikuan" :class="{hot:isOk}">
        <div class="tktitle">
            <span class="tkcolor">退款</span>原因
            <div class="tkclose" @click="mask1()">
                <img src="./img/cuohao.png" alt="">
            </div>
        </div>

        <ul class="tkbox">
            <li class="tklist" @click="mask2()">
                <div class="left">
                    <div class="tkyuan"></div>
                    <span class="tktext">退运费</span>
                </div>
                <img src="./img/tuikuan.png" alt="" :class="['right',isHot=='退运费'?'hot':'']">
            </li>
            <li class="tklist" @click="mask2()">
                <div class="left">
                    <div class="tkyuan"></div>
                    <span class="tktext">大小/尺寸与商品描述不符</span>
                </div>
                <img src="./img/tuikuan.png" alt="" :class="['right',isHot=='大小/尺寸与商品描述不符'?'hot':'']">
            </li>
            <li class="tklist" @click="mask2()">
                <div class="left">
                    <div class="tkyuan"></div>
                    <span class="tktext">颜色/款式/型号与商品描述不符</span>
                </div>
                <img src="./img/tuikuan.png" alt="" class="right" :class="{hot:isHot=='颜色/款式/型号与商品描述不符'}">
            </li>
            <li class="tklist" @click="mask2()">
                <div class="left">
                    <div class="tkyuan"></div>
                    <span class="tktext">材质与商品描述不符</span>
                </div>
                <img src="./img/tuikuan.png" alt="" class="right" :class="{hot:isHot=='材质与商品描述不符'}">
            </li>
            <li class="tklist" @click="mask2()">
                <div class="left">
                    <div class="tkyuan"></div>
                    <span class="tktext">做工粗造有瑕疵</span>
                </div>
                <img src="./img/tuikuan.png" alt="" class="right" :class="{hot:isHot=='做工粗造有瑕疵'}">
            </li>
            <li class="tklist" @click="mask2()">
                <div class="left">
                    <div class="tkyuan"></div>
                    <span class="tktext">质量问题</span>
                </div>
                <img src="./img/tuikuan.png" alt="" class="right" :class="{hot:isHot=='质量问题'}">
            </li>
        </ul>
        <div class="tkbutton" @click="mask1()">完成</div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'RefundDetail',
        data() {
            return {
                isOk:false,
                isHot:'买错了',
                dialogImageUrl: '',
                dialogVisible: false
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
              var el = event.target;
              this.isHot = el.innerText
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        mounted:function () {
            document.setTitle('申请退款');
        }
    }
</script>
<style scoped>
    #RefundDetail{
      overflow: hidden;
    }
    .sunContent1>.sunShopbox{
        width: 100%;
        height: 2.5rem;
        padding:0.24rem 0 0.12rem 0;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: 0.01rem solid rgba(0,0,0,0.05);

    }
    .sunBottom{
        width: 100%;
        height: 2.32rem;

        display: flex;
        padding: 0.36rem  0.24rem 0  0.24rem;
        box-sizing: border-box;

    }
    .sunShopbox>.sunBottom>.sunLeft{
        width: 1.74rem;
        height: 1.74rem;
    }
    .sunLeft img{
        width: 100%;
        height: 100%;
    }
    .sunShopbox>.sunBottom>.sunRight{
        display: flex;
        flex-direction: column;
        flex-grow: 1;

    }
    .sunShopbox>.sunBottom>.sunRight>li{
        width: 100%;
        height: auto;
        line-height: 0.67rem;
        font-size: 0.3rem;
        color: #646666;
        font-weight: 600;
    }

    .sunShopbox>.sunBottom .sunBox span{
        height: 100%;
        line-height: 100%;
        text-align: center;
        padding: 0.2rem 0 0 0;
        box-sizing: border-box;
    }
    .sunShopbox>.sunBottom>.sunRight>li>.sunBox>span{
        font-size: 0.22rem;
    }
    .sunShopbox>.sunBottom>.sunRight>li>.sunBox{
        width: 100%;
        height: 100%;
        line-height: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
    /*MY*/
    #LW{
        position: relative;
        display: flex;
        box-sizing: border-box;
        height: 0.27rem;
        margin-top: -0.1rem;
    }
    .pTop {
        font-size: 0.24rem;
        color: #36a8fe;
        margin-top: -0.2rem;
        box-sizing: border-box;
    }
    #LW span{
        border-radius: 50%;
        display: block;
        width:0.08rem;
        height: 0.08rem;
        background: #44b5ff;
        box-shadow: 0 0.02rem 0.05rem rgba(68,181,255,0.43);
        margin-top: 0.1rem;
        margin-right: 0.2rem;
    }
    #LW2{
        position: relative;
        display: flex;
        box-sizing: border-box;
        height: 0.27rem;
        margin-top: 0.05rem;
    }
    .pTop2 {
        font-size: 0.2rem;
        color: rgba(0, 0, 0, 0.3);
        margin-top: -0.2rem;
        box-sizing: border-box;
    }
    #LW2 span{
        border-radius: 50%;
        display: block;
        width:0.08rem;
        height: 0.08rem;
        background: #44b5ff;
        box-shadow: 0 0.02rem 0.05rem rgba(68,181,255,0.43);
        margin-top: 0.1rem;
        margin-right: 0.25rem;
    }

    #LW3{
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 0.27rem;
        margin-top: 0.2rem;
    }
    .pTop3 {
        font-size: 0.24rem;
        color:#8a8c8d;
        box-sizing: border-box;
    }
    #LW3 span{
        border-radius: 50%;
        display: block;
        width:0.08rem;
        height: 0.08rem;
        background: #44b5ff;
        box-shadow: 0 0.02rem 0.05rem rgba(68,181,255,0.43);
        margin-top: 0.1rem;
        margin-right: 0.2rem;
    }
    .LW_right{
        width: 0.5rem;
        height: 100%;
        margin-left: 3.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .one1{
        border-radius: 50%;
        display: block;
        width:0.08rem;
        height: 0.08rem;
        background: #44b5ff;
        box-shadow: 0 0.02rem 0.05rem rgba(68,181,255,0.43);
        margin-top: 0.04rem;
        margin-left: -0.06rem;
    }
    .one2{
        font-size: 0.24rem;
        color: #8a8c8d;
    }
    .sunBottoms{
        width: 100%;
        height: 0.4rem;
        padding-right: 0.24rem;
        padding-left: 0.28rem;
        box-sizing:border-box;
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        margin-top: 0.3rem;
    }
    .sunBottoms span{
        border-radius: 50%;
        display: block;
        width:0.08rem;
        height: 0.08rem;
        background: #44b5ff;
        box-shadow: 0 0.02rem 0.05rem rgba(68,181,255,0.43);
        position: absolute;
        top: 40%;
        left:70%;
    }
    .sunBottoms p{
        width: auto;
        height: auto;
        font-size: 0.24rem;
        color: #fcbc41;
    }
    .section_1{
        width: calc(100% - 0.48rem);
        height: 0.95rem;
        margin: auto;
        margin-top: 0.4rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        border-top: 1px solid rgba(0, 0, 0, 0.04);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sec_left{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sex{
        margin-right: 0.1rem;
        display: block;
        width: 0.15rem;
        height: 0.1rem;
        background:#44b5ff;
        border-radius: 0.15rem;
        box-shadow: 0 0.02rem 0.05rem rgba(68,181,255,0.43);
    }
    .sec_left p{
        font-size: 0.28rem;
        font-weight: 700;
    }
    .sec_left p span{
        color: #41b2fc;
    }
    .sec_right{
        width: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sec_right p{
        font-size: 0.28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .error{
        font-size: 0.36rem;
        color: #36a8fe;
    }
    .section_2{
        width: calc(100% - 0.48rem);
        height: 1.45rem;
        margin: auto;
    }
    .sec_top{
        width: auto;
        height: 70%;
        display: flex;
        align-items: center;
    }
    .sec_top p{
        font-size: 0.28rem;
        font-weight: 700;
    }
    .sec_top p span{
        color: #41b2fc;
    }
    .sex2{
        font-size: 0.24rem;
        color: rgba(0, 0, 0, 0.3);
        margin-left: 0.1rem;
    }
    .moNey{
        font-size: 0.3rem;
        color: #fcbc41;
        font-weight: 700;
        margin-top: -0.2rem;
        margin-left: 0.2rem;
    }
    .section_3{
        width: calc(100% - 0.48rem);
        height: 1.5rem;
        margin: auto;
        border-radius: 0.1rem;
        font-size: 0.28rem;
        color:#b9c9d2;
        box-sizing: border-box;
    }
    .section_3_input{
      width: 100%;
      outline: none;
    }
    .sec_4{
        width:100%;
        height: auto;
        padding: 0.24rem;
        box-sizing: border-box;
    }
    .sec_bto{
        width: auto;
        display: flex;
        margin-bottom: 0.2rem;
    }
    .sec_bto p{
        font-size: 0.28rem;
        font-weight: 700;
    }
    .sec_bto p span{
        color: #31d094;
    }
    .sex3{
        font-size: 0.24rem;
        color: rgba(0, 0, 0, 0.3);
        margin-left: 0.1rem;
    }
    .sex_c{
        margin-right: 0.1rem;
        display: block;
        width: 0.15rem;
        height: 0.1rem;
        background:#31d094;
        border-radius: 0.15rem;
        box-shadow: 0 0.02rem 0.05rem rgba(68,181,255,0.43);
        margin-top: 0.1rem;
    }
    .sec_4 img{
        width: 1rem;
        height: 1rem;
    }
    .button_y{
        width: 4.5rem;
        height: 0.6rem;
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
        line-height: 0.6rem;
        margin:0.5rem auto;
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
        left:0;
        bottom: -9rem;
        transition: all ease .5s;
        /*transform: translate3d(0,1.2rem,0);*/
    }
    .tuikuan.hot{
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

</style>
<style>
  #app{
    overflow: hidden;
  }
</style>

