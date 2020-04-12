<template>
    <div id="content">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="标题">
                <el-input v-model="formLabelAlign.title"></el-input>
            </el-form-item>
             <el-form-item label="类型">
                <el-select v-model="formLabelAlign.type" placeholder="请选类型">
                <el-option label="javascript" value="javascript"></el-option>
                <el-option label="vue" value="vue"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="内容">
                    <mavon-editor 
                        v-model="content" 
                        ref="md" 
                        @change="change" 
                        style="min-height: 600px"
                    />
            </el-form-item>
             <el-form-item size="large" class="operator-box">
                <el-button type="primary" @click="onSubmit">发布</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "artical",
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    title: '',
                    type: ''
                },
                content: ""
            }
        },
        methods: {
            change(value, html) {
                console.log(html);
                console.log("==========");
                console.log(this.content);
            },
            onSubmit() {

            }
        },
        components: {
            mavonEditor,
        }
    }
</script>
<style>
    #content .el-input__inner {
        height: 60px;   
        width: 500px;
    }
    #content .el-form-item__label {
        width: 120px!important;
    }
    #content .el-input {
        width: 50%;
    }
    #content .el-input__suffix {
        right: -240px;
    }
    #content .el-form-item {
        margin-bottom: 42px;
    }
    #content .el-form-item__label {
        margin-right: 40px;
        margin-top: 8px;
    }
    #content .operator-box {
        text-align: center;
    }
    #content .el-button--primary {
        margin-right: 20px;
    }
    #content .el-button--primary, #content .el-button+.el-button {
        width: 200px;
        height: 70px;
    }
</style>