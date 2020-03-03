import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/app/index'
//import VesselMap from "../views/app/Dislocation/VesselMap";

Vue.use(VueRouter)

const router = new VueRouter({
    linkActiveClass: 'active',
    //history: true,
    mode: 'history',
    scrollBehavior() {
        return {x:0, y:0}
    },
    routes: [
        {
            path: '/',
            //redirect: '/views',
            component: () => import('../views/app/main'),
            //name: 'Главная',
            children: [
                {
                    path: '/',
                    component: () => import('../views/app/main'),
                    name: 'Главная',
                }
            ]
        },
        {
           path: 'app/Dislocation',
            component: () => import('../views/app/Dislocation'),
            redirect: '/app/Dislocation/VesselMap',
            children: [
                {
                    path: 'VesselMap',
                    component: () => import('../views/app/Dislocation/VesselMap'),
                    name: 'Карта судов ВП'
                }
            ]


        }
    ]
});
export default router
