// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './assets/js/rem'
import axios from 'axios'
import store from './store/index'
import qs from 'qs'
import './assets/css/animate.css'
import './assets/css/base.css'
import './assets/css/common.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont1.css'


import ElementUI from 'element-ui'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'reset-css'
// require styles
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'

Vue.use(VueScroller)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  loading: require('./components/common/static/img/logo.png')
})
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
