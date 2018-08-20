<template>
    <div>
        <div v-if="carInfo">
            <!--内容-->
            <div class="cyx-container">
                <ul class="cyx-items" v-for="val in carInfo">
                    <li class="cyx-top">
                        <div class="cyx-left">
                            <div :class="['cyx-choose',val.flag?'hot':'']" @click="toggleSelect(val)"></div>
                            <span class="cyx-title">{{val.shop_name}}</span>
                            <img class="cyx-next" src="./static/img/cyx-gouwuche/next.png" alt="">
                        </div>
                        <img class="cyx-delete" src="./static/img/cyx-gouwuche/delete.png" alt="">
                    </li>
                    <li class="cyx-shop" v-for="item in val.item">
                        <div class="cyx-left">
                            <div class="cyx-choose" :class="['cyx-choose',item.flag?'hot':'']" @click="toggleSelect1(val,item)"></div>
                            <router-link to="">
                                <div class="cyx-picture"
:style="'background:url(http://img.chengzhanghao.com:81/media/catalog/product/'+item.product.image.main.image+') no-repeat center center/100% auto'">
                                </div>
                            </router-link>
                            <div class="cyx-desc">
                                <span class="cyx-name">{{item.product.name.name_en}}</span>
                                <span class="cyx-price">¥{{item.product.special_price}}</span>
                            </div>
                        </div>
                        <div class="cyx-right">
                            <img src="./static/img/cyx-gouwuche/sub.png" alt="" class="cyx-sub"
                                 @click="subNumber(item)">
                            <div class="cyx-number">{{item.qty}}</div>
                            <img src="./static/img/cyx-gouwuche/add.png" alt="" class="cyx-add"
                                 @click="addNumber(item)">
                        </div>
                    </li>
                </ul>
            </div>
            <!--底部-->
            <footer class="cyx-footer">
                <div class="cyx-container">
                    <section class="cyx-top">
                        <div :class="['cyx-choose',n == n1?'hot':'']" @click="selectAll"></div>
                        <span class="cyx-title">全选</span>
                    </section>
                    <section class="cyx-bottom">
                        <div class="cyx-leftBox">
                            <div class="cyx-allPrice">
                                <img src="./static/img/cyx-gouwuche/allprice.png" alt="" class="cyx-ap">
                                <span class="cyx-heji">合计</span>
                                <span class="cyx-mao">:</span>
                                <span class="cyx-num"> {{totalMoney}} </span>
                            </div>
                        </div>
                        <router-link :to="{name:'WaitServicePay'}" class="cyx-pay">结算</router-link>
                    </section>
                </div>
            </footer>
        </div>
        <div v-else>
            <div class="content">
                <img src="./static/img/jingtong01-1.png" alt="">
                <div class="mwq-text">购物车空空如也</div>
                <router-link :to="{ name:'Index'}" tag="div" class="mwq-circle">去逛逛</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Scroll from './scroll';
    import {getheaders, postheaders} from '../config'

    export default {
        name: 'Car',
        data() {
            return {
                carInfo: [],
                totalMoney: 0,
                flag: true,
                n:"",
                n1:0,
            }
        },
        methods: {
            getData() {
                this.$http({
                    method: 'get',
                    headers: getheaders,
                    url: '/customer/car/carlist?customer_id=' + localStorage['fecshop-uuid'],
                }).then(res => {
                    let data = res.data.car;
                    if (res.data.status ==2 ) {
                        this.carInfo = data;
                        this.n1 = this.carInfo.length;
                    }
                })
            },
            changeSelect(itemid, active) {
                this.$http.get('/checkout/cart/selectone', {
                    headers: getheaders,
                    params: {
                        checked: active,
                        item_id: itemid
                    }
                }).then(res => {
                    this.flag = true;
                })
            },
            updateInfo(itemid, type) {
                this.$http({
                    headers: postheaders,
                    method: 'post',
                    url: '/checkout/cart/updateinfo',
                    data: this.$qs.stringify({
                        up_type: type,
                        item_id: itemid,
                    })
                }).then(res => {
                    console.log(res);

                })
            },
            addNumber(item) {
                item.qty++;
                this.updateInfo(item['item_id'], 'add_one');
            },
            subNumber(item) {
                item.qty--;
                if (item.qty === 0) {
                    let index = this.carInfo.indexOf(item);
                    this.carInfo.splice(index, 1);
                }
                this.updateInfo(item['item_id'], 'less_one');
            },
            toggleSelect(item) {

                item.flag = item.flag?false:true;
                if(item.flag){
                	this.n++;
                }else{
                	this.n--;
                }
                item.item.forEach(val=>{
                	
                	if(item.flag){
                		this.totalMoney = val.product.special_price*val.qty+this.totalMoney*1;
                	}else{
                		this.totalMoney = this.totalMoney*1-val.product.special_price*val.qty;
                	}
                	val.flag = item.flag;
                	
                });

                this.carInfo = Object.assign([], this.carInfo);

                
            },
            toggleSelect1(val,item){
            	item.flag = item.flag?false:true;
            	if(item.flag){
                	this.totalMoney = item.product.special_price*item.qty+this.totalMoney*1;
            	}else{
                	this.totalMoney = this.totalMoney*1-item.product.special_price*item.qty;
            	}
            	var n = 0;
            	val.item.forEach(val=>{
            		if(val.flag){
            			n++;
            		}
            	});
            	if(n==val.item.length){
            		val.flag = true;
            		if(this.n!=this.n1){
            			this.n++;
            		}

            	}else{
            		val.flag = false;
            		if(this.n==this.n1){
            			this.n--;
            		}
            	}
                this.carInfo = Object.assign([], this.carInfo);
            },
            selectAll() {

            	if(this.n == this.n1){            		
                	this.n = 0;
	            	var flag = false;        		
            	}else{
                	this.n = this.n1;
	            	var flag = true;        		
            	}
                this.carInfo.forEach(element => {
                    element.flag = flag;
                    element.item.forEach(val=>{
                    	if(flag){
                			this.totalMoney = val.product.special_price*val.qty+this.totalMoney*1;	
                    	}else{
                			this.totalMoney = this.totalMoney*1-val.product.special_price*val.qty;
                    	}
                    	val.flag = flag;
                    });
                })
                this.carInfo = Object.assign([], this.carInfo);
            }
        },
        mounted: function () {
            this.getData();
        },
        components: {
            Scroll
        }
    }
</script>
<style scoped>
    @import url(./static/common/header.css);
    @import url(./static/css/cyx-gouwuche.css);
    @import url(./static/css/address.css);
</style>
