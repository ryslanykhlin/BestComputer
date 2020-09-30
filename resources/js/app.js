require('./bootstrap');

window.Vue = require('vue');

import Container from './Container';
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";

const app = new Vue({
    render:h=>h(Container),
    vuetify,
    router
}).$mount('#app');
