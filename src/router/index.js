import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/components/HelloWorld'
import VModel from '@/components/Vmodel.vue'
import Demo2 from '../components/Demo2_EventMethod.vue'
import Demo3 from '../components/Demo3_Data.vue'
import Demo4 from '../components/Demo4_Binding.vue'
import Demo5 from '../components/Demo5_Form.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/input',
    component: VModel
}, {
    path: "/demo2",
    component: Demo2
}, {
    path: "/demo3",
    component: Demo3
}, {
    path: "/demo4",
    component: Demo4
}, {
    path: "/demo5",
    component: Demo5
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router