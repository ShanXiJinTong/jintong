<template>
    <div class="weui-panel weui-panel_access">
        <header >
            <p v-html="html"></p>
        </header>
        <div class="weui-panel__bd frilist">
            <a :href="'#/dialog?fid='+a.userId+'&p='+a.userName" class="weui-media-box weui-media-box_appmsg"
               @click="infri(a.userId,a.userName)" v-for="a in ar">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="a.userImg" alt="">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title" v-text="a.userName"></h4>
                    <div class="weui-media-box__desc" v-html="a.lastInfo"></div>
                    <span class="prompt" v-if="a.num!=0" v-text="a.num"></span>
                </div>
            </a>
        </div>
    </div>
</template>
<script>

    import $ from "jquery";
    import "jquery.cookie";
    import io from "socket";

    import base64 from "../base64.js";

    export default {
        components: {
        },
        data() {
            return {
                ar: [],
                html: "聊天列表",
                socket: io(this.$store.state.chatHost)
            }
        },
        methods: {
            infri(id, name) {
                this.$store.state.friend = id;
                this.$store.state.fremark = name;
            }
        },
        mounted() {
            var _this = this;
            var myobj = JSON.parse($.cookie("user"));
            this.$store.state.myId = myobj.userId;

            this.socket.on("connection", function (data) {

                var base = new base64();
                $.cookie(base.encode("socketId"),base.encode(data));
            });

            this.socket.on("returnMes",function (data) {
                var n = -1;
                _this.ar.every(function (val,index) {
                    if(val.userId==data.userId){
                        n=index;
                        val.lastInfo = data.text;
                        val.num = val.num+1;
                        return false;
                    }
                    return true;
                });
                if(n!=-1){
                    var str = _this.ar.splice(n,1);
                    _this.ar.unshift(str[0]);
                }else {
                    $.ajax({
                        type: "GET",
                        url: this.$store.state.chatHost+"/getChat",
                        data: {
                            id: _this.$store.state.myId
                        },
                        success: function (data) {

                            var data = JSON.parse(data);
                            _this.ar = data;

                        }
                    })
                }

                $.ajax({
                    url:this.$store.state.chatHost+"/setNum",
                    data:{
                        fid:data.userId,
                        userId:JSON.parse($.cookie("user")).userId
                    }
                });
            })

            $.ajax({
                type: "GET",
                url: this.$store.state.chatHost+"/getChat",
                data: {
                    id: _this.$store.state.myId
                },
                success: function (data) {

                    var data = JSON.parse(data);
                    _this.ar = data;

                }
            })
        }
    }


</script>
<style scoped>

    .weui-media-box__desc{

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        margin-top: 0.3rem;
    }
    .weui-media-box{
        display: flex;
        box-sizing: border-box;
        padding: 0.2rem 0.3rem;
        align-items: center;
        border-bottom: 1px solid rgba(100,100,100,0.5);
        font-size: 0.32rem;
        color: #000;
    }
    .weui-media-box__hd{
        width: 1.5rem;
        height: 1.5rem;
    }
    .weui-media-box__title{
        font-size: 0.34rem;
        font-weight: bold;
    }
    .weui-media-box__hd img{
        width: 100%;
        height: 100%;
    }
    .prompt{
        position: absolute;
        border-radius: 50%;
        background: red;
        color: #fff;
        width: 1.3rem;
        height: 1.3rem;
        left: 4rem;
        text-align: center;
        line-height: 1.3rem;
        font-size: 0.8rem;
        top: 0.5rem;
    }
    header {
        line-height: 45px;
        text-align: center;
        width: 100%;
        background: #30a3fe;
        font-size: 19px;
        height: 45px;
        color: #fff;
    }
    .weui-media-box__bd{
        margin-left: 0.5rem;
    }

</style>