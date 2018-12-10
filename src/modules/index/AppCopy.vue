<template>
    <section class="app-copy">
        <ul>
            <li><router-link to="/">首页1</router-link></li>
            <li><router-link to="/discover">发现2</router-link></li>
            <li><router-link to="/message">消息3</router-link></li>
            <li><router-link to="/personal">我的4</router-link></li>
        </ul>
        <transition :name="run" mode="out-in">
            <router-view />
        </transition>
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

    export default {
        name: "AppCopy",
        data(){
            return {
                run: "left"
            }
        },
        watch: {
            $route(to, from) {
                if (to.meta.index > from.meta.index) {
                    this.run = "right";
                } else {
                    this.run = "left";
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-copy{
        font-size:.6rem;
        .left-enter {
            transform: translateX(100%);
        }
        .left-enter-to {
            transform: translateX(0);
        }
        .left-enter-active {
            transition: 0.2s;
        }
        .left-leave {
            transform: translateX(0);
        }
        .left-leave-to {
            transform: translateX(-100%);
        }
        .left-leave-active {
            transition: 0.2s;
        }

        .right-enter {
            transform: translateX(-100%);
        }
        .right-enter-to {
            transform: translateX(0);
        }
        .right-enter-active {
            transition: 0.2s;
        }
        .right-leave {
            transform: translateX(0);
        }
        .right-leave-to {
            transform: translateX(100%);
        }
        .right-leave-active {
            transition: 0.2s;
        }
    }
</style>