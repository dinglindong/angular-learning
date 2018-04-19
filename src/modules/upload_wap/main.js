import Vue from 'vue';
import App from './App';
import "scss/base.scss";
import "scss/pages/index.scss";
// import 'static/js/third-party/flexible.js'
import 'static/js/third-party/mobile-util.js'
import 'static/js/third-party/rem.js'

new Vue({
    el: '#app',
    render: h => h(App)
});