<template>
  <div>
      <div class="dizhi">
          <span> 选择收货地址</span>
          <a href="">
              <img src="../img/xiayibu.png" alt="">
          </a>
      </div>
      <div class="cloth">
          <div class="cleft">
              <a href="">
                  <img src="../img/cloth.png" alt="">
              </a>
          </div>
          <div class="cright">
              <div class="rightone">潜水艇高端龙头</div>
              <div class="righttwo">
                  <div class="yuanjiao"></div>
                  <div class="zimu">ECC01-001Lw</div>
              </div>
              <div class="rightthree">
                  <div class="yuanjiao1"></div>
                  <div class="fuwu">上门服务</div>
              </div>
              <div class="rightfour">
                  <div class="yi">
                      <div class="yuanjiao2"></div>
                      <div class="price">¥60.00</div>
                  </div>
                  <div class="er">
                      <div class="yuanjiao3"></div>
                      <img src="../img/cheng.png" alt="">
                  </div>
              </div>
          </div>
      </div>
      <div class="line">
          <div class="line1"></div>
      </div>
      <div class="aa">
          <div class="alfet">
              <div class="yuanjiao11"></div>
              <span>优惠卷</span>
          </div>
          <a href="">
              <div class="aright">

                  <span>无可用优惠卷</span>
                  <img src="../img/xiayibu.png" alt="">
              </div>
          </a>
      </div>
      <div class="line">
          <div class="line1"></div>
      </div>
      <div class="aa">
          <div class="alfet">
              <div class="yuanjiao11"></div>
              <span>金币</span>
          </div>
          <a href="">
              <div class="aright">
                  <span>无可用金币</span>
                  <img src="../img/xiayibu.png" alt="">
              </div>
          </a>
      </div>
      <div class="line">
          <div class="line1"></div>
      </div>
      <div class="aa">
          <div class="alfet">
              <div class="yuanjiao11"></div>
              <span>发票信息</span>
          </div>
          <a href="">
              <div class="aright">
                  <span>   不开发票</span>
                  <img src="../img/xiayibu.png" alt="">
              </div>
          </a>
      </div>
      <div class="line">
          <div class="line1"></div>
      </div>
      <div class="bb">
          <div class="yuanjiao11"></div>
          <span>备注</span>
          <div class="xuantian">
              选填 <input type="text" placeholder="请输入备注(25字以内)">
          </div>
      </div>
      <div class="line">
          <div class="line1"></div>
      </div>
      <div class="aa">
          <div class="alfet">
              <div class="yuanjiao11"></div>
              <span>商品金额</span>
          </div>
          <div class="aright" style="display: flex;justify-content: flex-end">
              <span>¥60.00</span>
          </div>
      </div>
      <div class="line">
          <div class="line1"></div>
      </div>
      <div class="aa">
          <div class="alfet">
              <div class="yuanjiao11"></div>
              <span>时间</span>
          </div>
          <div class="aright god">
              <span>推荐</span>
              <div class="lanse">05.03   14:00-15:30</div>
              <img src="../img/xiayibu.png" alt="">
          </div>
      </div>
      <div class="line">
          <div class="line1"></div>
      </div>
      <div class="root">
          <div class="rleft">
              <div class="yuanjiao111"></div>
              <span>合计:</span>
              <div class="jiage">¥ 162</div>
          </div>
          <a href="">
              <div class="rright">
                  提交订单
              </div>
          </a>
      </div>
  </div>
</template>
<script>
    export default {
        name: 'XhOrder',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('订单');
        }
    }
</script>
<style scoped>
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
    @import url("../css/Teighteen.css");
</style>
