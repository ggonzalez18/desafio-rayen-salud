import Vue from 'vue'
import VueRouter from 'vue-router'
import Tutoriales from '../views/Tutoriales.vue'
import Modificar from '../views/Modificar.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Tutoriales',
        component: Tutoriales
    },
    {
        path: '/agregar',
        name: 'Agregar',
        component: () =>
            import ( /* webpackChunkName: "Agregar" */ '../views/Agregar.vue')
    },
    {
        path: 'modificar',
        name: 'Modificar',
        component: Modificar
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router