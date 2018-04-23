/**
 * Create By DingLindong on 2018/4/23
 */
import Vue from 'vue'
import App from './App.vue'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
    render: h => h(App)
}).$mount('#app');