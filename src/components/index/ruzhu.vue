<template>
    <div class="xrBg">
        <div class="xrIcon">
            <div class="xrIconbox">
                <a href="">
                    <div class="xrIcon1">
                        <img src="./static/img/Teight1.png" alt="">
                    </div>
                </a>
                <span>商家入驻</span>
            </div>
            <div class="xrIconbox">
                <a href="">
                    <div class="xrIcon2">
                        <img src="./static/img/Teight2.png" alt="">
                    </div>
                </a>
                <span>水司入驻</span>
            </div>
        </div>
        <div class="xrclose" @click="$router.back()">
            <div class="xrcircle">×</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ruzhu"
    }
</script>

<style scoped>
    @import url(./static/css/Teight.css);
</style>