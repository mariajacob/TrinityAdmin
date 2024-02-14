import { createStore } from 'vuex'
// import router from '@/router';
// import axios from 'axios'

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    // courses: [],
  },
  getters: {
  },
  mutations: {
    loginUser(state, payload) {
      localStorage.setItem("token", payload);
      state.isLoggedIn = true
  },
  // setCourses(state, courses) {
  //   state.courses = courses;
  // },
  // addCourse(state, course) {
  //   state.courses.push(course);
  // },

  },
  actions: {
  },
  modules: {
  }
})
