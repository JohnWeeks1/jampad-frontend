import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import AuthMiddleware from '@/middleware/AuthMiddleware'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(/* webpackChunkName: "login" */ "./views/Register.vue")
    },
    {
        path: '/account/profile',
        name: 'Profile',
        beforeEnter: AuthMiddleware,
        component: () =>
            import(/* webpackChunkName: "profile" */ './views/account/Profile')
    },
    {
        path: '/account/edit-profile',
        name: 'EditProfile',
        beforeEnter: AuthMiddleware,
        component: () =>
            import(/* webpackChunkName: "edit-profile" */ './views/account/EditProfile')
    },
    {
        path: "/account/all-posts",
        name: "AllPosts",
        beforeEnter: AuthMiddleware,
        component: () =>
            import(/* webpackChunkName: "all-posts" */ "./views/account/AllPosts.vue")
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
