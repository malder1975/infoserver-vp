import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index'

Vue.use(VueRouter)

const router = new VueRouter({
    history: true,
    mode: 'history',
    scrollBehavior() {
        return {x:0, y:0}
    },
    routes: [
        {
            path: '/',
            //redirect: '/views',
            component: Index,
            name: 'Главная'
        }
    ]
});
export default router
