<template>
    <section class="options">
        <p class="list" v-for="(v,i) in dataList" @click="next(i)">
            <span class="option_style" :class="i==choosedNum?'has_choosed':''">{{i | sort}}</span>A.选项一
        </p>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data(){
            return {
                dataList:[
                    "选项一",
                    "选项二",
                    "选项三",
                    "选项四",
                    "选项五",
                    "选项六",
                    "选项一",
                    "选项二",
                    "选项三",
                    "选项四",
                    "选项五",
                    "选项六",
                ],
                itemId: null, //题目ID
                choosedNum: null, //选中答案索引
                choosedId:25   //选中答案id
            }
        },
        methods:{
            next(i){
                this.choosedNum = i;
                this.addNum(this.choosedId);
                console.log('点击切换下一个')

            },
            ...mapActions(['addNum'])
        },
        filters:{
            sort(i){
                return String.fromCharCode(i+65);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    /*@import 'scss/pages/answer/options';*/
    .options{
        height:auto;
        margin-top:1rem;
        .list{
            background:#dddddd;
            height:1rem;
            line-height: 1rem;
            padding-left:0.2rem;
            margin-bottom:0.5rem;
            .option_style{
                display: inline-block;
                font-size: .3rem;
                color: #fff;
                vertical-align: middle;
                width: .5rem;
                height: .5rem;
                line-height: .5rem;
                border: 1px solid #fff;
                border-radius: 50%;
                line-height: .5rem;
                text-align: center;
                margin-right: .3rem;
                font-size: .3rem;
                font-family: Arial;
            }
            .has_choosed {
                background-color: #ffd400;
                color: #575757;
                border-color: #ffd400;
            }
        }
    }
</style>