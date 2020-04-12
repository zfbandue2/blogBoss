<template>
    <div id="content">
        <div class="login-box">
            <div class="title">闲言博客后台管理系统</div>
            <div class="login">
                <p class="login-title">用户登录</p>
                <el-input placeholder="请输入用户名" class="user-name"></el-input>
                <el-input placeholder="请输如密码" class="user-name" show-password></el-input>
                <el-button type="primary" class="login-btn">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            
        }
    }    
}
</script>
<style>
    @import "../components/common/global.css";
    .user-name input {
        height: 60px;
        border: 1px solid #9eacf2;
        background-color: #e8f2fe;
        margin-bottom: 35px;
    }
    .login-btn.el-button--primary {
        display: block;
        width: 100%;
        height: 60px;
        background: #9eacf2;
        border: none;
    }
</style>
<style scoped>
    #content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(../../assets/images/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        text-align: center;
        color: #fff;
        font-size: 60px;
    }
    .login-box {
        width: 672px;
        height: 646px;
        position: absolute;
        left:50%;
        top:50%;
        margin-top: -323px;
        margin-left: -336px;
    }
    .login {
        width: 444px;
        height: 430px;
        margin: auto;
        background: #e8f3fe;
        margin-top: 60px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px #444;
        padding: 40px;
    }
    .login-title {
        text-align: center;
        margin-top: 40px;
        font-size: 30px;
        color: #9eacf2;
    }
</style>