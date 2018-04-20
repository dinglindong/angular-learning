/**
 * Create By DingLindong on 2018/4/19
 */
import Template from '../components/Template.vue'
import Result from '../components/Result.vue'

export default {
    mode: 'history',
    routes:[
        {
            path: '*',
            component: Template
        },
        {
            path: '/result',
            component: Result
        }
    ]
}