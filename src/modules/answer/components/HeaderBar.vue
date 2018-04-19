<template>
    <header class="header">
        <figure class="al-indexHeaderItem left" v-if="!isFirst">
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
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data(){
            return {
                isFirst:true
            }
        },
        computed:mapState([
            'itemNum', //第几题
            'level', //第几周
            'itemDetail', //题目详情
            'timer', //计时器
        ]),
        mounted(){
            console.log(this.$store.state);
            this.$store.state.itemNum = 1;
        },
        methods:{
            back(){
                if(document.referrer){
                    window.history.back();
                }else{
                    //g_sps.jump(null,'/');
                }
            }
        },
        watch:{
            itemNum(){
                if(this.itemNum>1){
                    this.isFirst = false;
                }else{
                    this.isFirst = true;
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    /*@import 'scss/pages/answer/header';*/
    .header{
        height:1.5rem;
        line-height: 1.5rem;
        .al-indexHeaderItem{
            width:45%;
            a{
                display: block;
                color:#666;
                height: 100%;
                img{
                    vertical-align: middle;
                }
            }
        }
        .left{
            float:left;
            text-align: left;
            img{
                margin-left: -.25rem;
            }
        }
        .right{
            float:right;
            text-align: right;
        }
    }
</style>