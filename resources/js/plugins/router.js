import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template:'<div>Home</div>'}
const Contant = {template:'<div>Contant</div>'}
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
            path:'/contact',
            component:Contant
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/contest',
            component:Contest
        },
    ]
})
