import Vue from 'vue';
import Vuex from 'vuex';
import product from "./vuexmodule/product";
import basket from "./vuexmodule/basket";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        product,
        basket
    }
})
