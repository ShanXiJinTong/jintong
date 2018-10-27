<template>
  <div class="RefundSuccess">
    <div class="RefundSuccessTitle">
      <div class="RefundInfo">
        <div class="RefundInfoPic"></div>
        <p class="successName">退款成功</p>
        <div class="successTime">
          <span>2018-08-06</span>
          <span>10:23</span>
        </div>
      </div>
      <div class="RefundPrice">
        <div class="amount">
          <div class="totalAmount">
            <div class="blueDot"></div>
            <span>退回</span>
            <span class="totalAmountText">总金额</span>
          </div>
          <div class="totalPrice">
            <div class="greenDot"></div>
            <div class="totalPriceText">￥60.00</div>
          </div>
        </div>
        <div class="amount">
          <div class="totalAmount">
            <div class="blueDot"></div>
            <span>退回</span>
            <span class="totalAmountText">余额</span>
          </div>
          <div class="totalPrice">
            <div class="greenDot"></div>
            <div class="totalPriceText">￥60.00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="refundInformation">
      <div class="refundInformationName">
        <div class="blueDot"></div>
        <span>退款</span>
        <span class="totalAmountText">信息</span>
      </div>
      <div class="goodsContent">
        <div class="goodsImg">
          <img src="./static/img/slt.png" alt="">
        </div>
        <div class="goodsText">
          <div class="goodsTextTop">
            <span>潜水艇高端龙头</span>
          </div>
          <div class="goodsTextBottom">
            <div class="goodsModel">
              <p></p>
              <span>ECC01-001Lw</span>
            </div>
            <div class="goodsNumber">
              <p></p>
              <span>×1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="aa one">
        <div class="alfet">
          <div class="yuanjiao"></div>
          <span>退款原因</span>
        </div>
        <div class="aright">
          <span>多拍／拍错／不想要了</span>
        </div>
      </div>
      <div class="aa one">
        <div class="alfet">
          <div class="yuanjiao"></div>
          <span>退款金额</span>
        </div>
        <div class="aright">
          <span>￥28.00</span>
        </div>
      </div>
      <div class="aa one">
        <div class="alfet">
          <div class="yuanjiao"></div>
          <span>申请时间</span>
        </div>
        <div class="aright">
          <span>2018-08-06 10:23</span>
        </div>
      </div>
      <div class="aa one">
        <div class="alfet">
          <div class="yuanjiao"></div>
          <span>退款编号</span>
        </div>
        <div class="aright">
          <span>ID788520148962</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <router-link to="" tag="div" class="contactMerchant">联系商家</router-link>
      <router-link to="" tag="div" class="dialing">拨打电话</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RefundSuccess",
        mounted:function () {
          document.setTitle('退款详情');
        }
    }
</script>

<style scoped>
  .RefundSuccessTitle{
    width: 100%;
    height: 4.84rem;
    padding: 0 0.24rem;
    box-sizing: border-box;
    background: #fafeff;
  }
  .RefundInfo{
    width: 100%;
    height: 2.52rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.21rem;
  }
  .RefundInfoPic{
    width: 100%;
    height: 1.86rem;
    background: url("./static/img/refundSuccess.jpg") no-repeat center center / 1.2rem auto;
  }
  .successName{
    font-size: 0.3rem;
    color: #4f5b64;
    text-align: center;
    line-height: 0.3rem;
    margin-bottom: 0.18rem;
  }
  .successTime{
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 0.18rem;
    color: #979899;
  }
  .RefundPrice{
    width: 100%;
    height: 2.11rem;
    padding: 0.5rem 0;
    border-bottom: 0.02rem solid #eef1f2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .amount{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
  .totalAmount{
    width: auto;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .blueDot{
    width: 0.1rem;
    height: 0.05rem;
    border-radius: 0.01rem;
    background: #44b5ff;
    box-shadow: 0 0.03rem 0.05rem rgb(195,232,255);
    margin-right: 0.1rem;
  }
  .totalAmount span{
    font-size: 0.28rem;
    color: #4f5b64;
  }
  .totalAmount .totalAmountText{
    font-size: 0.28rem;
    color: #34da87;
  }
  .totalPrice{
    width: auto;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .greenDot{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 0.01rem;
    background: #36d681;
    box-shadow: 0 0.03rem 0.05rem rgb(212,246,230);
    margin-right: 0.1rem;
  }
  .totalPriceText{
    font-size: 0.24rem;
    color: #fbb548;
  }
  .refundInformation{
    width: 100%;
    height: auto;
    padding: 0 0.24rem;
    box-sizing: border-box;
    margin-top: 0.23rem;
  }
  .refundInformationName{
    width: 100%;
    height: 0.92rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
  }
  .refundInformationName span{
    font-size: 0.28rem;
    color: #4f5b64;
  }
  .refundInformationName .totalAmountText{
    font-size: 0.28rem;
    color: #44b5ff;
  }
  .goodsContent{
    width: 100%;
    height: 2.06rem;
    display: flex;
  }
  .goodsImg{
    width: 2.17rem;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 0.27rem;
  }
  .goodsImg img{
    width: 1.75rem;
    height: 1.75rem;
  }
  .goodsText{
    width: calc(100% - 2.44rem);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .goodsTextTop{
    width: 100%;
    height: 1.15rem;
  }
  .goodsTextTop span{
    font-size: 0.28rem;
    color: #646666;
    line-height: 1.8rem;
  }
  .goodsTextBottom{
    width: 100%;
    height: 0.91rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .goodsModel{
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .goodsModel p{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    box-shadow: 0 0.05rem 0.1rem rgb(215,239,255);
    margin-right: 0.1rem;
    background: #44b5ff;
  }
  .goodsModel span{
    font-size: 0.18rem;
    color: #36a8fe;
  }
  .goodsNumber{
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .goodsNumber p{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    box-shadow: 0 0.05rem 0.1rem rgb(212,246,230);
    margin-right: 0.1rem;
    background: #36d681;
  }
  .goodsNumber span{
    font-size: 0.18rem;
    color: #8a8c8d;
  }

  .aa{
    width: 100%;
    height: 1.01rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #f6f9fa;
    padding: 0 0.24rem;
  }
  .yuanjiao{
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 0.03rem;
    margin-right: 0.1rem;
    background-color: #44b5ff;
    box-shadow: 0 0.02rem 0.05rem 0 rgba(68, 181, 255, 0.43);
  }
  .aa .alfet{
    width: 1.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    color: #8a8c8d;
    font-size: 0.24rem;
    line-height: 1.01rem;
  }

  .aa .aright{
    width: 2rem;
    height: 100%;
    color: #323333;
    font-size: 0.22rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .btn{
    width: 100%;
    height: 1.25rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0.24rem;
    box-sizing: border-box;
  }
  .contactMerchant{
    width: 1.62rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background: #37df73;
    box-shadow: 0 0.04rem 0.2rem rgb(55,223,116);
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
    margin-right: 0.3rem;
  }
  .dialing{
    width: 1.62rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background: #3bacfe;
    box-shadow: 0 0.04rem 0.2rem rgb(197,231,255);
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
  }
</style>
