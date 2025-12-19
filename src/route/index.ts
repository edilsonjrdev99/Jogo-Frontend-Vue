import { createRouter, createWebHistory } from 'vue-router';

// TYPE
import type { RouteRecordRaw } from 'vue-router';

// STORE
import { useAuthStore } from '@/stores/auth/authStore';

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
    meta: { requiresUnauthenticated: true }
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: () => import('@/view/Register.vue'),
    meta: { requiresUnauthenticated: true }
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('@/view/Game.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'game.home',
        component: () => import('@/components/game/home/GameHome.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();

  // Aguarda a verificação inicial se ainda estiver checando
  if (authStore.isChecking) {
    const unwatch = authStore.$subscribe(() => {
      if (!authStore.isChecking) {
        unwatch();
        processNavigation();
      }
    });
  } else {
    processNavigation();
  }

  function processNavigation() {
    // Se a rota requer autenticação e o usuário não está autenticado
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
      return next('/login');
    }

    // Se a rota só pode ser acessada quando não estiver autenticado e o usuário está autenticado
    if (to.meta.requiresUnauthenticated && authStore.isAuthenticated) {
      return next('/game');
    }

    // Permite a navegação
    next();
  }
});

export default router
