import { createRouter, createWebHistory } from 'vue-router';

// TYPE
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/Login.vue'),
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: () => import('@/view/Register.vue'),
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('@/view/Game.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
