import Vue from "vue";
import VueRouter from 'vue-router'

const Main = () => import('../views/Main')
const Home = () => import('../views/home/Home')
const User = () => import('../views/user/User')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/user',
                name: 'user',
                component: User
            }
        ],
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router