import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/components/HelloWorld'
import VModel from '@/components/Vmodel.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/input',
    component: VModel
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router