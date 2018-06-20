import Vue from 'vue'
import Router from 'vue-router'


 // 首页数量  11
 // 首页搜索
const Search = r => require.ensure([],()=>r(require('../components/index/search/Search.vue')),"Search");
 // 首页登录
const  WxLogin= r => require.ensure([],()=>r(require('../components/index/login/WxLogin.vue')),"WxLogin");
const  UserLogin= r => require.ensure([],()=>r(require('../components/index/login/UserLogin.vue')),"UserLogin");
const  Sign= r => require.ensure([],()=>r(require('../components/index/login/Sign.vue')),"Sign");
const  MessageFill= r => require.ensure([],()=>r(require('../components/index/login/MessageFill.vue')),"MessageFill");

// 首页位置选择
const  SelectLocation= r => require.ensure([],()=>r(require('../components/index/location/SelectLocation.vue')),"SelectLocation");
const  SelectCity= r => require.ensure([],()=>r(require('../components/index/location/SelectCity.vue')),"SelectCity");

// 列表
const  ServiceOrder= r => require.ensure([],()=>r(require('../components/index/list/ServiceOrder.vue')),"ServiceOrder");
const  ServiceList= r => require.ensure([],()=>r(require('../components/index/list/ServiceList.vue')),"ServiceList");
const  ServiceDetail= r => require.ensure([],()=>r(require('../components/index/list/ServiceDetail.vue')),"ServiceDetail");
const  OrderAdress= r => require.ensure([],()=>r(require('../components/index/list/OrderAdress.vue')),"OrderAdress");


















Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/WxLogin',
      name: 'WxLogin',
      component: WxLogin
    },
    {
      path: '/UserLogin',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/MessageFill',
      name: 'MessageFill',
      component: MessageFill
    },
    {
      path: '/SelectLocation',
      name: 'SelectLocation',
      component: SelectLocation
    },
    {
      path: '/SelectCity',
      name: 'SelectCity',
      component: SelectCity
    },
    {
      path: '/ServiceOrder',
      name: 'ServiceOrder',
      component: ServiceOrder
    },
    {
      path: '/ServiceList',
      name: 'ServiceList',
      component: ServiceList
    },
    {
      path: '/ServiceDetail',
      name: 'ServiceDetail',
      component: ServiceDetail
    },

  ]
})
