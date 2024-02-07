import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/test',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/intro',
    name: 'intropage',
    component: () => import('../components/Homepage/IntroPage')
  },
  {
    path: '/discover',
    name: 'discoverpage',
    component: () => import('../components/Homepage/DiscoverPage')
  },
  {
    path: '/courses',
    name: 'coursespage',
    component: () => import('../components/Homepage/CoursesPage')
  },
  {
    path: '/gallery',
    name: 'gallerypage',
    component: () => import('../components/Homepage/GalleryPage')
  },
  {
    path: '/testimon',
    name: 'testimonialpage',
    component: () => import('../components/Homepage/TestimonialPage')
  },
  {
    path: '/learn',
    name: 'learnmorepage',
    component: () => import('../components/Homepage/LearnPage')
  },
  {
    path: '/register',
    name: 'registrationpage',
    component: () => import('../components/Homepage/RegfForm')
  },
  {
    path: '/header',
    name: 'headerpage',
    component: () => import('../components/Homepage/HeaderPage')
  },
  {
    path: '/footer',
    name: 'footerpage',
    component: () => import('../components/Homepage/FooterPage')
  },
  {
    path: '/placement',
    name: 'placementpage',
    component: () => import('../components/Homepage/PlacementPage')
  },
  {
    path: '/',
    name: 'homepage',
    component: () => import('../components/Homepage/HomeFinal')
  },
  {
    path: '/aboutus',
    name: 'aboutuspage',
    component: () => import('../components/AboutUs/AboutUs')
  },
  {
    path: '/ourcourses',
    name: 'ourcoursespage',
    component: () => import('../components/CoursesPage/OurCourses')
  },
  {
    path: '/CMADetails',
    name: 'CMADetails',
    component: () => import('../components/CoursesPage/CMADetails')
  },
  {
    path: '/CIFADetails',
    name: 'CIFADetails',
    component: () => import('../components/CoursesPage/CIFA/CIFADetails.vue')
  },
  {
    path: '/CGPADetails',
    name: 'CGPADetails',
    component: () => import('../components/CoursesPage/CGPADetails')
  },
  {
    path: '/ACCADetails',
    name: 'ACCADetails',
    component: () => import('../components/CoursesPage/ACCADetails')
  },
  {
    path: '/SAPDetails',
    name: 'SAPDetails',
    component: () => import('../components/CoursesPage/SAPDetails')
  },
  {
    path: '/AdvancedExcelDetails',
    name: 'AdvancedExcelDetails',
    component: () => import('../components/CoursesPage/AdvancedExcelDetails')
  },
  {
    path: '/GSTDetails',
    name: 'GSTDetails',
    component: () => import('../components/CoursesPage/GSTDetails')
  },
  {
    path: '/TallyDetails',
    name: 'TallyDetails',
    component: () => import('../components/CoursesPage/TallyDetails')
  },
  {
    path: '/CADetails',
    name: 'CADetails',
    component: () => import('../components/CoursesPage/CADetails')
  },
  {
    path: '/ComputerDetails',
    name: 'ComputerDetails',
    component: () => import('../components/CoursesPage/ComputerDetails')
  },
  {
    path: '/AIDetails',
    name: 'AIDetails',
    component: () => import('../components/CoursesPage/AIDetails')
  },
  {
    path: '/LanguageDetails',
    name: 'LanguageDetails',
    component: () => import('../components/CoursesPage/LanguageDetails')
  },
  {
    path: '/gallerypage',
    name: 'gallerypage',
    component: () => import('../components/EventsPage/GatheringPage')
  },
  {
    path: '/ourteam',
    name: 'teampage',
    component: () => import('../components/EventsPage/TeamPage')
  },
  {
    path: '/blogpage',
    name: 'blogpage',
    component: () => import('../components/EventsPage/BlogPage')
  },
  {
    path: '/contactus',
    name: 'contactpage',
    component: () => import('../components/EventsPage/ContactPage')
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
