import { createRouter, createWebHistory } from 'vue-router';

// TYPE
import type { RouteRecordRaw } from 'vue-router';

// COMPOSABLE
import useAuth from '@/composables/action/auth/useAuth';
import useLoader from '@/composables/useLoader';

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
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _from, next) => {
  const { showLoader, hideLoader } = useLoader();

  if(to.path !== '/') {
    // Mostra o loader enquanto verifica a autenticação
    showLoader('Verificando autenticação...');

    const { checkAuth } = useAuth();

    // Verifica se o usuário está autenticado
    const isAuthenticated = await checkAuth();

    // Esconde o loader após verificação
    hideLoader();

    // Se a rota requer autenticação e o usuário não está autenticado
    if (to.meta.requiresAuth && !isAuthenticated) {
      return next('/login');
    }

    // Se a rota só pode ser acessada quando não estiver autenticado e o usuário está autenticado
    if (to.meta.requiresUnauthenticated && isAuthenticated) {
      return next('/game');
    }
  }

  // Permite a navegação
  next();
});

export default router
