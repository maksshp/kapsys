import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{layout:'empty'}
  },
  {
    path: '/adminpanel',
    name: 'AdminPanel',
    component: ()=>import('../views/AdminPanel'),
    meta:{layout:'main'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
