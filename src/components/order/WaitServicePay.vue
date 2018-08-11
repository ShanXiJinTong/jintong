<template>
    <div>
        <div class="dizhi">
            <router-link :to="{name:'Address'}">
                <div class="mwq-model" v-if="carAddress">
                    <div class="mwq-adressText">
                        <div class="mwq-info">
                            <div class="mwq-name">{{carAddress['first_name'] + carAddress['last_name']}}</div>
                            <div class="mwq-phoneNumber">{{carAddress['telephone']}}</div>
                        </div>
                        <div class="mwq-adress">{{carAddress['street1'] + carAddress['street2'] + carAddress['city']}}
                        </div>
                    </div>
                    <img src="./static/img/xiayibu.png" alt="">
                </div>
                <div class="mwq-model" v-else="carAddress">
                    <div class="mwq-adressText">
                        <div class="mwq-info">
                            <div class="mwq-phoneNumber">请填写订单地址</div>
                        </div>
                        <div class="mwq-adress"></div>
                    </div>
                    <img src="./static/img/xiayibu.png" alt="">
                </div>
            </router-link>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>

        <div v-if="carInfo">
            <div class="cloth" v-for="item in carInfo.products">
                <div class="cleft">
                    <a href="">
                        <img :src="item['imgUrl']" alt="">
                    </a>
                </div>
                <div class="cright">
                    <div class="rightone"> {{item.name}}</div>
                    <div class="righttwo">
                        <div class="yuanjiao"></div>
                        <div class="zimu"> {{item['product_id']}}</div>
                    </div>
                    <div class="rightthree">
                        <div class="yuanjiao1"></div>
                        <div class="fuwu">上门服务</div>
                    </div>
                    <div class="rightfour">
                        <div class="yi">
                            <div class="yuanjiao2"></div>
                            <div class="price">¥{{item['product_price']}}</div>
                        </div>
                        <div class="er">
                            <div class="yuanjiao3"></div>
                            {{item.qty}}
                        </div>
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
                    <img src="./static/img/xiayibu.png" alt="">
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
                    <img src="./static/img/xiayibu.png" alt="">
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
                    <img src="./static/img/xiayibu.png" alt="">
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
                <input type="text" placeholder="请输入备注(25字以内)" v-model="form.order_remark">
            </div>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>
        <div class="root">
            <div class="rleft">
                <div class="yuanjiao111"></div>
                <span>合计:</span>
                <div class="jiage" v-if="carInfo"> ¥{{carInfo['product_total'] }}</div>
            </div>
            <div class="rright" @click="handleSubmit">
                提交订单
            </div>
        </div>
    </div>
</template>
<script>
    import {getheaders, postheaders} from '../config'

    export default {
        name: 'WaitServicePay',
        data() {
            return {
                total: 0,
                carAddress: null,
                carInfo: null,
                cart_address_id: 0,
                // formdata:{ }
                form: {
                    order_remark: '',
                    payment_method: 'alipay_standard'
                }
                ,
                _csrf:""
            }
        },
        methods: {
            getData() {
                this.$http({
                    headers: getheaders,
                    url: '/checkout/onepage/index',
                    method: 'get'
                }).then(res => {
                    if (res.status == 200) {
                        let data=res.data.data;
                        this.carAddress=data['cart_address'];
                        this.carInfo=data['cart_info'];
                        this.cart_address_id=data['cart_address_id'];
                    }
                })
            },
            handleSubmit(){

                let _this=this;

                this.formdata={
                    _csrf:this._csrf,
                    address_id: sessionStorage.aid,
                    customer_id:localStorage["feshop-uuid"],
                    product_id:this.$route.query.gid,
                    shop_id:this.$route.query.sid,
                    'billing[first_name]': _this.carAddress.first_name,
                    'billing[last_name]': _this.carAddress.last_name,
                    'billing[email]': _this.carAddress.email,
                    'billing[telephone]': _this.carAddress.telephone,
                    'billing[street1]': _this.carAddress.street1,
                    'billing[street2]': _this.carAddress.street2,
                    'billing[country]': _this.carAddress.country,
                    'billing[state]': _this.carAddress.state,
                    'billing[city]': _this.carAddress.city,
                    'billing[zip]': _this.carAddress.zip,
                    "shipping_method": "free_shipping",
                    "payment_method": "check_money"
                };
                this.formdata=Object.assign(this.formdata, this.form);

                this.$http({
                    headers: postheaders,
                    method: 'post',
                    url: 'customer/car/createorder',
                    data: _this.$qs.stringify(_this.formdata)
                }).then(res => {
                    //生成订单成功
                    if (res.data.status === 1) {
                        this.$http({
                            headers: postheaders,
                            methods: 'post',
                            url: '/payment/success'
                        }).then(res => {
                            if (res.data.status == "1") {
                                alert(1)
                                this.$router.push({name: 'ServicePaySuccess'})
                            }
                        })
                    }
                })

            },
            getCarAddress(){
              if(sessionStorage.aid){
                  this.$http.get("customer/addr/addrfind?id="+sessionStorage.aid).then(res=>{
                    this.carAddress=res.data;
                  })
              }
            },
            check(){
                this.$http.get("/customer/addr/getcsrf").then(res => {
                    this._csrf=res.data;
                })
            }
        },
        created: function () {
            this.getData();
            this.getCarAddress();
            this.check();
        }
    }
</script>
<style scoped>
    @import url('./static/css/Teighteen.css');


</style>
