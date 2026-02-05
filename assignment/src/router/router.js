import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: import("../views/HomeView.vue")
        },
        {
            path: '/login',
            component: import("../views/LoginView.vue")
        },
        {
            path: '/register',
            component: import("../views/RegisterView.vue")
        },
        {
            path: '/article/:id',
            component: import("../views/ArticleDetailView.vue")
        },
        {
            path: '/post-article',
            component: import("../views/PostAricleView.vue")
        },
        {
            path: '/profile',
            component: import("../views/ProfileView.vue")
        },

        {
            path: '/list-article',
            component: import("../views/ListArticleView.vue")
        },
    ]
})



export default router;