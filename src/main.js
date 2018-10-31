// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './assets/js/rem'
import axios from 'axios'
import store from './store/index'
import Vodal from 'vodal'


import qs from 'qs'
import './assets/css/animate.css'
import './assets/css/base.css'
import './assets/css/common.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont1.css'
import 'vodal/common.css'
import 'vodal/rotate.css'


import ElementUI from 'element-ui'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'reset-css'
// require styles
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import {Icon,Dialog,Form,Upload,Input,FormItem} from "element-ui"
Vue.use(VueScroller);
Vue.use(VueAwesomeSwiper);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Upload);
Vue.use(Input);
Vue.use(FormItem);

Vue.component(Vodal.name, Vodal);


Vue.use(VueLazyload, {
  loading: require('./components/common/static/img/logo.png')
});
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage['fecshop-uuid']){
      next({
        path:'/userLogin',
        query:{redirect:to.fullPath}
      })
    }else{
      next();
    }

  }else{
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
