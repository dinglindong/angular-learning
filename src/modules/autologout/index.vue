<template>
    <section class="index">
        
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
            const TIMEOUT = 10 * 60 * 1000  // 设置超时事件 10分
            document.addEventListener('mouseover',(ev)=>{
                lastTime = new Date().getTime()
            })
            function testTime(){
                currentTime = new Date().getTime()
                if(currentTime - lastTime > TIMEOUT){
                    console.log('超时')
                }
            }
            window.setInterval(testTime, 1000);
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>