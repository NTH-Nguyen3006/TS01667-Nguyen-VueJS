import { createRouter, createWebHistory } from "vue-router";
import { authState } from "../auth";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: import("../views/HomeView.vue")
        },
        {
            path: '/login',
            component: import("../views/LoginView.vue"),
            meta: { guestOnly: true }
        },
        {
            path: '/register',
            component: import("../views/RegisterView.vue"),
            meta: { guestOnly: true }
        },
        {
            path: '/article/:id',
            component: import("../views/ArticleDetailView.vue")
        },
        {
            path: '/post-article/:id?',
            component: import("../views/PostAricleView.vue"),
            // meta: { requiresAuth: true }
        },
        {
            path: '/profile',
            component: import("../views/ProfileView.vue"),
            // meta: { requiresAuth: true }
        },
        {
            path: '/list-article',
            component: import("../views/ListArticleView.vue")
        },
    ]
})


router.beforeEach((to, from, next) => {
    const isAuthenticated = !!authState.user;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({ path: '/login' });
        } else {
            next();
        }

    } else if (to.matched.some(record => record.meta.only)) {
        if (isAuthenticated) {
            next({ path: '/' });
        }
    } else {
        next();
    }
});



export default router;