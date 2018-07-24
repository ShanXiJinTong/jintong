// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from "./assets/js/rem"
import axios from "axios"
import store from './store/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import "reset-css"
// require styles
import 'swiper/dist/css/swiper.css'


Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
