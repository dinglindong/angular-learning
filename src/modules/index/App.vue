<template>
    <section class="al-mainInner">
        <transition :name="transitionName">
            <router-view class="Router"></router-view>
        </transition>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                transitionName:''
            }
        },
        watch:{
            '$route' (to, from) {
                console.log(to)
                if(to.path!='/'){
                    let isBack = this.$router.isBack;
                    if(isBack) {
                        this.transitionName = 'slide-right'
                    } else {
                        this.transitionName = 'slide-left'
                    }
                    this.$router.isBack = false
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .al-mainInner{
        font-size:.6rem;
        .Router {
            position: absolute;
            width: 100%;
            transition: all .8s ease;
            top: 40px;
        }

        .slide-left-enter,
        .slide-right-leave-active {
            opacity: 0;
            -webkit-transform: translate(100%, 0);
            transform: translate(100%, 0);
        }

        .slide-left-leave-active,
        .slide-right-enter {
            opacity: 0;
            -webkit-transform: translate(-100%, 0);
            transform: translate(-100% 0);
        }
    }
</style>