import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import Home from './Home.vue';
import Login from './Login.vue';
import Admin from "@/Admin.vue";
import AdminLogin from "@/AdminLogin.vue";

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
        {
            path: "/admin-login",
            component: AdminLogin,
            meta: {
                requiresAuth: false,
            }
        },
        {
            path: "/admin",
            component: Admin,
            meta: {
                requiresAdminAuth: true,
            }
        },
        {
            path: "/*",
            component: Login,
            meta: {
                requiresAuth: false,
            }
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!store.state.token) {
            alert("You need to be authenticated first.")
            next('/login');
        } else {
            next();
        }
    }
    else if(to.meta.requiresAdminAuth) {
        if(!store.state.adminToken) {
            alert("You need to be authenticated as an admin before accessing the admin panel.")
            next("/admin-login")
        } else {
            next();
        }
    }
    else {
        next();
    }
});

export default router;