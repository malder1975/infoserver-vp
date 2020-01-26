import Vue from 'vue'
import VueRouter from 'vue-router'

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
            name: 'Главная'
        }
    ]
});
export default router
