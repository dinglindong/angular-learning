<template>
    <section class="container">
        <h3 class="title">恭喜你完成全部题目</h3>
        <p class="description">以下是您的答题详情</p>
        <p class="list" v-for="(item,index) in answerArr" :key="index"><span>{{index+1}}.{{item.title}}</span><span>查看题目</span></p>
    </section>
</template>

<script>
    import { mapActions,mapState } from 'vuex';
    export default{
        data(){
            return {

            }
        },
        computed:mapState([
            'itemNum',    //第几题
            'level',      //第几周
            'itemDetail', //题目详情
            'timer',      //计时器
            'answerArr',
        ]),
        methods:{

        },
        mounted(){
            console.log(this.$store.state.answerArr)
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import 'scss/pages/answer/result.scss';
</style>