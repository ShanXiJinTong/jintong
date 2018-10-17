<template>
  <div id="OrderEvaluate">
    <div class="pingjia">
      <ul class="miaoshu">
        <li class="li1">
          <div class="left">
            <div class="zuo">
              <div class="wb-yuan1"></div>
              <p>描述相符</p>
            </div>
            <div class="you">
              <el-rate
                v-model="formdata.selectStar"
                show-text>
              </el-rate>
            </div>
          </div>
        </li>
        <li class="li2">
          <textarea v-model="formdata.review_content" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧！"></textarea>
        </li>
        <li class="li4">
          <span>添加图片</span>
        </li>
        <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </ul>
      <div class="di">
        <div class="fabu" @click="publicInfo">发布</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getheaders , postheaders} from "../config";

  export default {
    name: 'OrderEvaluate',
    data() {
      return {
        product_id: 0,
        products: null,
        formdata: {
          'product_id': '',
          'customer_id': '',
          name: '',
          review_content: '',
          selectStar: 5
        },
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      publicInfo(){
          this.$http({
             method:'get',
             url:'/customer/car/createview',
             params:this.formdata
          }).then(res=>{
            // console.log(res.data);
             if(res.data.code == 1){
                this.$router.push({'name':'EvaluateSuccess',query:{id:res.data.shop_id}})
             }else if(res.data == 0){

             }
          })
        console.log(this.formdata);
      },
      handleRemove(file, fileList) {
          console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
      }
    },
    mounted() {
      this.product_id = this.$route.query.product_id;
      this.formdata.customer_id = localStorage['fecshop-uuid'];
      this.formdata.product_id = this.$route.query.product_id;
    }
  }
</script>
<style>
  body{
    background: #fbfeff;
  }
  input{
    border: none;
  }
  .el-icon-star-on{
    color: #36a8fe!important;
  }
  .pingjia {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    padding: 0 0.24rem;
    box-sizing: border-box;
  }

  .pingjia .miaoshu {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
  }

  .pingjia .miaoshu .li1,.li2{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pingjia .miaoshu .li1 {
    width: 100%;
    height: 1.03rem;
  }

  .pingjia .miaoshu .li1 .left {
    width: 4.33rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pingjia .miaoshu .li1 p {
    font-size: 0.22rem;
    color: #41b2fc;
  }

  .pingjia .miaoshu .li1 span {
    font-size: 0.22rem;
    color: #fbb548;
  }

  .pingjia .miaoshu .li1 .left .zuo {
    display: flex;
    align-items: center;
  }

  .pingjia .miaoshu .li1 .left .you {
    width: 2.8rem;
    height: 0.41rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pingjia .miaoshu .li1 .left .you .el-rate__text{
     position: absolute;
     right: 0;
  }
  .xing {
    width: 0.43rem;
    height: 0.41rem;
    display: flex;
  }

  .pingjia .miaoshu .li1 .left .you img {
    width: 0.43rem;
    height: 0.41rem;
  }

  .pingjia .miaoshu .li2 {
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0.01rem 0.21rem rgba(223, 223, 223, 0.43);
    margin: 0.24rem 0;
  }
  .pingjia .miaoshu .li2 textarea{
    border: none;
    height: 3rem;
    color: #303133;
  }
  .pingjia .miaoshu .li2 input{
    width: 100%;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    height: 0.86rem;
    line-height: 0.86rem;
    outline: none;
    padding: 0 0.15rem;
    color: #303133;
  }
  .pingjia .miaoshu .li4{
    margin: 0.2rem 0;
  }
  .pingjia .miaoshu .li4 span {
    font-size: 0.22rem;
    color: #c9cbcc;
  }
  .el-upload--picture-card{
    width: 100px;
    height: 100px;
    line-height: 102px;
  }
  .pingjia .miaoshu ul li{
    width: 100px;
    height: 100px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .pingjia .pingfen .dianpu p {
    font-size: 0.26rem;
    color: #41b2fc;
  }

  .pingjia .pingfen .fuwu {
    width: 100%;
    height: 0.41rem;
    display: flex;
    justify-content: space-between;
  }

  .pingjia .pingfen .fuwu p {
    font-size: 0.22rem;
    color: #c9cbcc;
    margin-left: 0.12rem;
  }

  .pingjia .pingfen .fuwu span {
    font-size: 0.22rem;
    color: #fbb548;
  }

  .pingjia .pingfen .fuwu .left {
    width: 4.33rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .pingjia .pingfen .fuwu .left .zuo {
    display: flex;
  }

  .pingjia .pingfen .fuwu .left .you {
    width: 2.8rem;
    height: 0.41rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pingjia .pingfen .fuwu .left .you img {
    width: 0.43rem;
    height: 0.41rem;
  }

  .pingjia .pingfen .taidu {
    width: 100%;
    height: 0.41rem;
    margin-top: 0.24rem;
    display: flex;
    justify-content: space-between;
  }

  .pingjia .pingfen .taidu p {
    font-size: 0.22rem;
    color: #c9cbcc;
    margin-left: 0.12rem;
  }

  .pingjia .pingfen .taidu span {
    font-size: 0.22rem;
    color: #fbb548;
  }

  .pingjia .pingfen .taidu .left {
    width: 4.33rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .pingjia .pingfen .taidu .left .zuo {
    display: flex;
  }

  .pingjia .pingfen .taidu .left .you {
    width: 2.8rem;
    height: 0.41rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pingjia .pingfen .taidu .left .you img {
    width: 0.43rem;
    height: 0.41rem;
  }

  .wb-yuan1 {
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #44b5ff;
    box-shadow: 0 0.02rem 0.5rem rgba(68, 181, 255, 0.43);
    margin-right: 0.1rem;
  }

  .di {
    width: 100%;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .di .fabu {
    width: 3.8rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    font-size: 0.18rem;
    text-align: center;
    line-height: 0.6rem;
    color: #ffffff;
    background: linear-gradient(90deg, #37e06f, #32d69a);
    box-shadow: 0 0.04rem 0.2rem rgba(55, 223, 116, 0.75);
  }

  textarea {
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
    padding: 0.2rem;
    box-sizing: border-box;
    resize: none;
    outline: none;
  }
  .pingjia .miaoshu .li3{
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.24rem;
    background: #fff;
    box-shadow: 0 0.01rem 0.21rem rgba(223,223,223,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pingjia .miaoshu .li3 img{
    width: 0.49rem;
    height: 0.35rem;
  }
  .pingjia .miaoshu .li4 span{
    font-size: 0.3rem;
    color: #c9cbcc;
    margin: 0.3rem;
  }
  .pingjia .miaoshu .li2 textarea {
    font-size: 12px;
  }
</style>
