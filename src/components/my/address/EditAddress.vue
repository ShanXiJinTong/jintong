<template>
    <div class="content">
        <form action="javascript:;">
            <div class="mwq-box">
                <div class="mwq-title">
                    <input type="hidden" v-model="form._csrf">
                    <input type="hidden" v-model="form.customer_id">
                    <div class="mwq-juxing"></div>
                    <div class="mwq-wenzi">联系人姓名</div>
                </div>
                <input class="mwq-textarea" placeholder="姓名" value="xsz" v-model="form.first_name">
            </div>
            <div class="mwq-box">
                <div class="mwq-title">
                    <div class="mwq-juxing"></div>
                    <div class="mwq-wenzi">联系方式</div>
                </div>
                <input class="mwq-textarea" placeholder="电话" v-model="form.telephone">
            </div>
            <div class="mwq-box">
                <div class="mwq-title">
                    <div class="mwq-juxing"></div>
                    <div class="mwq-wenzi">邮箱</div>
                </div>
                <input class="mwq-textarea" placeholder="邮箱" v-model="form.email">
            </div>
            <div class="mwq-box">
                <div class="mwq-title" @click="xz">
                    <div class="mwq-juxing"></div>
                    <div class="mwq-wenzi">选择地址</div>
                    <div class="mwq-enter">
                        <img src="../static/img/enter.png" alt="">
                    </div>
                </div>
                <input class="mwq-textarea" readonly placeholder="省市区" v-model="address1">
            </div>
            <div class="mwq-box">
                <div class="mwq-title">
                    <div class="mwq-juxing"></div>
                    <div class="mwq-wenzi">详细地址</div>
                </div>
                <input class="mwq-textarea" placeholder="详细地址" v-model="form.street2">
            </div>
            <div class="mwq-box">
                <div class="mwq-title">
                    <div class="mwq-wenzi">
                        <el-checkbox v-model="form.is_default">是否默认</el-checkbox>
                    </div>
                </div>
            </div>
            <button class="mwq-reserve" @click="saveAddress">
                保存
            </button>
        </form>
        <div v-if="address.length" style="min-height: 100vh;position: fixed;top: 0;width: 100%;left: 0;background: #fff;box-sizing: border-box;font-size: 0.24rem;color: #000;z-index: 999;">
        	<div v-for="item in address" style="width: 100%;padding:0.3rem 0.5rem;margin-bottom: 1px;background: rgba(231,246,255,0.5);" @click="xz1(item)">{{item.city_name?item.city_name:item.district_name}}</div>
        </div>
    </div>
</template>
<script>
    import {postheaders} from "../../config";
    export default {
        name: 'AddAddress',
        data() {
            return {
                form: {
                    customer_id:"",
                    _csrf: "",
                    address_id: '',
                    first_name: '',
                    telephone: '',
                    email: '',
                    addressCountry: '',
                    addressState: '',
                    city: '',
                    street1: '',
                    street2: '',
                    is_default: true,
                    zip: 'fecshop',
                    isDefaultActive: false
                },
                city:[],
                address:[],
                flag:0,
                address1:""
            }
        },
        methods: {
            saveAddress(){
                //缺少表单验证
                this.$http({
                    method: 'post',
                    headers: postheaders,
                    url: 'customer/addr/addrsave',
                    data: this.$qs.stringify(this.form)
                }).then(res => {

                    if (res.data.info == "修改成功") {
                    		this.$message({
                    			type:"success",
                    			message:"修改成功",
                    			duration:600
                    		});
                        this.$router.back();
                    }
                })
            },
            check(){
                this.$http.get("/customer/addr/getcsrf").then(res => {
                    this.form._csrf=res.data;
                })
            },
            xz(){
            	
            	if(this.city.length){
            		this.address = this.city;
								this.address1 = '';
            		return;
            	}	
            	this.$http.get("/customer/addr/getcitys").then(res=>{
            		
            		this.city = res.data;
            		this.address = this.city;
								this.address1 = '';
            		
            	});
            },
            xz1(item){
            	
            	this.address1 +=item.city_name?item.city_name:item.district_name;

				if(this.flag == 1){
					this.address=[];
					this.flag=0;
					this.form.street1 = item.district_name;;
					return;
				}
            	this.address = item.zi;
				this.form.city = item.city_name;

            	this.flag++;
				
            }
        },
        mounted(){
             this.check();
             this.form.customer_id=localStorage["fecshop-uuid"];
             this.$http.get("/customer/addr/addrfind",{params:{id:this.$route.query.aid}}).then(res=>{
								for(var i in res.data){
									this.form[i] = res.data[i];
								}
								this.form.is_default = this.form.is_default==1?true:false;
								this.address1 = this.form.city+this.form.street1;
             });
        }
    }
</script>
<style scoped>
    @import url(../static/css/addAddress.css);
    .el-checkbox__label{
        font-size: 0.26rem !important;
    }
</style>
