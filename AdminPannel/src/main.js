import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()
const app=createApp(App)
axios.defaults.baseURL = 'http://192.168.54.46:4000';
app.config.globalProperties.baseURL = "http://192.168.54.46:4000";
app.config.globalProperties.mediaURL = "http://192.168.54.46:4000/file/get/"
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
