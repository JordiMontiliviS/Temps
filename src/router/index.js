import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TempsGirona from '../views/TempsGirona.vue'
import TempsBarcelona from '../views/TempsBarcelona.vue'
import TempsMadrid from '../views/TempsMadrid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/girona',
      name: 'tempsgirona',
      component: TempsGirona
    },
    {
      path: '/barcelona',
      name: 'tempsbarcelona',
      component: TempsBarcelona
    },
    {
      path: '/madrid',
      name: 'tempsmadrid',
      component: TempsMadrid
    },
  ]
})

export default router
