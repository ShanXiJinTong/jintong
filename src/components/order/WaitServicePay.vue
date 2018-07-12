<template>
  <div id="WaitServicePay">
    <!-- 选择服务项目 -->
    <div class="chouse">选择服务项目</div>
    <div class="content">
      <div class="maintain">
        <span class="left">水龙头维修</span>
        <span class="right">￥45.00</span>
        <div class="big"><div class="small"></div></div>
      </div>
      <div class="xian"></div>
      <div class="change">
        <span class="leftChange">水龙头更换</span>
        <div class="quan"></div>
      </div>
      <div class="onexian"></div>
      <div class="ohter">
        <span class="qita">其他</span>
        <div class="onequan"></div>
      </div>
    </div>
    <div class="list">
      <div class="tap">
        <span class="onetou">水龙头</span>
        <span class="onenumber">×1</span>
        <span class="oneprice">￥45.00</span>
        <div class="onejian">-</div>
        <span class="onenum">0</span>
        <div class="onejia">+</div>
      </div>
      <div class="twoxian"></div>
      <div class="pipe">
        <span class="twotou">水管</span>
        <span class="twonumber">×1</span>
        <span class="twoprice">￥15.00</span>
        <div class="twojian">-</div>
        <span class="twonum">1</span>
        <div class="twojia">+</div>
      </div>
      <div class="threexian"></div>
      <div class="drain">
        <span class="threetou">地漏</span>
        <span class="threenumber">×1</span>
        <span class="threeprice">￥10.00</span>
        <div class="threejian">-</div>
        <span class="threenum">1</span>
        <div class="threejia">+</div>
      </div>
      <div class="fourxian"></div>
      <div class="money">
        <span class="fourtou">补差价</span>
        <span class="fournumber">×2</span>
        <span class="fourprice">￥2.00</span>
        <div class="fourjian">-</div>
        <span class="fournum">1</span>
        <div class="fourjia">+</div>
      </div>
    </div>
    <!-- upload 上传服务凭证-->
    <div class="upload">
      <div class="pingzheng">上传服务凭证</div>
      <img src="./img/photo.png" alt="图片加载失败">
    </div>
    <div class="add">
      <div class="miaoshu">添加文字描述...</div>
    </div>
    <div class="youhui">
      <div class="onedian"></div>
      <span class="oneleft">优惠劵</span>
      <span class="oneright">无可用优惠劵</span>
      <img src="./img/back.png" alt="">
    </div>
    <div class="gold">
      <div class="twodian"></div>
      <span class="twoleft">金币</span>
      <span class="tworight">使用40金币抵扣4元</span>
      <img src="./img/back.png" alt="">
    </div>
    <div class="dingjin">
      <div class="threedian"></div>
      <span class="threeleft">定金</span>
      <span class="threeright">-30元</span>
      <img src="./img/back.png" alt="">
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="fourdian"></div>
      <span class="heji">合计 :</span>
      <span class="price">￥162</span>
      <div class="pay">立即付款</div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'WaitServicePay',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  .chouse{
    font-size: 0.3rem;
    margin-top: 0.38rem;
    margin-left: 0.24rem;
    color: #969899;
  }
  .content{
    width: 7.03rem;
    margin: 0 0.24rem;
    height: 2.65rem;
    margin-top: 0.26rem;
    box-sizing: border-box;
    border-radius: 0.02rem;
    box-shadow: 0rem 0rem 0.8rem  0 rgba(41,167,255,0.1);
  }
  .content .maintain{
    width: 100%;
    height: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content .maintain .left{
    font-size: 0.22rem;
    margin-left: 0.55rem;
    color:#4f5b64;
  }
  .content .maintain .right{
    font-size: 0.22rem;
    margin-left: 3.7rem;
    color:#41b2fc;
  }
  .content .maintain .big{
    width: 0.14rem;
    height: 0.14rem;
    border:0.02rem solid #41b2fc;
    margin-right: 0.24rem;
    border-radius: 50%;
  }
  .content .maintain .big .small{
    width: 0.06rem;
    height: 0.06rem;
    background: #41b2fc;
    border-radius: 50%;
    margin: 0.04rem auto;
  }
  .content .xian{
    width: 6.7rem;
    margin: 0 auto;
    border:0.01rem solid #f8fcff;
  }
  .content .change{
    width: 100%;
    height: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content .change .leftChange{
    font-size: 0.22rem;
    margin-left: 0.5rem;
    letter-spacing:0.02rem;
    color:#4f5b64;
  }
  .content .change .quan{
    width: 0.14rem;
    height: 0.14rem;
    border:0.02rem solid #c9cbcc;
    margin-right: 0.24rem;
    border-radius: 50%;
  }
  .content .onexian{
    width: 6.7rem;
    margin: 0 auto;
    border:0.01rem solid #f8fcff;
  }
  .content .ohter{
    width: 100%;
    height: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content .ohter .qita{
    font-size: 0.22rem;
    margin-left: 0.5rem;
    letter-spacing:0.02rem;
    color:#4f5b64;
  }
  .content .ohter .onequan{
    width: 0.14rem;
    height: 0.14rem;
    border:0.02rem solid #c9cbcc;
    margin-right: 0.24rem;
    border-radius: 50%;
  }
  .list{
    width: 7.03rem;
    margin: 0 0.24rem;
    height: 3.52rem;
    margin-top: 0.25rem;
    box-shadow: 0rem 0rem 0.5rem  0 rgba(41,167,255,0.1);
    border-radius: 0.02rem;
  }
  .list .tap{
    width: 100%;
    height: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .list .tap .onetou{
    font-size: 0.22rem;
    margin-left: 0.5rem;
    letter-spacing:0.02rem;
    color:#4f5b64;
  }
  .list .tap .onenumber{
    font-size: 0.22rem;
    margin-left: 0.93rem;
    color:#4f5b64;
  }
  .list .tap .oneprice{
    font-size: 0.22rem;
    margin-left: 0.88rem;
    color:#4f5b64;
  }
  .list .tap .onejian{
    font-size: 0.8rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-left: 0.68rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.3rem;
    color: #4f5b64;
  }
  .list .tap .onenum{
    font-size: 0.22rem;
    color:#4f5b64;
    margin: 0 0.1rem;
  }
  .list .tap .onejia{
    font-size: 0.5rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-right: 0.24rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.4rem;
    color: #4f5b64;
  }
  .list .twoxian{
    width: 6.7rem;
    margin: 0 auto;
    border:0.01rem solid #f8fcff;
  }
  .list .pipe{
    width: 100%;
    height: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .list .pipe .twotou{
    font-size: 0.22rem;
    margin-left: 0.5rem;
    letter-spacing:0.02rem;
    color:#4f5b64;
  }
  .list .pipe .twonumber{
    font-size: 0.22rem;
    margin-left: 1.2rem;
    color:#4f5b64;
  }
  .list .pipe .twoprice{
    font-size: 0.22rem;
    margin-left: 0.88rem;
    color:#4f5b64;
  }
  .list .pipe .twojian{
    font-size: 0.8rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-left: 0.68rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.3rem;
    color: #4f5b64;
  }
  .list .pipe .twonum{
    font-size: 0.22rem;
    color:#4f5b64;
    margin: 0 0.1rem;
  }
  .list .pipe .twojia{
    font-size: 0.5rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-right: 0.24rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.4rem;
    color: #4f5b64;
  }
  .list .threexian{
    width: 6.7rem;
    margin: 0 auto;
    border:0.01rem solid #f8fcff;
  }
  .list .drain{
    width: 100%;
    height: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .list .drain .threetou{
    font-size: 0.22rem;
    margin-left: 0.5rem;
    letter-spacing:0.02rem;
    color:#4f5b64;
  }
  .list .drain .threenumber{
    font-size: 0.22rem;
    margin-left: 1.2rem;
    color:#4f5b64;
  }
  .list .drain .threeprice{
    font-size: 0.22rem;
    margin-left: 0.88rem;
    color:#4f5b64;
  }
  .list .drain .threejian{
    font-size: 0.8rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-left: 0.68rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.3rem;
    color: #4f5b64;
  }
  .list .drain .threenum{
    font-size: 0.22rem;
    color:#4f5b64;
    margin: 0 0.1rem;
  }
  .list .drain .threejia{
    font-size: 0.5rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-right: 0.24rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.4rem;
    color: #4f5b64;
  }
  .list .fourxian{
    width: 6.7rem;
    margin: 0 auto;
    border:0.01rem solid #f8fcff;
  }
  .list .money{
    width: 100%;
    height: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .list .money .fourtou{
    font-size: 0.22rem;
    margin-left: 0.5rem;
    letter-spacing:0.02rem;
    color:#4f5b64;
  }
  .list .money .fournumber{
    font-size: 0.22rem;
    margin-left: 0.93rem;
    color:#4f5b64;
  }
  .list .money .fourprice{
    font-size: 0.22rem;
    margin-left: 0.9rem;
    color:#4f5b64;
  }
  .list .money .fourjian{
    font-size: 0.8rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-left: 0.82rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.3rem;
    color: #4f5b64;
  }
  .list .money .fournum{
    font-size: 0.22rem;
    color:#4f5b64;
    margin: 0 0.1rem;
  }
  .list .money .fourjia{
    font-size: 0.5rem;
    width: 0.74rem;
    height: 0.44rem;
    background: #f0f0f0;
    margin-right: 0.24rem;
    border-radius:  0.3rem;
    text-align: center;
    line-height: 0.4rem;
    color: #4f5b64;
  }
  .upload{
    width: 100%;
    height: 2.34rem;
    overflow: hidden;
  }
  .upload .pingzheng{
    font-size: 0.3rem;
    margin-top: 0.32rem;
    margin-left: 0.24rem;
    color: #969899
  }
  .upload img{
    width: 1.41rem;
    height: 1.41rem;
    margin-left: 0.14rem;
  }
  .add{
    width: 7.03rem;
    height: 1.27rem;
    background: #f1faff;
    border-radius: 0.08rem;
    margin: 0 auto;
    overflow: hidden;
  }
  .add .miaoshu{
    font-size: 0.22rem;
    color:#b9c9d2;
    margin-top: 0.3rem;
    margin-left: 0.32rem;
  }
  .youhui{
    width: 7.03rem;
    height: 0.86rem;
    margin: 0.12rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background: #41b2fc; */
  }
  .youhui .onedian{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #44b5ff;

  }
  .youhui .oneleft{
    font-size: 0.22rem;
    margin-left: -4.3rem;
    color:#646666;
  }
  .youhui .oneright{
    font-size: 0.22rem;
    margin-right: -4.2rem;
    color:#646666;
  }
  .youhui img{
    width: 0.22rem;
    height: 0.32rem;
  }
  .gold{
    width: 7.03rem;
    height: 0.86rem;
    margin: 0.12rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background: #41b2fc; */
  }
  .gold .twodian{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #44b5ff;

  }
  .gold .twoleft{
    font-size: 0.22rem;
    margin-left: -3.9rem;
    color:#646666;
  }
  .gold .tworight{
    font-size: 0.22rem;
    margin-right: -3.8rem;
    color:#646666;
  }
  .gold img{
    width: 0.22rem;
    height: 0.32rem;
  }
  .dingjin{
    width: 7.03rem;
    height: 0.86rem;
    margin: 0.12rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background: #41b2fc; */
  }
  .dingjin .threedian{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #44b5ff;

  }
  .dingjin .threeleft{
    font-size: 0.22rem;
    margin-left: -5.4rem;
    color:#646666;
  }
  .dingjin .threeright{
    font-size: 0.22rem;
    margin-right: -5.3rem;
    color:#646666;
  }
  .dingjin img{
    width: 0.22rem;
    height: 0.32rem;
  }
  .footer{
    width: 100%;
    height: 1.08rem;
    background: #f1faff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .footer .fourdian{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #44b5ff;
    margin-left: 0.24rem;
  }
  .footer .heji{
    font-size: 0.22rem;
    color: #84cbfe;
    /* margin-left: -0rem; */
  }
  .footer .price{
    font-size: 0.22rem;
    color: #41b2fc;
    margin-right: 1.59rem;
  }
  .footer .pay{
    font-size: 0.22rem;
    color:#fff;
    height: 0.6rem;
    width: 3.8rem;
    border-radius: 1rem;
    background: linear-gradient(to right, #37e071 , #36de78 , #34d98b , #32d699);
    text-align: center;
    line-height: 0.6rem;
    margin-right: 0.24rem;
  }
</style>
