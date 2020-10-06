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
    component: () => import(/* webpackChunkName: "Agregar" */ '../views/Agregar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
