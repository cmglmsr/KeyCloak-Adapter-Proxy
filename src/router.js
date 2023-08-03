import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import Home from './Home.vue';
import Login from './Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/login',
            component: Login,
            meta: {
                requiresAuth: false,
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!store.state.token) {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;