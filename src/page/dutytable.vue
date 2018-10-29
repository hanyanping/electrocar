<style scoped>
    .list_wrap{
        width:100%;
        height:100vh;
        background-color: #f8f8f8;
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
    .list_content{
        background-color: #fff;
        margin:0 auto;
        height:500px;
        overflow: hidden;
    }
    .one_wrap{
        position:relative;
        margin-left:260px;
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
    .left{
        float:left;
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
        width:300px;
        margin-left:350px;
        margin-top:30px;
        /*margin:30px auto 0px ;*/
    }
    .footer{
        width:480px;
        color:#ed0303;
        font-size: 14px;
        margin-left:261px;
        margin-top:30px;
        /*text-align:center;*/
    }
    .word{
        display: inline-block;
        width:90px;
        text-align:right;
    }
    .table_wrap{
        width:700px;
        max-height: 340px;
        overflow: scroll;
        margin:40px auto 0px;
    }
    .table th{
        color: #2EAB3B;
        background: #ECF8F5;
        border: none;
    }
    .tWord{
        font-size: 30px;
        text-align: center;
        line-height: 300px;
        color:#b6b6b6;
    }
    .xzBut{
        width:60px;
        height:30px;
        margin:10px;
        line-height: 30px;
        display: inline-block;
        text-align: center;
        border-radius:4px;
        color:#fff;
        background-color: #096fd4;
    }
    .blue{
        color:#096fd4;
    }
    .red{
        color:#f20011;
    }
    .listtop{
        width: 100%;
        display: flex;
        /*justify-content: space-between;*/
        background: #fff;
        padding: 15px 6%;
    }
    .imglogo{
        background: url('../images/serchlogo.jpg') no-repeat center;
        background-size: cover;
        height: 300px;
        width:470px;
    }
</style>
<template>

    <div class="list_wrap">
        <headcontent ></headcontent>
        <div class="list_content">
            <div v-if="!listStatus" class="tWord">
                暂无数据
            </div>
            <div class="table_wrap" v-if="listStatus">

                <table class="table" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #bbb;">
                    <thead>
                    <tr>
                        <th style="width:18%; border-left:1px solid #bbb;">
                            序号
                        </th>
                        <th  style="width:18%;">
                            生成时间
                        </th>
                        <th  style="width:18%;margin:0px 6px;">
                            文书编号
                        </th>
                        <th  style="width:18%;margin:0px 6px;">
                            身份证号
                        </th>
                        <th  style="width:18%;">
                            状态
                        </th>
                        <th  style="width:18%;">
                            操作
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in listData">
                        <td>{{index+1}}</td>
                        <td>{{fmtDate(item.createTime)}}</td>
                        <td style="padding:0px 10px;">{{item.num}}</td>
                        <td style="padding:0px 10px;">{{item.licenseNo}}</td>
                        <td>
                            <span class="blue" v-if="item.type">有效</span>
                            <span class="red" v-if="!item.type">作废</span>
                        </td>
                        <td>
                            <span class="xzBut" @click="goUrl($event,item.url)">下载</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
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
            this.listStatus = true;
           this.listData = JSON.parse(localStorage.getItem('setDutyData'));
           console.log(this.listData)
        },
        mounted() {
        },
        methods: {
            goUrl(e,url){
                // window.location.href = url;
                window.open(url);
            },
            fmtDate(obj){
                var date =  new Date(obj);
                var y = 1900+date.getYear();
                var m = "0"+(date.getMonth()+1);
                var d = "0"+date.getDate();
                return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
            },
        },
        components: {
            headcontent,
            footcontent
        },
    }
</script>
