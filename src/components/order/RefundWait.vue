<template>
    <div class="refundWait">
      <div class="topShadow"></div>
      <div class="refundGoodsList">
        <div class="refundGoods">
          <div class="goodsTitle">
            <div class="goodsShop"></div>
            <div class="goodsShopName">大同金牌第一旗舰店</div>
            <div class="goodsShopMore"></div>
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
          <div class="goodsState">
            <div class="goodsStateLeft">
              <span>仅退款</span>
              <span>退款成功</span>
            </div>
            <div class="goodsStateRight">
              <router-link :to="{name:'RefundTo'}" tag="div" class="showDetail">查看详情</router-link>
            </div>
          </div>
        </div>
        <div class="refundGoods">
          <div class="goodsTitle">
            <div class="goodsShop"></div>
            <div class="goodsShopName">大同金牌第一旗舰店</div>
            <div class="goodsShopMore"></div>
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
          <div class="goodsState">
            <div class="goodsStateLeft">
              <span>仅退款</span>
              <span>退款成功</span>
            </div>
            <div class="goodsStateRight">
              <router-link :to="{name:'RefundSuccess'}" tag="div" class="showDetail">查看详情</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RefundWait",
        data() {
          return {

          }
        },
        mounted:function () {
          document.setTitle('退款/售后');
        }
    }
</script>

<style scoped>
  .topShadow{
    width: 100%;
    height: 0;
    box-shadow: 0 0 0.05rem #eef8ff;
  }
  .refundGoodsList{
    width: 100%;
    height: auto;
    padding: 0 0.24rem;
    box-sizing: border-box;
    background: #fbfeff;
  }
  .refundGoods{
    width: 100%;
    height: 4.29rem;
    display: flex;
    flex-direction: column;
    border-bottom: 0.02rem solid #eef1f2;
  }
  .goodsTitle{
    width: 100%;
    height: 1.18rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .goodsShop{
    width: 0.42rem;
    height: 100%;
    background: url("./static/img/Tnine/man.jpg") no-repeat center / 100% auto;
  }
  .goodsShopName{
    width: auto;
    height: 100%;
    color: #3bacfe;
    font-size: 0.24rem;
    line-height: 1.18rem;
    margin-right: 0.28rem;
  }
  .goodsShopMore{
    width: 0.58rem;
    height: 100%;
    background: url(./static/img/more.png) no-repeat left center / 0.2rem auto;
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
  .goodsState{
    width: 100%;
    height: 1.03rem;
    padding-left: 0.42rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .goodsStateLeft{
    width: auto;
    height: 100%;
  }
  .goodsStateLeft span{
    font-size: 0.24rem;
    color: #fbb548;
    margin-top: 0.16rem;
  }
  .goodsStateRight{
    width: auto;
    height: 100%;
  }
  .showDetail{
    width: 1.62rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background: linear-gradient(to right bottom,#37e071,#32d698);
    box-shadow: 0 0.04rem 0.2rem rgb(55,223,116);
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
  }

</style>
