import { authenticationGuard } from '@/guards/authentication.guard'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/DashboardView.vue')
        },
        {
          path: "/heroes",
          name: "heroes",
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/HeroesView.vue')
        },
        {
          "path": "/heroes/:id",
          "name": "hero-details",
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/HeroDetailsView.vue')
        },
        {
          "path": "/heroes/add",
          "name": "hero-add",
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/HeroesAddView.vue')
        },
        {
          "path": "login",
          "name": "login",
          component: () => import('@/views/LoginView.vue')
        },
      ]
    },
    {
      "path": "/test",
      "name": "test",
      component: () => import('@/views/TestView.vue')
    }
  ]
})

export default router
