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
          component: () => import('@/views/DashboardView.vue')
        },
        {
          path: "/heroes",
          name: "heroes",
          component: () => import('@/views/HeroesView.vue')
        },
        {
          "path": "/heroes/:id",
          "name": "hero-details",
          component: () => import('@/views/HeroDetailsView.vue')
        },
        {
          "path": "/heroes/add",
          "name": "hero-add",
          component: () => import('@/views/HeroesAddView.vue')
        },
        {
          "path": "login",
          "name": "login",
          component: () => import('@/views/LoginView.vue')
        }
      ]
    }
  ]
})

export default router
