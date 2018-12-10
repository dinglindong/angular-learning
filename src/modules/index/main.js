import Vue from 'vue';
import App from './App';
// import AppCopy from './AppCopy';

import router from './router'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});