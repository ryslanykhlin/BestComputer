import Vue from 'vue';
import Vuex from 'vuex';
import product from "./vuexmodule/product";
import basket from "./vuexmodule/basket";
import auth from "./vuexmodule/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        product,
        basket,
        auth
    }
})
