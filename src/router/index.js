import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import New from '../views/new.vue'


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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
