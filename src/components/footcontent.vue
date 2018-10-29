<style scoped>
.foot{
    background: #fff;
   margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    left: 0;
    right:0;
}
.foottext{
    color: #bbb;
    font-size: 13px;
}
    .footicon{
        margin-right: 20px;
    }
</style>
<template>
    <div class="foot">
        <div class="footicon">
            <img src="../images/footicon.jpg">
        </div>
        <div>
            <p class="foottext">版权所有：北京市公安局公安交通管理局 京ICP备08006306号
            </p>
            <p class="foottext">
                京公网安备 110102001220 地址：北京市西城区阜成门北大街1号 邮编：100037
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footcontent"
    }
</script>

