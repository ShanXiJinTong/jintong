<template>
<div>
  <div class="middle">
    <div class=" person">
      <div class="left"></div>
      <div class="middle">
        <span style="font-size: 0.3rem;color: #333;font-weight:bold;" >{{myInfo['firstname']+myInfo['lastname']}}</span><br>
        <span style="font-size: 0.22rem;color: #33cc9f;font-weight: bold;">·&nbsp;</span>
        <span style="font-size: 0.22rem;color: #666;font-weight:bold;">累计充值</span>
        <span style="font-size: 0.24rem;color: #41b2fc;font-weight: bold">&nbsp;&nbsp;1689</span>
        <span style="font-size: 0.24rem;color: #333;font-weight: bold;opacity: .4">&nbsp;.&nbsp;2000</span>
      </div>
      <router-link :to="{name:'VipImprove'}" class="right">
        <div class="gb-title" style="font-size: 0.2rem">
          <span style="color: #41b2fc;font-weight: bold;margin-right: 0.1rem;">升级攻略</span>
          <div class="dian" style="border-radius: 50%;"></div>
          <div class="dian" style="color: #3bacfe;opacity: 0.5;border-radius: 50%;" ></div>
          <div class="dian" style="background: #3bacfe;opacity: 0.3;border-radius: 50%;"></div>
        </div>
      </router-link>
      <div class="bottom">
        <div class="left">
          <img src="../static/img/yhq-pic/yellow.png" alt="" style="width: 0.3rem;height: 0.3rem;margin-right: 0.14rem;margin-top: 0.06rem">
          <span style="font-size:0.22rem;color:#666;font-weight: bold ">黄金会员</span>
        </div>
        <div class="line"></div>
        <div class="right">
          <img src="../static/img/yhq-pic/gray.png" alt=""
               style="width: 0.25rem;height: 0.25rem;">
          <span style="font-size:0.22rem;color: #666;font-weight: bold;margin-left: 0.16rem;">白金会员</span>
        </div>
      </div>
    </div>
  </div>
  <!--第二行-->
  <div class="content">
    <div class="nxrYuan"></div>
    <span>我的<p>特权</p></span>
  </div>

  <div class="middle">
    <div class="box1">
      <img src="../static/img/yhq-pic/changxian.png" alt="" >
      <p>新服务尝鲜</p>
    </div>
    <div class="box">
      <img src="../static/img/yhq-pic/zhekou.png" alt="" >
      <p>会员折扣</p>
    </div>
  </div>
  <!--第三行-->
  <div class="content" >
    <div class="left" style="width: auto">
      <div class="nxrYuan"></div>
      <span>下一级<p>特权</p></span>
    </div>
    <div class="right">
      <a href="" class="right">
        <pre style="font-size: 0.28rem;margin-right: 0.1rem">完整特权</pre>
        <div class="dian" style="border-radius: 50%;"></div>
        <div class="dian" style="color: #999;opacity: 0.5;border-radius: 50%;" ></div>
        <div class="dian" style="background: #999;opacity: 0.3;border-radius: 50%;"></div>
      </a>
    </div>
  </div>

  <div class="middle">
    <div class="box1">
      <img src="../static/img/yhq-pic/changxian.png" alt="" >
      <p>新服务尝鲜</p>
    </div>
    <div class="box">
      <img src="../static/img/yhq-pic/zhekou.png" alt="" >
      <p>会员折扣</p>
    </div>
    <div class="box2">
      <img src="../static/img/yhq-pic/fuwu.png" alt="" >
      <p>会员快递服务</p>
    </div>
  </div>
</div>
</template>
<script>
    import {getheaders} from "../../config";

    export default {
        name: 'Vip',
      data() {
        return {
          myInfo:{},
        }
      },
      methods:{
        getData(){
          this.$http({
            method:'get',
            headers:getheaders,
            url:'/customer/editaccount/index'
          }).then(res=>{
            this.myInfo = res.data.data;
          })
        }
      },
      mounted(){
        this.getData();
      }
    }
</script>
<style scoped>
  @import url(../static/css/yhq-myVip.css);
</style>
