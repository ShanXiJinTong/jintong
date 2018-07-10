import Vue from 'vue'
import Router from 'vue-router'


// 首页数量  11
// 首页搜索
const Index = r => require.ensure([], () => r(require('../components/index/Index.vue')), "Index");

const Search = r => require.ensure([], () => r(require('../components/index/search/Search.vue')), "Search");
// 首页登录
const WxLogin = r => require.ensure([], () => r(require('../components/index/login/WxLogin.vue')), "WxLogin");
// 微信登陆
const UserLogin = r => require.ensure([], () => r(require('../components/index/login/UserLogin.vue')), "UserLogin");
// 注册
const Sign = r => require.ensure([], () => r(require('../components/index/login/Sign.vue')), "Sign");
// 信息完善
const MessageFill = r => require.ensure([], () => r(require('../components/index/login/MessageFill.vue')), "MessageFill");
// 首页位置选择
const SelectLocation = r => require.ensure([], () => r(require('../components/index/location/SelectLocation.vue')), "SelectLocation");
// 选择城市
const SelectCity = r => require.ensure([], () => r(require('../components/index/location/SelectCity.vue')), "SelectCity");
// 列表   -> 支付成功
// 服务订单
const ServiceOrder = r => require.ensure([], () => r(require('../components/index/list/ServiceOrder.vue')), "ServiceOrder");
// 服务列表
const ServiceList = r => require.ensure([], () => r(require('../components/index/list/ServiceList.vue')), "ServiceList");
// 服务详情
const ServiceDetail = r => require.ensure([], () => r(require('../components/index/list/ServiceDetail.vue')), "ServiceDetail");
// 服务地址
const OrderAdress = r => require.ensure([], () => r(require('../components/index/list/OrderAdress.vue')), "OrderAdress");
// 支付选择
const ServicePay = r => require.ensure([], () => r(require('../components/index/list/ServicePay.vue')), "ServicePay");
// 支付成功
const ServicePaySuccess = r => require.ensure([], () => r(require('../components/index/list/ServicePaySuccess.vue')), "ServicePaySuccess");
// 商店
const Shop = r => require.ensure([], () => r(require('../components/shop/Shop.vue')), "Shop");
// 洗护
const Xh = r => require.ensure([], () => r(require('../components/shop/xh/Xh.vue')), "Xh");
// 售水
const SellWater = r => require.ensure([], () => r(require('../components/shop/sellwater/SellWater.vue')), "SellWater");
// 卫浴
const Bathroom = r => require.ensure([], () => r(require('../components/shop/bathroom/Bathroom.vue')), "Bathroom");
// 洗护列表
const XhList = r => require.ensure([], () => r(require('../components/shop/xh/XhList.vue')), "XhList");
// 洗护详情
const XhDetail = r => require.ensure([], () => r(require('../components/shop/xh/XhDetail.vue')), "XhDetail");
// 洗护评价
const XhEvaluate = r => require.ensure([], () => r(require('../components/shop/xh/XhEvaluate.vue')), "XhEvaluate");
// 洗护商店
const XhStore = r => require.ensure([], () => r(require('../components/shop/xh/XhStore.vue')), "XhStore");
// 售水列表
const SellWaterList = r => require.ensure([], () => r(require('../components/shop/sellwater/SellWaterList.vue')), "SellWaterList");
// 售水详情
const SellWaterDetail = r => require.ensure([], () => r(require('../components/shop/sellwater/SellWaterDetail.vue')), "SellWaterDetail");
//  售水订单
const SellWaterOrder = r => require.ensure([], () => r(require('../components/shop/sellwater/SellWaterOrder.vue')), "SellWaterOrder");
//  售水商店
const WaterStore = r => require.ensure([], () => r(require('../components/shop/sellwater/WaterStore.vue')), "WaterStore");
// 商店详情
const WaterStoreDetail = r => require.ensure([], () => r(require('../components/shop/sellwater/WaterStoreDetail.vue')), "WaterStoreDetail");
// 个人中心
const My = r => require.ensure([], () => r(require('../components/my/my.vue')), "my");
// 个人信息
const PersonalMessage = r => require.ensure([], () => r(require('../components/my/PersonalMessage.vue')), "PersonalMeaasge");
// 购物车
const Car = r => require.ensure([], () => r(require('../components/my/Car.vue')), "Car");
// 优惠券
const Discount = r => require.ensure([], () => r(require('../components/my/Discount.vue')), "Discount");
// 金币
const Gold = r => require.ensure([], () => r(require('../components/my/Gold.vue')), "Gold");
// 钱包
const Wallet = r => require.ensure([], () => r(require('../components/my/wallet/Wallet.vue')), "Wallet");
// 钱包充值
const Recharge = r => require.ensure([], () => r(require('../components/my/wallet/Recharge.vue')), "Recharge");
// 选择充值方式
const SelectWay = r => require.ensure([], () => r(require('../components/my/wallet/SelectWay.vue')), "SelectWay");
// 地址管理
const Address = r => require.ensure([], () => r(require('../components/my/address/Address.vue')), "Address");
// 添加地址
const AddAddress = r => require.ensure([], () => r(require('../components/my/address/AddAddress.vue')), "AddAddress");
// 编辑地址
const EditAddress = r => require.ensure([], () => r(require('../components/my/address/EditAddress.vue')), "EditAddress");
// 客服中心
const Kf = r => require.ensure([], () => r(require('../components/my/Kf.vue')), "Kf");
// 帮助中心
const Help = r => require.ensure([], () => r(require('../components/my/help/Help.vue')), "Help");
// 帮助详情
const HelpDetail = r => require.ensure([], () => r(require('../components/my/help/HelpDetail.vue')), "HelpDetail");
const About = r => require.ensure([], () => r(require('../components/my/About.vue')), "About");
// 我的会员
const Vip = r => require.ensure([], () => r(require('../components/my/vip/Vip.vue')), "Vip")
// 全部会员
const VipList = r => require.ensure([], () => r(require('../components/my/vip/VipList.vue')), "VipList");
// 提升攻略
const VipImprove = r => require.ensure([], () => r(require('../components/my/vip/VipImprove.vue')), "VipImprove");

// 订单 中心
const Order = r => require.ensure([], () => r(require('../components/order/Order.vue')), "Order");
// 待服务详情
const WaitService = r => require.ensure([], () => r(require('../components/order/WaitService.vue')), "WaitService");
// 等待服务支付尾款
const WaitServicePay = r => require.ensure([], () => r(require('../components/order/WaitServicePay.vue')), "WaitServicePay");
// 待服务订单追踪
const WaitZz = r => require.ensure([], () => r(require('../components/order/WaitZz.vue')), "WaitZz");
// 订单评价
const OrderEvaluate = r => require.ensure([], () => r(require('../components/order/OrderEvaluate.vue')), "OrderEvaluate");
// 退款
const Refund = r => require.ensure([], () => r(require('../components/order/Refund.vue')), "Refund");
// 退款确认页面
const RefundDetail = r => require.ensure([], () => r(require('../components/order/RefundDetail.vue')), "RefundDetail");
//退款退货
const RefundAnd = r => require.ensure([], () => r(require('../components/order/RefundAnd.vue')), "RefundAnd");
// 退款 提交成功
const RefundTo = r => require.ensure([], () => r(require('../components/order/RefundTo.vue')), " RefundTo");




Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/Search',
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
    {
      path: '/ServicePay',
      name: 'ServicePay',
      component: ServicePay
    },
    {
      path: '/ServicePaySuccess',
      name: 'ServicePaySuccess',
      component: ServicePaySuccess
    },

    // 商店
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: '',
          name: 'Xh',
          component: Xh,
        },
        {
          path: "SellWater",
          name: 'SellWater',
          component: SellWater,
        },
        {
          path: 'Bathroom',
          name: 'Bathroom',
          component: Bathroom,
        }
      ]
    },
    {
      path: '/XhList',
      name: 'XhList',
      component: XhList,
    },
    {
      path: '/XhDetail',
      name: 'XhDetail',
      component: XhDetail,
    },
    {
      path: '/XhEvaluate',
      name: 'XhEvaluate',
      component: XhEvaluate,
    },
    {
      path: '/XhStore',
      name: 'XhStore',
      component: XhStore,
    },
    {
      path: '/SellWaterList',
      name: 'SellWaterList',
      component: SellWaterList,
    },
    {
      path: '/SellWaterDetail',
      name: 'SellWaterDetail',
      component: SellWaterDetail,
    },
    {
      path: '/SellWaterOrder',
      name: 'SellWaterOrder',
      component: SellWaterOrder,
    },
    {
      path: '/WaterStore',
      name: 'WaterStore',
      component: WaterStore,
    },
    {
      path: '/WaterStoreDetail',
      name: 'WaterStoreDetail',
      component: WaterStoreDetail,
    },
    {
      path: '/My',
      name: 'my',
      component: My,
    },
    {
      path: '/Car',
      name: 'Car',
      component: Car,
    },
    {
      path: '/Discount',
      name: 'Discount',
      component: Discount,
    },
    {
      path: '/Gold',
      name: 'Gold',
      component: Gold,
    },
    {
      path: '/Wallet',
      name: 'Wallet',
      component: Wallet,
    },
    {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/SelectWay',
      name: 'SelectWay',
      component: SelectWay
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/AddAddress',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/EditAddress',
      name: 'EditAddress',
      component: EditAddress
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help
    },
    {
      path: '/HelpDetail',
      name: 'HelpDetail',
      component: HelpDetail
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/VipList',
      name: 'VipList',
      component: VipList
    },
    {
      path: '/VipImprove',
      name: 'VipImprove',
      component: VipImprove
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/WaitService',
      name: 'WaitService',
      component: WaitService
    },
    {
      path: '/WaitServicePay',
      name: 'WaitServicePay',
      component: WaitServicePay
    },
    {
      path: '/WaitZz',
      name: 'WaitZz',
      component: WaitZz
    },
    {
      path: '/OrderEvaluate',
      name: 'OrderEvaluate',
      component: OrderEvaluate
    },
    {
      path: '/Refund',
      name: 'Refund',
      component: Refund
    },
    {
      path: '/RefundDetail',
      name: 'RefundDetail',
      component: RefundDetail
    },
    {
      path: '/RefundAnd',
      name: 'RefundAnd',
      component: RefundAnd
    },
    {
      path: '/RefundTo',
      name: 'RefundTo',
      component: RefundTo
    },
  ]
})
