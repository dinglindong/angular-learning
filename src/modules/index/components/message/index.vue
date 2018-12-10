<template>
    <section class="message">
        我是 【消息】 页面
        <publicFooter />
        <p>消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息</p>
        <p>33333333333333333</p>
    </section>
</template>

<script>
    /**
     * @author Lnden
     * @date 2018/12/10
     * @desc 组件描述
     * @module 组件引用位置
     *      1.
     * @param {Object} [title]  - 参数说明
     * @example 调用示例
     * <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
     */
    import publicFooter from '../publicFooter'
    export default {
        name: "index",
        components:{
            publicFooter
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>