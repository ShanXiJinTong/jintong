<template>
    <div id="dialog">
        <div class="header">
            <span>{{p}}</span>
            <i class="iconfont icon-wo"></i>
        </div>
        <keep-alive>
            <scroller :on-refresh = "refresh" ref="my_scroller" refreshText="下拉查看更多">
                <div class="section" ref="box">
                </div>
            </scroller>
        </keep-alive>
        <div class="footer">
            <div class="test_box" contenteditable="true" ref="text"></div>
            <button style="position: absolute;right: 0.25rem;bottom: 0.25rem" type="button" @click="sendMess">发送</button>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import "jquery.cookie";
    import io from "socket";
    import Vue from "vue";
    import VueScroller from 'vue-scroller';
    Vue.use(VueScroller);

    export default {
        data() {
            return {
                val: "",
                p: "",
                offset:0,
                fid:this.$route.query.fid,
                socket:io("http://www.chengzhanghao.com:1701"),
                socketId:""
            }
        },
        methods: {
            refresh (done) { //这是向下滑动的时候请求最新的数据
                this.offset = this.offset+1;
                var userId = JSON.parse($.cookie("user")).userId;
                var fid = this.$route.query.fid;
                var oldHeight = this.$refs.box.offsetHeight;
                $.ajax({
                    url:"http://www.chengzhanghao.com:1701/getChatInfo/"+userId+"/"+fid+"/"+this.offset,
                    dataType:"json",
                    success:(data)=>{

                        var img1 = "",img2 = "";

                        data[data.length-1].forEach(function (val,index) {

                            if(val.userId == userId){

                                img1 = val.userImg;

                            }else {
                                img2 = val.userImg;
                            }

                        });

                        data.pop();

                        data.forEach( (val,index)=> {
                            if(val.userId!=userId){
                                document.querySelector(".section").innerHTML = (`<div class="text" style="float:left;clear:both;height:2.5rem;"><img src='${img2}' style="width:2.5rem;height:2.5rem;float:left;"/><span style="line-height:2rem;display:inline-block;max-width:10rem;border-radius:10px;background-color:#A0E759;">${val.myCon}</span></div>`)+document.querySelector(".section").innerHTML;
                            }else {
                                document.querySelector(".section").innerHTML = (`<div class="text" style="float:right;clear:both;height:2.5rem;"><img src='${img1}' style="width:2.5rem;height:2.5rem;float:right;"/><span style="line-height:2rem;display:inline-block;max-width:10rem;border-radius:10px;background-color:green;color:#fff;">${val.myCon}</span></div>`)+document.querySelector(".section").innerHTML;
                            }
                        });
                        setTimeout( ()=>{
                            this.$refs.my_scroller.scrollTo(0,this.$refs.box.offsetHeight-oldHeight-80,false);
                        },0)
                    }
                });
                done();
            },
            sendMess() {
                if(this.$refs.text.innerHTML!=""){
                    this.val = this.$refs.text.innerHTML;
                    var _this = this;
                    _this.socket.emit("gettou", this.$store.state.myId);

                    _this.socket.emit("getSocketId", this.fid);

                    _this.socket.emit("chatinfo", {
                        userId: this.$store.state.myId,
                        friId: this.fid,
                        myCon: this.val,
                        text:this.$refs.text.innerText
                    })
                    _this.socket.emit("sendMess",{
                        id:_this.$store.state.myId,
                        message:_this.val
                    })
                }

            }
        },
        mounted() {
            $.cookie("a","1");
            var _this = this;
            var myobj = JSON.parse($.cookie("user"));
            // console.log(userInfo);
            // var myobj = {
            //     userId:userInfo.userId,
            //     userName:userInfo.userName
            // };
            this.$store.state.myId = myobj.userId;
            this.p = this.$route.query.p;
            this.socket.on("connection", function (data) {

                _this.socketId = data;
            });
            _this.socket.on("givetou", function (data) {
                // var oldHeight = _this.$refs.box.offsetHeight;
                document.querySelector(".section").innerHTML += (`<div class="text" style="float:right;clear:both;height:2.5rem;"><img src='${data}' style="width:2.5rem;height:2.5rem;float:right;"/><span style="line-height:2rem;display:inline-block;max-width:10rem;border-radius:10px;background-color:green;color:#fff;">${_this.val}</span></div>`);
                setTimeout( ()=>{
                    _this.$refs.my_scroller.scrollTo(0,_this.$refs.box.offsetHeight,false);
                },0)
            });
            _this.socket.on("giveSocketId", function (data) {
                _this.socket.emit("send", {
                    id: data,
                    message: _this.val,
                    user: _this.$store.state.myId,
                    fid:_this.fid,
                    text:_this.$refs.text.innerText
                })
                _this.val="";
                _this.$refs.text.innerHTML = "";
            });
            _this.socket.on("returnMess", function (data) {
                console.log(data);
                if(document.querySelector(".section")){
                    document.querySelector(".section").innerHTML += (`<div class="text" style="float:left;clear:both;height:2.5rem;"><img src='${data.user}' style="width:2.5rem;height:2.5rem;float:left;"/><span style="line-height:2rem;display:inline-block;max-width:10rem;border-radius:10px;background-color:#A0E759;">${data.message}</span></div>`);
                    setTimeout( ()=>{
                        _this.$refs.my_scroller.scrollTo(0,_this.$refs.box.offsetHeight,false);
                    },0)
                }
            });
            var fid = this.$route.query.fid;
            var userId = myobj.userId;
            $.ajax({
                url:"http://www.chengzhanghao.com:1701/getChatInfo/"+myobj.userId+"/"+fid+"/"+this.offset,
                dataType:"json",
                success(data){

                    var img1 = "",img2 = "";

                    data[data.length-1].forEach(function (val,index) {

                        if(val.userId == userId){

                            img1 = val.userImg;

                        }else {
                            img2 = val.userImg;
                        }

                    });

                    data.pop();

                    data.forEach(function (val,index) {
                        if(val.userId!=userId){
                            document.querySelector(".section").innerHTML = (`<div class="text" style="float:left;clear:both;height:2.5rem;"><img src='${img2}' style="width:2.5rem;height:2.5rem;float:left;"/><span style="line-height:2rem;display:inline-block;max-width:10rem;border-radius:10px;background-color:#A0E759;">${val.myCon}</span></div>`)+document.querySelector(".section").innerHTML;
                        }else {
                            document.querySelector(".section").innerHTML = (`<div class="text" style="float:right;clear:both;height:2.5rem;"><img src='${img1}' style="width:2.5rem;height:2.5rem;float:right;"/><span style="line-height:2rem;display:inline-block;max-width:10rem;border-radius:10px;background-color:green;color:#fff;">${val.myCon}</span></div>`)+document.querySelector(".section").innerHTML;
                        }
                    });
                    var obj = _this.$refs.my_scroller;
                    var height1 = document.querySelector(".section").offsetHeight;
                    var height2 = window.innerHeight;
                    if(height1>height2){
                        setTimeout(function () {
                            obj.scrollTo(0,height1-height2+document.querySelector(".header").offsetHeight*2,false);
                        },0);
                    }

                }
            });
            document.setTitle('客服中心');


        }
    }
</script>
<style scoped>

    html, body {
        font-size: 62.5%;
    }

    #dialog {
        position: relative;
        height: 100%;
    }

    .header {
        z-index: 9999;
        position: fixed;
        top: 0;
        line-height: 1.2rem;
        text-align: center;
        width: 100%;
        padding:0 0.15rem;
        background: #30a3fe;
        font-size: 0.3rem;
        height: 1.2rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
    }
    .header a {
        color: #fff;
    }
    .section {
        background: #efeff4;
        min-height: 100vh;
        overflow: hidden;
        zoom: 1;
        padding-bottom:0.6rem;
        padding-top: 1.8rem;
    }
    .zuo {
        line-height: 2.5rem;
        height: 2.5rem;
        float: left;
    }
    .you {
        line-height: 2.5rem;
        height: 2.5rem;
        float: right;
    }
    .size {
        width: 2.5rem;
        height: 2.5rem;
    }
    .footer {
        position: fixed;
        bottom: 0;
        /*height: 3rem;*/
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 0.24rem;
        border: 1px solid #7d7e83;
        background: #fff;
    }
    .footer button {
        height: 0.8rem;
        width: 14%;
        border-radius: 5px;
        background: #41BE17;
        color: #fff;
        align-items: flex-end;
        line-height: 0.8rem;
    }
    .test_box{
        min-height: 0.8rem;
        max-height: 5rem;
        box-sizing: border-box;
        border: 1px solid #7d7e83;
        width: 84%;
        outline: none;
        font-size: 0.28rem;
        overflow-y: scroll;
        border-radius: 0.1rem;
        line-height: 0.8rem;
        padding:0 0.12rem;
    }
</style>