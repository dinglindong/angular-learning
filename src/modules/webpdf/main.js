/**
 * @author Lnden
 * @date 2018/12/5
 * @desc 组件描述
 * @param 组件引用位置
 */

import Vue from 'vue';
import App from './App';
import htmlToPdf from '@/modules/webpdf/utils/htmlToPdf'
// import htmlToPdf from '@/modules/webpdf/utils/perfect'
Vue.use(htmlToPdf);

new Vue({
    render: h =>h(App)
}).$mount('#app');