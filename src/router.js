import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Account from "./views/Account.vue";
import AccountMenu from "./views/account/AccountMenu.vue";
import Profile from "./views/account/Profile.vue";
import Connections from "./views/account/Connections.vue";
import SearchMusic from "./views/account/SearchMusic.vue";
import EditProfile from "./views/account/EditProfile.vue";
import DeleteSong from "./views/account/DeleteSong.vue";
import AddSong from "./views/account/AddSong.vue";
import AddYoutubeVideoLink from "./views/account/AddYoutubeVideoLink.vue";
import DeleteYoutubeVideoLink from "./views/account/DeleteYoutubeVideoLink.vue";
import UploadProfilePic from "./views/account/UploadProfilePic.vue";
import AllPosts from "./views/account/AllPosts.vue";
import AuthMiddleware from '@/middleware/AuthMiddleware'
import TopNavigation from '@/components/structure/TopNavigation'
import FooterComponent from '@/components/structure/Footer'

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
        component: About
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: '/account',
        beforeEnter: AuthMiddleware,
        components: {
            default: Account,
            nav: TopNavigation,
            footerComponent: FooterComponent,
        },
        children: [
            {
                path: '',
                name: 'AccountMenu',
                component: AccountMenu,
            },
            {
                path: 'profile',
                name: 'Profile',
                component: Profile
            },
            {
                path: 'connections',
                name: 'Connections',
                component: Connections
            },
            {
                path: 'search-music',
                name: 'SearchMusic',
                component: SearchMusic
            },
            {
                path: 'edit-profile',
                name: 'EditProfile',
                component: EditProfile
            },
            {
                path: 'add-song',
                name: 'AddSong',
                component: AddSong,
            },
            {
                path: 'delete-song',
                name: 'DeleteSong',
                component: DeleteSong
            },
            {
                path: 'add-youtube-video-link',
                name: 'AddYoutubeVideoLink',
                component: AddYoutubeVideoLink
            },
            {
                path: 'delete-youtube-video-link',
                name: 'DeleteYoutubeVideoLink',
                component: DeleteYoutubeVideoLink
            },
            {
                path: 'upload-profile-pic',
                name: 'UploadProfilePic',
                component: UploadProfilePic
            },
            {
                path: "all-posts",
                name: "AllPosts",
                component: AllPosts
            },
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
