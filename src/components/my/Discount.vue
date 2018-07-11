<template>
  <section class="container">
    <div class="top">
      <ul>
        <li id="no" class="top-hot">未使用</li>
        <li id="yes">已使用</li>
        <li id="date">已过期</li>
      </ul>
    </div>
    <div class="list">
      <ul class="youhuiquan">
        <li class="green">
          <div class="litop">
            <img src="./static/img/zy/zi.png" alt="" style="width: 1.5rem;height: 0.69rem">
            <div class="litop-left">
              <div class="title">MIF洗衣店</div>
              <div class="tiaojian">订单满100元即可使用</div>
            </div>
            <div class="litop-right">
              <div class="price">20</div>
              <div class="yuan">元</div>
            </div>
          </div>
          <div class="limid"></div>
          <div class="libottom">
            <div class="dot"></div>
            <div class="youxiaoqi">有效期至 2018.5.10</div>
            <div class="lijishiyong">立即使用</div>
          </div>
        </li>
        <li class="blue">
          <div class="litop">
            <img src="./static/img/zy/zi.png" alt="" style="width: 1.5rem;height: 0.69rem">
            <div class="litop-left">
              <div class="title">MIF洗衣店</div>
              <div class="tiaojian">订单满100元即可使用</div>
            </div>
            <div class="litop-right">
              <div class="price">10</div>
              <div class="yuan">元</div>
            </div>
          </div>
          <div class="limid"></div>
          <div class="libottom">
            <div class="dot"></div>
            <div class="youxiaoqi">有效期至 2018.5.10</div>
            <div class="lijishiyong">立即使用</div>
          </div>
        </li>
        <li class="yellow">
          <div class="litop">
            <img src="./static/img/zy/zi.png" alt="" style="width: 1.5rem;height: 0.69rem">
            <div class="litop-left">
              <div class="title">MIF洗衣店</div>
              <div class="tiaojian">订单满100元即可使用</div>
            </div>
            <div class="litop-right">
              <div class="price">20</div>
              <div class="yuan">元</div>
            </div>
          </div>
          <div class="limid"></div>
          <div class="libottom">
            <div class="dot"></div>
            <div class="youxiaoqi">有效期至 2018.5.10</div>
            <div class="lijishiyong">立即使用</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
    export default {
        name: 'Discount',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(./static/css/zy-youhuiquan.css);
</style>
