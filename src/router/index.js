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
import Demo7 from '../components/Demo7_Slot.vue'
import Demo8 from '../components/Demo8_Condition.vue'
import Demo9 from '../components/Demo9_Loop.vue'
import Demo12 from '../components/Demo12_Ref.vue'
import Demo13 from '../components/Demo13_Filter.vue'

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
}, {
    path: "/demo7",
    component: Demo7
}, {
    path: "/demo8",
    component: Demo8
}, {
    path: '/demo9',
    component: Demo9
}, {
    path: '/demo12',
    component: Demo12
},{
    path: '/demo13',
    component: Demo13
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router