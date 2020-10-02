import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Catalog from "../components/Catalog";
import Category from "../components/Category";
import Basket from "../components/Basket";
const About = {template:'<div>About</div>'}
const Contest = {template:'<div>Contest</div>'}

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:()=>import('../components/Home')
        },
        {
            path:'/category',
            component:Catalog
        },
        {
            path:'/category/:category',
            component:Category
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/contest',
            component:Contest
        },
        {
            path:'/basket',
            component:Basket
        },
    ]
})
