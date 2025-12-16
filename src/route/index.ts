import { createRouter, createWebHistory } from 'vue-router';

// TYPE
import type { RouteRecordRaw } from 'vue-router';

// COMPOSABLE
import useAuth from '@/composables/action/auth/useAuth';

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
    meta: { requiresLogin: true }
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: () => import('@/view/Register.vue'),
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('@/view/Game.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if(to.path !== '/') {
    const { checkAuth } = useAuth();
  
    // Verifica se o usuário está autenticado
    const isAuthenticated = await checkAuth();
  
    // Se a rota requer autenticação e o usuário não está autenticado
    if (to.meta.requiresAuth && !isAuthenticated) {
      return next('/login');
    }
  
    // Se a rota não requer autenticação e o usuário está autenticado
    if (to.meta.requiresLogin && isAuthenticated) {
      return next('/game');
    }
  }

  // Permite a navegação
  next();
});

export default router
