require('./bootstrap');

window.Vue = require('vue');

import Container from './Container';
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
import vuex from "./plugins/vuex";

const app = new Vue({
    render:h=>h(Container),
    vuetify,
    router,
    store:vuex
}).$mount('#app');
