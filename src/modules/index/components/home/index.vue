<template>
    <section class="home">
        我是 【主页】 页面
        <publicFooter />
        <p>主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页</p>
        <p>11111111111111111</p>
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