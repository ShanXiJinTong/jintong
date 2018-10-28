<template>
    <section class="wsq-pay" style="padding-top: 2rem">
        <img src="./static/img/zhifuicon.png" height="61" width="75"/>
        <div class="wsq-lineOne">
            <div class="wsq-zs"></div>
            <p>评论成功</p>
            <div class="wsq-zs"></div>
        </div>
        <section class="wsq-btn">
            <div class="wsq-left"> <router-link :to="{path:'/XhEvaluate',query:{order_id:$route.query.orderid}}"> 查看评论 </router-link> </div>
            <div class="wsq-right"> <router-link :to="{path:'/'}"> 返回首页 </router-link></div>
        </section>

    </section>
</template>
<script>
    export default {
        name: 'EvaluateSuccess',
        data() {
            return {}
        },
        mounted:function () {
            document.setTitle('评论');
        }

    }
</script>
<style scoped>
    @import url(./static/css/Tseven.css);
</style>
