<template>
    <div id="top">
        闲言个人博客
        <div class="login-box">欢迎：流浪小黄人</div>
    </div>
</template>
<script>
export default {
    name: "top-nav",
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    #top {
        height: 88px;
        background-image:url(../../../assets/images/top.png);
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 1px 1px 1px #101010;
        line-height: 88px;
        color: #fff;
        padding-left: 40px;
        font-size: 30px;
    }
    .login-box {
        float:right;
        margin-right: 20px;
        font-size: 15px;
    }
</style>