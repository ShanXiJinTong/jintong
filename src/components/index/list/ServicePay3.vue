<template>
  <div class="content">
    <div class="mwq-alert">
      <div class="mwq-juOne"></div>
      <div class="mwq-text">需支付&nbsp;<span>￥{{price}}</span>&nbsp;元</div>
      <div class="mwq-juTwo"></div>
    </div>
    <div class="mwq-line"></div>
    <div :class="['mwq-content',type==2?'hot':'']" @click="changeType(1)">
      <div class="mwq-left">
        <div class="mwq-pict">
          <img src="./static/img/qianbao.png" alt="">
        </div>
        <div class="mwq-name">我的钱包</div>
      </div>
      <div class="mwq-right">
        <div class="mwq-wenzi">
          余额 <span>{{money}}</span> 元
        </div>
        <div class="mwq-yuan">
          <div class="mwq-circle">
            <div class="mwq-smallCircle hot"></div>
          </div>
        </div>
      </div>
    </div>
    <div :class="['mwq-content',type==1?'hot':'']" @click="changeType(2)">
      <div class="mwq-left">
        <div class="mwq-pict azx">
          <img src="./static/img/wechat.png" alt="">
        </div>
        <div class="mwq-name">微信支付</div>
      </div>
      <div class="mwq-right">
        <div class="mwq-wenzi">
          <span></span>
        </div>
        <div class="mwq-yuan">
          <div class="mwq-circle">
            <div class="mwq-smallCircle hot"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mwq-surePay" @click="handlerSubmit">确认支付</div>
  </div>
</template>
<script>
  export default {
    name: 'ServicePay',
    data() {
      return {
        price: 0,
        order_id: 0,
        type: 1,
        money: 0,
        flag: false
      }
    },
    methods: {
      getyue() {
        this.$http.get('/customer/car/getyue?customer_id=' + localStorage['fecshop-uuid']).then(res => {
          this.money = res.data.money*1;
          this._selectType();
        })

      },
      // 1余额  2 微信
      _selectType() {
        if (this.money*1 < this.price*1) {
          this.type = 2;
          this.flag = false;
        }else{
          this.flag = true;
        }

      },
      changeType(type) {
        if (!this.flag) {
          return;
        }
        this.type = type
      },
      handlerSubmit() {
        let type = this.type;
        if (type == 2) {
          location.href = 'http://appserver.sxjtyb.cn/weixin/example/index4.php?orderid=' + this.order_id + '&money=' + this.price;
        } else if (type == 1) {
          this.$http.get('/customer/car/yuepay3', {
            params: {
              money: this.price,
              order_id: this.order_id,
              customer_id: localStorage['fecshop-uuid']
            }
          }).then(res=>{
             if(res.data.code == 200){
               // 成功
               this.$router.push({name:'ServicePaySuccess',query:{price:this.price,orderid:this.order_id,coin:res.data.coinNum}});
             }else{
               this.$message.info('支付失败');
             }
          })
        }
      }
    },
    mounted: function () {
      this.price = this.$route.query.price*1;
      this.order_id = this.$route.query.orderid;
      this.getyue();
      document.setTitle('支付');
    }
  }
</script>
<style scoped>
  @import url(./static/css/Tfive.css);
</style>
