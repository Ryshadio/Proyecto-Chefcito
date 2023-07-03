import { createRouter, createWebHistory } from 'vue-router'
import HomeSignout from "../views/HomeSignout.vue"
import HomeView from "../views/HomeView.vue"
import videoview from "../views/videoview.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeSignout
  },
  {
    path: '/menu',
    name: 'menu',
    component: HomeView
  },
  { 
    path: '/otra', 
    name: 'videoview',
    component: videoview
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
