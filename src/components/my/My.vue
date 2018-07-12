<template>
<div>
  <div class="gerengxingxi">
    <div class="yuan"></div>
    <div class="zi">
      <h6>韩梅梅同学</h6>
      <div class="nei">
        <img src="./static/img/jzl-img/huangguan1.png" alt="" style="width: 0.3rem; height: 0.3rem; background-size: cover;display: block;">
        <span>黄金会员</span>
      </div>
    </div>
    <a href="yhq-myVip.html">
      <p style="font-weight: bold">去升级</p>
      <div class="dian" style="border-radius: 50%;"></div>
      <div class="dian" style="color: #3bacfe;opacity: 0.5;border-radius: 50%;" ></div>
      <div class="dian" style="background: #3bacfe;opacity: 0.3;border-radius: 50%;"></div>
    </a>
  </div>
  <div class="xingxi">
    <div class="yh">
      <a href="" class="shuzi">
            <span>
                <h6 style="color: rgb(57,170,254)">2</h6>
                <h5 style="background: -webkit-linear-gradient(left,rgb(57,170,254),rgb(109,212,254)); -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;">6</h5>
                <h4 style="color: rgb(109,212,254)">0</h4>
            </span>
        <p>余额</p>
      </a>
    </div>
    <div class="yh">
      <a href="zy-youhuiquan.html" class="shuzi">
            <span>
                <h6>0</h6>
                <h5>6</h5>
            </span>
        <p>优惠劵</p>
      </a>
    </div>
    <div class="yh">
      <a href="cyx-jinbi.html" class="shuzi">
            <span>
                <h6 style="color: rgb(255,191,57);">4</h6>
                <h5 style="background: -webkit-linear-gradient(left,rgb(255,191,57),rgb(255,223,52)); -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;">8</h5>
                <h4>9</h4>
            </span>
        <p>金币</p>
      </a>
    </div>
  </div>
  <div class="bottom">
    <div class="wai">
      <a href="nxrQianBao.html" class="ne">
        <div class="kuai"></div>
        <span>钱包</span>
      </a>
    </div>
    <div class="wai">
      <router-link class="ne" :to="{name:'Car'}">
        <div class="kuai"></div>
        <span>购物车</span>
      </router-link>

    </div>
    <div class="wai">
      <a class="ne">
        <div class="kuai"></div>
        <span>常用地址</span>
      </a>
    </div>
    <div class="wai">
      <a class="ne">
        <div class="kuai"></div>
        <span>客服中心</span>
      </a>
    </div>
    <div class="wai">
      <a href="shd-help.html" class="ne">
        <div class="kuai"></div>
        <span>帮助</span>
      </a>
    </div>
    <div class="wai">
      <a href="nxrAbout.html" class="ne">
        <div class="kuai"></div>
        <span>关于我们</span>
      </a>
    </div>
    <div class="wai">
      <a class="ne">
        <div class="kuai"></div>
        <span>监督热线</span>
        <h6>400-789-2211</h6>
      </a>
    </div>
  </div>

</div>
</template>
<script>
    export default {
        name: 'My',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(./static/css/jzl-gerenzhongxin.css);


</style>
