<template>
    <section class="banner">
        <p class="message">请选择：图中XXX是几级股性关节炎？</p>
        <img class="imgs" :src="imgList" alt="">
    </section>
</template>

<script>
    export default {
        data(){
            return {
                imgList: "/static/images/1-1.jpg"
            }
        },
        mounted(){

        },
        watch:{
            $route(){
                console.log('路由已经更改了，准备切换对应的图 || 准备请求对应的数据~')
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    /*@import 'scss/pages/answer/banner';*/
    .banner{
        .message{
            font-size:.5rem;
            margin-bottom:0.3rem;
        }
        .imgs{
            width:100%;
            height:5rem;
        }
    }
</style>