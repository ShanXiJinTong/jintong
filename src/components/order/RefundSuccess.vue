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
            <span class="totalAmountText">总金额</span>
          </div>
          <div class="totalPrice">
            <div class="greenDot"></div>
            <div class="totalPriceText">￥60.00</div>
          </div>
        </div>
      </div>
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
    background: url("") no-repeat center center / 1.2rem auto;
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
    height: 3.1rem;
    padding: 0.5rem 0;
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
  }
  .totalAmount{
    width: auto;
    height: 100%;
  }
  .totalPrice{}
</style>
