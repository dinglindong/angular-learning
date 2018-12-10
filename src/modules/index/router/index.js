/**
 * @author Lnden
 * @date 2018/12/10
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.goBack = function () {
    this.isBack = true;
    window.history.go(-1)
};

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            component: ()=>import('../components/home'),
            meta:{
                index:1
            }
        },
        {
            path: '/discover',
            component: ()=>import('../components/discover'),
            meta:{
                index:2
            }
        },
        {
            path: '/message',
            component: ()=>import('../components/message'),
            meta:{
                index:3
            }
        },
        {
            path: '/personal',
            component: ()=>import('../components/personal'),
            meta:{
                index:4
            }
        }
    ]
})