
import Vue from 'vue'
// Импортируем главный файл приложения
import App from './App.vue'

// Импортируем Bootstrap для Vue
import BootstrapVue from 'bootstrap-vue'

//Импортируем Роутер и локальное хранилище
import router from './router'
import { store } from './store'

// Хлебные крошки
import Breadcrumb from "./components/Common/Breadcrumb";

import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scroll-to'

//require('./bootstrap');

window.Vue = Vue;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


Vue.use(BootstrapVue);
Vue.use(VueScrollTo);

Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);
Vue.component('piaf-breadcrumb', Breadcrumb);

Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
