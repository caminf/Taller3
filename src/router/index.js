// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import DetailedView from '../views/DetailedView'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/detailedview',
      name: 'detailedview',
      component: DetailedView
    },
  ]
})


export default router
