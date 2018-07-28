<template>
  <div>
          <ul id="ul">
              <li class="login" @click="changeOk()">
                  <p :class="{hot:isOk}">快捷登录</p><p :class="{hot:!isOk}">账号登录</p>
                  <div class="blue"></div>
              </li>

              <div class="dis" :class="{block:isOk}">
                  <li class="one">
                      <img src="../static/img/img.png" alt="">
                      <b>+86</b>
                      <input type="text" placeholder="请填写手机号码" v-model="form.phone">
                  </li>
                  <li class="two">
                      <div class="dot"></div>
                      <input type="text" placeholder="短信验证码" v-model="form.code">
                      <p>获取验证码</p>
                  </li>
                  <li class="bigbox">
                      <button @click="check">快速登录</button>

                      <!--<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
                  </li>
              </div>

              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <div class="dis" :class="{block:!isOk}">
                  <li class="one">
                      <!--<div class="dot"></div>-->
                      <!--<span>用户名：</span>-->

                      <el-form-item label="用户名：" prop="name">
                          <el-input type="text" v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                      </el-form-item>
                      <!--<input type="text" v-model="ruleForm.name" placeholder="请输入用户名">-->
                  </li>
                  <li class="two">
                      <!--<div class="dot"></div>-->
                      <el-form-item label="密 码：" prop="name">
                          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                      </el-form-item>
                      <!--<span>密&nbsp;码：</span>
                      <input type="text" v-model="ruleForm.password" placeholder="请输入密码">-->
                  </li>
                  <li class="bigbox">
                      <!--<button @click="handleSubmit">登录</button>-->
                      <el-button type="primary" @click="handleSubmit">登录</el-button>
                  </li>
              </div>
              </el-form>
              <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <div :class="{block:!isOk}">
                  <li class="one">
                      <div class="dot"></div>
                      &lt;!&ndash;<span>用户名：</span>&ndash;&gt;

                      <el-form-item label="用户名：" prop="name">
                          <el-input type="email" v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                      </el-form-item>

                      &lt;!&ndash;<input type="text" v-model="email" placeholder="请输入用户名">&ndash;&gt;
                  </li>
                  <li class="two">
                      <div class="dot"></div>
                      &lt;!&ndash;<span>密&nbsp;码：</span>&ndash;&gt;
                      <el-form-item label="密 码：" prop="name">
                          <el-input type="password" v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                      </el-form-item>

                      &lt;!&ndash;<input type="text" v-model="password" placeholder="请输入密码">&ndash;&gt;
                  </li>
              </div>
              </el-form>-->


              <li class="txt">
                  <div class="round"></div>
                  <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
              </li>
          </ul>

  </div>
</template>
<script>
    export default {
        name: 'UserLogin',
        data() {
            return {
                isOk:1,
                form:{
                   phone:'',
                   code:''
                },
                ruleForm: {
                    name: '',
                    password:''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        methods:{
           check(){
            this.$http({
               method:'post',
               header: {
                'Content-Type': 'application/x-www-form-urlencoded'
               },
               url:'/customer/login/account',
               data: this.$qs.stringify(this.form)
            }).then(res=>{
               if(res.data.code ==200){
                  localStorage['access-token'] = res.headers['access-token'];
                  localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                  this.$router.push({name:'Index'});
               }
            })
           },
            handleSubmit(){
                this.$http({
                    method:'post',
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    url:'/customer/login/account',
                    data: this.$qs.stringify(this.ruleForm)
                }).then(res=>{
                    if(res.data.code ==200){
                        localStorage['access-token'] = res.headers['access-token'];
                        localStorage['fecshop-uuid'] = res.headers['fecshop-uuid'];
                        this.$router.push({name:'Index'});
                    }
                })
            },

            changeOk(){
               if(this.isOk==1){
                   this.isOk=0;
               }
               else{
                   this.isOk=1;
               }
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    @import url('../static/css/phoneLogin.css');
</style>
