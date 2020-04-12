<template>
    <div>
        <div style="overflow:hidden">
            <el-input placeholder="请输入关键词"  class="search-input">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" class="search-btn">搜索</el-button>
            <el-button type="primary" plain class="create-btn">创建</el-button>
        </div>
        <div class="data-content">
            <el-table :data="tableData" height="auto" border   style="width: 100%">
                <el-table-column
                    prop="title"
                    label="标题"
                    >
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="发布时间"
                    >
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="类型"
                    >
                </el-table-column>
                <el-table-column
                    prop="operator"
                    label="操作"
                    >
                </el-table-column>
            </el-table>
        </div>
        <div class="page-box">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                title: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎',
                title: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                title: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                title: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-08',
                name: '王小虎',
                title: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-06',
                name: '王小虎',
                title: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                title: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    }
}
</script>
<style>
    .search-input {
        width: 500px;
    }
    .search-input input {
        height: 70px;
    }
    .search-btn {
        height: 65px;
        width: 150px;
        position: relative;
        left: 15px;
        top: -1px;
    }
    .create-btn {
        float:right;
        height: 65px;
        width: 150px;
    }
    .data-content {
        margin-top: 25px;
    }
    .el-table--enable-row-transition .el-table__body td {
        padding: 20px;
    }
    .el-table td, .el-table th.is-leaf {
        padding: 20px;
    }
    .page-box {
        text-align: center;
        margin-top: 50px;
    }
    .el-pager li {
        height: 48px;
        line-height: 48px;
        width: 100px;
    }
    .el-pagination button {
        height :48px;
    }
    .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
        line-height: 48px;
    }
</style>