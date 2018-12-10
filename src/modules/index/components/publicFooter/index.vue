<template>
    <section class="public-footer">
        <ul>
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/discover">发现</router-link></li>
            <li><router-link to="/message">消息</router-link></li>
            <li><router-link to="/personal">我的</router-link></li>
        </ul>
    </section>
</template>

<script>
    /**
     * @author Lnden
     * @desc 组件描述
     * @module 组件引用位置
     *      1.
     * @param {Object} [title]  - 参数说明
     * @example 调用示例
     * <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
     */

    export default {
        name: "index"
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>