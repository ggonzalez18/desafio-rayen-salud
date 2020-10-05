import Vue from 'vue'
import VueRouter from 'vue-router'
import Tutoriales from '../views/Tutoriales.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tutoriales',
    component: Tutoriales
  },
  {
    path: '/agregar',
    name: 'Agregar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Agregar" */ '../views/Agregar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
