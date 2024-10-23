import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import router from "./router.js";
import {createPinia} from 'pinia'
import axios from "axios";
import {useVuelidate} from "@vuelidate/core"
const pinia = createPinia();
const app = createApp(App);
const Bearer = "Bearer ";
let BASE_URL = "http://157.230.127.240:3001/api/v1/admin-app/";
// let BASE_URL = "http://localhost:3010/api/v1/admin-app/";
let FILE_URL = BASE_URL
axios.interceptors.request.use(
  function (config) {
      config.headers["Authorization"] = Bearer + localStorage.getItem("token");
      return config;
    },
    function (error) { 
      return Promise.reject(error);
    }
  )
  import './css/style.css'
  axios.defaults.baseURL = BASE_URL;
  app.provide('FILE_URL', FILE_URL)
  loadFonts()
app.use(pinia);
app.use(useVuelidate)
app.use(router);
app.use(vuetify);
app.mount('#app')



