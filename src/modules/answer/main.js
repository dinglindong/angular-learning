/**
 * Create By DingLindong on 2018/4/19
 */
import Vue from 'vue'
import App from './App.vue'

import store from './store/store'

import Router from 'vue-router';
import routes from "./router/router.config";

import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.use(Router);
const router  = new Router(routes);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');