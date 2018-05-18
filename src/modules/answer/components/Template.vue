<template>
    <section>
        <header class="header">
            <figure class="al-indexHeaderItem left" v-show="!isFirst">
                <a href="javascript:void(0)" class="ev_backBtn" @click="back">
                    <img  src="/static/images/arrow_back.png" alt="">上一题
                </a>
            </figure>
            <figure class="al-indexHeaderItem right">
                <a href="javascript:void(0)" class="num_tip">
                    第{{itemNum}}/10题
                </a>
            </figure>
        </header>

        <section class="banner">
            <p class="message">{{itemDetail[itemNum-1].active_title}}</p>
            <img class="imgs" :src="itemDetail[itemNum-1].active_img" alt="">
        </section>

        <section class="options">
            <p class="list" v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="next(index, item)" :key="index">
                <span class="option_style" :class="{'has_choosed':choosedNum==index}">{{index | sort}}</span>{{item.answer_name}}
            </p>
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data(){
            return {
                isFirst:true,
                itemId: null,       //题目ID
                choosedNum: null,   //选中答案索引
                choosedId:null,     //选中答案id
                choosedMsg:null     //选中答案的详情
            }
        },
        computed:mapState([
            'itemNum', //第几题
            'level', //第几周
            'itemDetail', //题目详情
            'timer', //计时器
            'answerArr'
        ]),
        created(){
            //this.initializeData(res);
        },
        methods:{
            back() {
                this.choosedNum = this.answerArr[this.answerArr.length-1].index;
                this.reduce();
            },
            next(index,item){
                let that = this;
                item.index = index;
                if(that.itemNum === that.itemDetail.length){
                    that.choosedNum = index;
                    that.choosedId = item.topic_answer_id;
                    setTimeout(function(){
                        that.choosedNum = null;     //进入下一题索引置空，无展示
                        that.$router.push('result');
                        that.addNum(item);
                    },500);
                }else{
                    that.choosedNum = index;         //判断用户点击的索引用于展示相应的样式
                    that.choosedId = item.topic_answer_id;
                    setTimeout(function(){
                        that.choosedNum = null;     //进入下一题索引置空，无展示
                        that.addNum(item);
                    },500);
                }
            },
            ...mapActions(['initializeData','addNum','reduce'])
        },
        watch:{
            itemNum(){
                if(this.itemNum>1){
                    this.isFirst = false;
                }else{
                    this.isFirst = true;
                }
            }
        },
        filters:{
            sort(i){
                return String.fromCharCode(i+65);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import 'static/scss/pages/answer/template.scss';
</style>