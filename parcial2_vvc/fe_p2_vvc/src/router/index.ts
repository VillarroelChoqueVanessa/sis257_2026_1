import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/niveles_academicos',
      name: 'niveles_academicos',
      component: () => import('../views/NivelAcademicoView.vue'),
    },
    {
      path: '/programas',
      name: 'programas',
      component: () => import('../views/ProgramaView.vue'),
    },
  ],
})

export default router
