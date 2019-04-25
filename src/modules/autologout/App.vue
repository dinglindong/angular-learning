<template>
    <section class="index">
        测试 1 分钟无任何操作自动退出系统
    </section>
</template>

<script>
    /**
     * @author You name (*必填)
     * @date 2019/4/25
     * @desc 组件描述
     * @param {Object} [title]  - 参数说明
     */

    export default {
        name: "index",
        mounted(){
            let lastTime = new Date().getTime()
            let currentTime = new Date().getTime()
            const TIMEOUT = 1 * 60 * 1000  // 设置超时事件 10分
            document.addEventListener('mouseover',(ev)=>{
                lastTime = new Date().getTime()
            })
            function testTime(){
                currentTime = new Date().getTime()
                if(currentTime - lastTime > TIMEOUT){
                    alert('已经超过一分钟，自动退出系统')
                    clearInterval(clear)
                }
            }
            let clear = window.setInterval(testTime, 1000);
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .index{
        margin:200px auto;
        height:200px;
        width:200px;
    }
</style>