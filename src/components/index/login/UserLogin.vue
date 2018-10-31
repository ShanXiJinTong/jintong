<template>
    <div id="UserLogin" style="overflow: hidden;">
        <ul id="ul">
            <li class="login" @click="changeOk()">
                <p :class="{hot:isOk}">快捷登录</p>
                <p :class="{hot:!isOk}">账号登录</p>
                <div class="blue"></div>
            </li>
            <div class="dis" :class="{block:isOk}">
                <li class="one">
                    <img src="../static/img/img.png" alt="">
                    <b>+86</b>
                    <input type="text" placeholder="请填写手机号码" v-model="form.tel" @blur="checkTel">
                </li>
                <li class="two">
                    <div class="dot"></div>
                    <input type="password" placeholder="短信验证码" v-model="form.password">
                    <p :class="{btn:flag,btn1:!flag}" @click="fs">获取验证码</p>
                </li>
                <li class="bigbox">
                    <button @click="check()">快速登录</button>
                </li>
            </div>
            <div class="dis" :class="{block:!isOk}">
                <li class="one">
                    <div class="dot"></div>
                    <span style="font-size: 0.26rem;">用户名：</span>
                    <input type="text" v-model="ruleForm.tel" placeholder="请输入手机号码">
                </li>
                <li class="two">
                    <div class="dot"></div>
                    <span style="font-size: 0.26rem;">密&nbsp;码：</span>
                    <input type="password" v-model="ruleForm.password" placeholder="请输入密码">
                </li>
                <li class="bigbox">
                    <button @click="handleSubmit()">登录</button>
                </li>
            </div>
            <!--<li class="bigboxs" style="margin: 0 auto;">-->
            <!--<router-link :to="{name:'Sign'}" >注册</router-link>-->
            <!--</li>-->
            <li class="txt" style="margin: 0 auto;">
                <!--<div class="round"></div>-->
                <router-link :to="{name:'Sign'}">注册</router-link>
                <!--<router-link :to="{name:'Sign'}" tag="button">注册</router-link>-->
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'UserLogin',
        data() {
            return {
                isOk: 1,
                dis: false,
                form: {
                    tel: '',
                    password: ''
                },
                ruleForm: {
                    tel: '',
                    password: ''
                },
                flag: false,
                param: false
            }
        },
        methods: {
            check() {
                if (this.form.tel == "") {
                    alert('请输入电话号码');
                } else if (!this.form.password) {
                    alert('请输入验证码');
                } else if (!this.flag) {
                    alert('手机号未注册');
                } else if (this.param == this.form.password && this.param) {

                    this.$http.get("/api/Customer/checktel?tel=" + this.form.tel).then(res => {
                        if (res.data.code == 200) {
                            localStorage['access-token']=123123123;
                            localStorage['fecshop-uuid']=res.data.data.id;
                            document.cookie="userName=" + res.data.data.firstname;
                            document.cookie="userId=" + res.data.data.id;
                            this.$router.push(this.$route.query.redirect || "/");
                            alert('登录成功');
                        } else {

                        }
                    });

                } else {
                    alert('输入密码有误');
                }

            },
            fs() {
                if (!this.flag) {

                    return;
                }
                this.$http.get("/customer/login/fasong?tel=" + this.form.tel).then(res => {

                    if (res.data.code == 200) {
                        alert("发送成功");
                        this.param=res.data.param;
                    } else {
                        alert('登录失败,请重新登录');
                    }

                });
            },
            handleSubmit() {
                this.$http({
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'access-token': localStorage['access-token'],
                    },
                    url: '/customer/login/checklogin',
                    data: this.$qs.stringify(this.ruleForm)
                }).then(res => {
                    if (res.data.status == 200) {
                        localStorage['access-token']=123123123;
                        localStorage['fecshop-uuid']=res.data.id;
                        document.cookie="userName=" + res.data.firstname;
                        document.cookie="userId=" + res.data.id;
                        this.$router.go(-1);
                    } else {
                        alert("登录失败，请重新登录");
                    }
                })
            },

            changeOk() {
                if (this.isOk == 1) {
                    this.isOk=0;
                } else {
                    this.isOk=1;
                }

            },
            checkTel() {
                if (!this.form.tel) {
                    return;
                }
                this.$http.get("/api/Customer/checktel?tel=" + this.form.tel).then(res => {
                    if (res.data.code != 200) {
                        this.flag=false;
                        this.param=false;
                        let info=res.data.info;
                        alert(info);
                    } else {
                        this.flag=true;
                    }
                });
            }
        },
        mounted: function () {
            document.setTitle('晋彤');
        }
    }
</script>
<style>
    @import url('../static/css/phoneLogin.css');
</style>
