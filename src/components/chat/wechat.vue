<template>
    <div class="weui-panel weui-panel_access">
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

    import base64 from "../../assets/js/base64";

    export default {
        components: {
        },
        data() {
            return {
                ar: [],
                socket: ""
            }
        },
        methods: {
            infri(id, name) {
                this.$store.state.friend = id;
                this.$store.state.fremark = name;
            },
            getCookie(str) {

                var arr = [];

                arr = document.cookie.split("; ");

                arr = arr.map(function (val) {

                    val = val.split("=");
                    return val;

                });

                var obj = {};
                arr.forEach(function (val) {

                    obj[val[0]] = val[1];

                });

                if(typeof str == "undefined"){
                    return obj;
                }else {
                    return obj[str];
                }

            }
        },
        mounted() {
            var _this = this;

            var obj = {
                userNum: this.$route.query["userNum"],
                userId: this.$route.query["userId"],
                userName: this.$route.query["userName"]
            }
            document.cookie = "user=" + escape(JSON.stringify(obj));
            this.socket = io("http://localhost:1701");
            var myobj = obj;
            console.log(myobj);
            this.$store.state.myId = myobj.userId;

            this.socket.on("connection", function (data) {

                var base = new base64();
                $.cookie(base.encode("socketId"), base.encode(data));
            });

            this.socket.on("returnMes", function (data) {
                var n = -1;
                _this.ar.every(function (val, index) {
                    if (val.userId == data.userId) {
                        n = index;
                        val.lastInfo = data.text;
                        val.num = val.num + 1;
                        return false;
                    }
                    return true;
                });
                if (n != -1) {
                    var str = _this.ar.splice(n, 1);
                    _this.ar.unshift(str[0]);
                } else {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:1701/getChat",
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
                    url: "http://localhost:1701/setNum",
                    data: {
                        fid: data.userId,
                        userId: myobj.userId
                    }
                });
            })

            $.ajax({
                type: "GET",
                url: "http://localhost:1701/getChat",
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

    .weui-media-box__desc {

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;

    }

    .prompt {
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

</style>