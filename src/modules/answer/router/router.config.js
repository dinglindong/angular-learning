/**
 * Create By DingLindong on 2018/4/19
 */
import Template from '../components/Result.vue'
import App from '../App'

export default {
    routes:[
        {
            path: '/',
            component: App
            // children: [{
            //     path: '',
            //     component: r => require.ensure([], () => r(require('../page/home')), 'home')
            // }, {
            //     path: '/item',
            //     component: r => require.ensure([], () => r(require('../page/item')), 'item')
            // }, {
            //     path: '/score',
            //     component: r => require.ensure([], () => r(require('../page/score')), 'score')
            // }]
        }
    ]
}