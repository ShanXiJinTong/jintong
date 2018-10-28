<template>
<div>
    <form >
        <ul>
            <li class="login">
                <p >用户信息完善</p>
            </li>
            <li class="one">
                <div class="icon"></div>
                <input type="text" placeholder="请填写您的姓名">
            </li>
            <li class="two">
                <div class="icon"><div class="icons"></div></div>
                <input type="text" placeholder="请填写您的详细住址">
            </li>
            <li class="three">
                <img src="../static/img/img.png" alt="">
                <b>+86</b>
                <input type="text" placeholder="请填写手机号码">
            </li>
            <li class="four">
                <div class="dot"><div class="dots"></div></div>
                <input type="text" placeholder="重复输入您所在的片区">
            </li>
            <li class="bigbox">提 交</li>
            <li class="txt">
                <div class="round"><div class="small"></div></div>
                <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
            </li>

        </ul>
    </form>
</div>
</template>
<script>
    export default {
        name: 'MessageFill',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('晋彤');
        }
    }
</script>
<style scoped>
    @import url('../static/css/userinfo.css');
</style>
