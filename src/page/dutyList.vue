<style scoped>
  .list_wrap{
    width:100%;
    height:100vh;
    background-color: #fff;
    font-size: 15px;
  }
  .clearfix:after{
   content:".";/*加一段内容*/
   display:block;/*让生成的元素以块级元素显示，占满剩余空间*/
   height:0;/*避免生成的内容破坏原有布局高度*/
   clear:both;/*清除浮动*/
   visibility:hidden;/*让生成的内容不可见*/
  }
  .clearfix{zoom:1;/*为IE6，7的兼容性设置*/}
  .list_top{
    padding-top:20px;
    background-color: #fff;
    margin:0px auto 10px ;
    height:300px;
  }

  .one_wrap{
    position:relative;
    margin-left:60px;
    margin-bottom:5px;
    /*margin:0px auto 10px ;*/
  }
  .oneList{
    margin-right:20px;
  }
  .one{
    margin-bottom:15px;
  }
  .yzm_wrap{
      padding-top:7px;
      top:58px;
      right:-90px;
      text-decoration: underline;
      color:#096fd4;
  }
   .input_box{
    width:200px;
    height:30px;
    font-size: 14px;
    border:1px solid #b6b6b6;
   }
   .inquire_but{
      width:200px;
      height:35px;
      text-align:center;
      line-height: 35px;
      background-color: #096fd4;
      border-radius: 4px;
      color:#fff;
      font-size: 15px;
     }
     .but_wrap{
      /*width:300px;*/
      margin-left:136px;
      margin-top:30px;
      /*margin:30px auto 0px ;*/
     }
     .footer{
       /*width:480px;*/
       color:#ed0303;
       font-size: 14px;
       margin-left:60px;
       margin-top:30px;
       /*text-align:center;*/
     }
     .word{
      display: inline-block;
      width:90px;
      text-align:right;
     }
  .table th{
    color: #2EAB3B;
    background: #ECF8F5;
    border: none;
  }

  .listtop{
      width: 100%;
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 15px 10%;
  }
    .imglogo{
        background: url('../images/serchlogo.jpg') no-repeat center;
        background-size: 100% 100%;
        height: 300px;
        width:450px;
    }
  .fl{
      float: left;
  }
  .fr{
      float: right;
  }
</style>
<template>

  <div class="list_wrap">
      <headcontent ></headcontent>
      <div class="listtop clearfix">
          <div class="imglogo"></div>
          <div class="list_top">
              <ul class="one_wrap">
                  <li class=" oneList one">
                      <span class="word">文书编号：</span><input type="text" name="" v-model="writNum"  class="input_box" placeholder="请输入文书编号" v-on:blur="writChange">
                  </li>
                  <li class=" one">
                      <span class="word">身份证号：</span><input type="text" name="" v-model="idCarNum" class="input_box" placeholder="请输入身份证号" v-on:blur="carChange">
                  </li>
                  <li class=" oneList one">
                      <span class="word">手机号：</span><input type="text" name="" v-model="phoneNum"  class="input_box" placeholder="请输入手机号" v-on:blur="phoneChange">
                  </li>
                  <li class="">
                      <span class="word">验证码：</span><input type="text" name="" v-model="authCode" class="input_box" placeholder="请输入验证码" v-on:blur="authChange">
                  <span class=" yzm_wrap" @click="gainAuthCode">{{authValue}}</span>
                  </li>
              </ul>
              <div class="clearfix but_wrap">
                  <div class="inquire_but" style="margin-right:30px;" v-on:click="registerButton">
                      查询
                  </div>
                  <!--<div class="inquire_but left" v-on:click="resetButton">-->
                      <!--重置-->
                  <!--</div>-->
              </div>
              <div class="footer">
                  提示：以上信息需与生成责任认定书时填写的内容一致， 请您仔细核对
              </div>
          </div>
      </div>
      <footcontent ></footcontent>
  </div>
</template>
<script>
    import headcontent from '../components/headcontent'
    import footcontent from '../components/footcontent'
import axios from 'axios'
export default {
  data() {
      return{
        listStatus:false,
         listData:'',
         verifyStaus:false,
         phoneNumState:false,
         phoneNum:"",
         writStatus:false,
         writNum:"",
         idCarStatus:false,
         idCarNum:"",
         authValueState:true,
         authCodeState:false,
         authCode:"",
         countdown:60,//计时器
         authValue:"获取验证码",
      }
    },
  watch:{

  },
    created(){
    },
    mounted() {
    },
    methods: {
      //重置按钮
      resetButton(e){
        this.writStatus = false;
        this.writNum = '';
        this.idCarStatus = false;
        this.idCarNum = '';
        this.authCodeState = false;
        this.authCode = '';
        this.phoneNumState = false;
        this.phoneNum = '';
        this.listStatus = false;
        this.listData = [];
      },
        //注册按钮点击
        registerButton(e){
          if(!this.writStatus){
               this.$message({
                showClose: true,
                message: '请输入正确的文书编号',
                type: 'error'
              });
              return
           };
           if(!this.idCarStatus){
               this.$message({
                showClose: true,
                message: '请输入正确的身份证号',
                type: 'error'
              });
              return
           };
           if(!this.phoneNumState){
               this.$message({
                showClose: true,
                message: '请输入正确的手机号',
                type: 'error'
              });
              return
           };
           if(!this.authCodeState){
               this.$message({
                showClose: true,
                message: '请输入正确的验证码',
                type: 'error'
              });
              return
           };
           var paramData = {
              num:this.writNum,
              licenseNo:this.idCarNum,
              phone:this.phoneNum,
              code:this.authCode
            }
            this.$ajax.post(this.ajaxUrl+"/list",paramData)
             .then(response => {
               if(response.data.rescode == 200){
                  console.log(response.data,"list");
                   var list = JSON.stringify(response.data.list);
                   if(response.data.list.length > 0){
                       // this.listStatus = true;
                       localStorage.setItem('setDutyData',list);
                       this.$router.push({"path":'/dutytable'})
                   }else{
                       this.listStatus = false;
                       this.$message({
                           showClose: true,
                           message: '暂无数据！',
                           type: 'error'
                       });
                   };
                   this.listData = response.data.list;
                   localStorage.setItem('setDutyData',list);
               }else{
                  this.listStatus = false;
                   this.$message({
                    showClose: true,
                    message: '验证失败！',
                    type: 'error'
                  });
               }
             }, err => {
              this.listStatus = false;
               console.log(err);
             })
             .catch((error) => {
                this.listStatus = false;
             })
          
        },
        //短信验证码轮训
        settime(){
         var that = this;
         if (this.countdown == 0) { 
             this.authValueState = true;
             this.authValue="获取验证码"; 
             this.countdown = 60; 
             return;
         } else { 
             this.authValueState = false;   
             this.authValue="重新发送(" + this.countdown + ")"; 
             this.countdown--; 
         } 
         
         setTimeout(function() { 
             that.settime() }
             ,1000) 
        },
        //获取短信验证码
        gainAuthCode(){
         if(!this.writStatus){
               this.$message({
                showClose: true,
                message: '请输入正确的文书编号',
                type: 'error'
              });
              return
           };
           if(!this.idCarStatus){
               this.$message({
                showClose: true,
                message: '请输入正确的身份证号',
                type: 'error'
              });
              return
           };
           if(!this.phoneNumState){
               this.$message({
                showClose: true,
                message: '请输入正确的手机号',
                type: 'error'
              });
              return
           };
         if(this.authValueState){
            var paramData = {
              num:this.writNum,
              licenseNo:this.idCarNum,
              phone:this.phoneNum
            }
            console.log(paramData,"短信验证码数据")
            this.$ajax.post(this.ajaxUrl+"/getValidaCode",paramData)
             .then(response => {
               console.log(response,22222)
               if(response.data.rescode == 200){
                  this.settime();
                  this.verifyStaus = true;
               }else{
                this.verifyStaus = false;
                 //解决进入空白问题
                this.$confirm(response.data.resdes, '温馨提示', {
                             confirmButtonText: '确定',
                             showCancelButton:false,
                             customClass:"tska",
                             type: 'warning',
                             showClose:false,
                             center: true
                     }).then(() => {
                         //alert(222222)
                     }).catch(() => {
                     });
               }
             }, err => {
               console.log(err);
             })
             .catch((error) => {
                this.verifyStaus = false;
             })
         }
        },
        writChange(e){
           var writNum = $.trim(e.target.value);
           var r = /^[A-Za-z0-9]+$/;
          if (!r.test(writNum)) {
             this.$message({
                showClose: true,
                message: '请输入正确的文书编号',
                type: 'error'
              });
             this.writStatus = false;
             // this.writNum = '';
          }else{
             this.writStatus = true;
             this.writNum = writNum;
          }
        },
        carChange(e){
            var idCar = $.trim(e.target.value);
            var r =  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (!r.test(idCar)) {
              this.$message({
                showClose: true,
                 message: '请输入正确的身份证号',
                 type: 'error'              
               });
              this.idCarStatus = false;
              // this.idCarNum = '';
            }else{
              this.idCarStatus = true;
              this.idCarNum = idCar;
           }
        },
        //短信验证码
        authChange(e){
           var auth = $.trim(e.target.value);
           var r = /^\d{6}\b/;
          if (!r.test(auth)) {
             this.$message({
                showClose: true,
                message: '请输入正确的验证码',
                type: 'error'
              });
             this.authCodeState = false;
             // this.authCode = '';
          }else{
             this.authCodeState = true;
             this.authCode = auth;
          }
        },
        phoneChange(e){
           var phone = $.trim(e.target.value);
           var r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
           if (!r.test(phone)) {
             this.$message({
                showClose: true,
                message: '请输入正确的手机号',
                type: 'error'              
              });
             this.phoneNumState = false;
             // this.phoneNum = '';
           }else{
             this.phoneNumState = true;
             this.phoneNum = phone;
          }
        },
     
        },
    components: {
          headcontent,
          footcontent
      },
    }
</script>
