<style scoped>
.head{
    width:100%;
    /*height: 80px;*/
    background: #fff;
    padding: 0 10%;
    text-align: center;
    line-height: 70px;
    border-bottom: 25px solid rgba(34, 93, 227, 1);
}
.imgicon{
    display: inline-block;
    vertical-align: middle;
}
.clearfix:after{
    content:".";/*加一段内容*/
    display:block;/*让生成的元素以块级元素显示，占满剩余空间*/
    height:0;/*避免生成的内容破坏原有布局高度*/
    clear:both;/*清除浮动*/
    visibility:hidden;/*让生成的内容不可见*/
}
.clearfix{zoom:1;/*为IE6，7的兼容性设置*/}
    .fl{
        float: left;
    }
.fr{
    float: right;
}
    .text{
        color: #232323;
        font-size: 18px;
    }
</style>
<template>
    <div class="head clearfix">
        <div class="fl">
            <img class='imgicon' src="../images/headimg.jpg">
        </div>
        <span class="text">交通事故责任认定书查询
        </span>
        <div class="fr">
            <img class='imgicon' src="../images/shoudu.jpg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "headcontent"
    }
</script>

