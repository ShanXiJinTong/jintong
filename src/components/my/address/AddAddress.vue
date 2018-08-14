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
                <div class="mwq-title">
                    <div class="mwq-juxing"></div>
                    <div class="mwq-wenzi">服务地址</div>
                    <div class="mwq-enter">
                        <img src="../static/img/enter.png" alt="">
                    </div>
                </div>
                <input class="mwq-textarea" placeholder="地址" v-model="form.street2">
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
                    last_name: '',
                    telephone: '',
                    email: '',
                    addressCountry: '',
                    addressState: '',
                    city: '',
                    street1: '',
                    street2: '',
                    is_default: false,
                    zip: 'fecshop',
                    isDefaultActive: false
                }
            }
        },
        methods: {
            saveAddress(){
                //缺少表单验证
                this.$http({
                    method: 'post',
                    headers: postheaders,
                    url: 'customer/addr/addaddr',
                    data: this.$qs.stringify(this.form)
                }).then(res => {

                    if (res.data.status == 1) {
                        this.$router.back();
                        //缺少message提示
                    }
                })
            },
            check(){
                this.$http.get("/customer/addr/getcsrf").then(res => {
                    this.form._csrf=res.data;
                })
            }
        },
        mounted(){
             this.check();
             this.form.customer_id=localStorage["fecshop-uuid"];
        }
    }
</script>
<style scoped>
    @import url(../static/css/addAddress.css);
</style>
