import { createRouter, createWebHistory } from 'vue-router';
import store from "../store/index";
import axios from 'axios';
const routes = [
    {
        path: "/",
        name: "loginPage",
        component: () =>
            import("../views/Login_signup/loginPage.vue"),
    },

    {
        path: "/appHeader",
        name: "appHeader",
        meta: {
            requiresAuth: true
        },
        component: () =>
            import("../components/Common/appHeader.vue"),


        children: [{
            path: "/dashboardPage",
            name: "dashboardPage",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Dashboard/dashboardPage.vue"),
        },
         
        {
            path: "/catList",
            name: "catList",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Course_cat/catList.vue"),

        },
        
        {
            path: "/catsingleView",
            name: "catsingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Course_cat/catsingleView.vue"),

        },

        {
            path: "/listCourse",
            name: "listCourse",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Course/listCourse.vue"),

        },
        
        {
            path: "/coursesingleView",
            name: "coursesingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Course/coursesingleView.vue"),

        },
        {
            path: "/listAbout",
            name: "listAbout",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Aboutus/listAbout.vue"),

        },
        
        {
            path: "/listReview",
            name: "listReview",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Review/listReview.vue"),

        },
       
        {
            path: "/reviewsingleView",
            name: "reviewsingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Review/reviewsingleView.vue"),

        },
        {
            path: "/listPlacements",
            name: "listPlacements",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Placements/listPlacements.vue"),

        },
        
        {
            path: "/placementsingleView",
            name: "placementsingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Placements/placementsingleView.vue"),

        },

        {
            path: "/listDiscoverdetails",
            name: "listDiscoverdetails",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Disdetails/listDiscoverdetails.vue"),

        },
        
        {
            path: "/discoversingleView",
            name: "discoversingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Disdetails/discoversingleView.vue"),

        },
        {
            path: "/listNews",
            name: "listNews",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/News/listNews.vue"),

        },
        
        {
            path: "/newssingleView",
            name: "newssingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/News/newssingleView.vue"),

        },
        {
            path: "/listTailsection",
            name: "listTailsection",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Tail/listTailsection.vue"),

        },
        
        {
            path: "/tailsingleView",
            name: "tailsingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Tail/tailsingleView.vue"),

        },
        {
            path: "/listContact",
            name: "listContact",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Contact/listContact.vue"),

        },
        
        {
            path: "/contactsingleView",
            name: "contactsingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Contact/contactsingleView.vue"),

        },

        {
            path: "/listTeam",
            name: "listTeam",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Team/listTeam.vue"),

        },
        
        {
            path: "/teamsingleView",
            name: "teamsingleView",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Team/teamsingleView.vue"),

        },
        ]

    },
    {
        path: "/:catchAll(.*)",
        name: "notfound",
        component: () =>
            import("../components/Common/notFound404.vue"), // Create this component

    },
    {
        path: "/serverError500",
        name: "servererror",
        component: () =>
            import("../components/Common/serverError500.vue"),
    },
]
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 500) {
            router.push({ name: 'servererror' });
        }
        return Promise.reject(error);
    }
);
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (store.state.isLoggedIn == true || to.matched.some(route => route.meta.requiresAuth == true)) {
        axios({
            method: 'get',
            url: '/validate/token',
            headers: {
                'token': localStorage.getItem('token')
            }
        }).then(response => {
            if (!response.data.status) {
                console.log("router logout")
                store.state.isLoggedIn = false;
                localStorage.clear();
                router.push("/");
             
                return
            }
        })
            .catch(err => {
                var msg = err;
                console.log(msg)
            });
    }

    if (
        to.matched.some((route) => route.meta.requiresAuth == true) &&
        store.state.isLoggedIn == false
    ) {
        console.log("1");
        next({ name: "loginPage", params: { lastPage: from } });
        return;
    }
    if (to.name === "loginPage" && store.state.isLoggedIn == true) {
        console.log("2");
        next({ name: "dashboardPage" });
    }

    if (
        to.matched.some((route) => route.meta.isAdmin == false) && from.name != "loginPage" &&
        store.state.isLoggedIn == true
    ) {
        next({ name: "dashboardPage" });
        return;
    }
    else {
        next();
    }
});

export default router
