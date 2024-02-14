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
            path: "/courseList",
            name: "courseList",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import("../views/Course/courseList.vue"),

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
