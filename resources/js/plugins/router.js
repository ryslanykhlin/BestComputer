import Vue from 'vue'
import VueRouter from 'vue-router'
import vuex from './vuex'

Vue.use(VueRouter)

import Catalog from "../components/Catalog";
import Category from "../components/Category";
import Basket from "../components/Basket";
import Auth from "../components/Auth";
import Admin from "../components/Admin";
const About = { template: '<div>About</div>' }
const Contest = { template: '<div>Contest</div>' }

const router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../components/Home')
        },
        {
            path: '/category',
            component: Catalog
        },
        {
            path: '/category/:category',
            component: Category
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contest',
            component: Contest
        },
        {
            path: '/basket',
            component: Basket
        },
        {
            path: '/auth',
            component: Auth
        },
        {
            path: '/admin',
            component: Admin,
            meta:{isAdmin:true}
        },
    ]
})


router.beforeEach((to,from,next) => {
    if(!vuex.getters.getIsAdmin && to.matched.some(record => record.meta.isAdmin)){
        next('/')
    } 
    else{
        next()
    }
});

export default router