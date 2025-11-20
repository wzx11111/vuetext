import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import New from '../views/new.vue'
import Geleizujian from '../views/geleizujian.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new',
    name: 'New',
    component: New,
  },
  {
    path: '/geleizujian',
    name: 'Geleizujian',
    component: Geleizujian,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
