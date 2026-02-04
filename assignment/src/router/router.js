import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "Home",
            path: '/',
            component: import("../views/HomeView.vue")
        },
        {
            name: "Login",
            path: '/login',
            component: import("../views/LoginView.vue")
        },
        {
            name: "Register",
            path: '/register',
            component: import("../views/RegisterView.vue")
        },
        {
            name: "ArticleDetail",
            path: '/article/:id',
            component: () => import("../views/ArticleDetailView.vue")
        },
        {
            name: "PostArticle",
            path: '/post-article',
            component: () => import("../views/PostAricleView.vue")
        },
        {
            name: "Profile",
            path: '/profile',
            component: () => import("../views/ProfileView.vue")
        },

        {
            name: "list",
            path: '/list-article',
            component: () => import("../views/ListArticleView.vue")
        },
    ]
})



export default router;