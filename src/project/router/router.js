import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import menuComponent from '../components/menu/menu.vue' //菜单
import homeComponent from '../components/home/home.vue' //首页
import goodslistComponent from '../components/goodslist/goodslist.vue' //商品列表
import orderComponent from '../components/order/order.vue' //订单
import shoppingcarComponent from '../components/shoppingcar/shoppingcar.vue' //购物车
import userComponent from '../components/user/user.vue' //用户中心
import userBill from '../components/user/userBill/bill.vue'
import userDiscount from '../components/user/userDiscount/discount.vue'
import userHelp from '../components/user/userHelp/help.vue'
import userPersonal from '../components/user/userPersonal/personal.vue'
import userWallet from '../components/user/userWallet/wallet.vue'
import loginComponent from '../components/user/login/login.vue'
import registerComponent from '../components/user/register/register.vue'
import docComponent from '../components/user/userDoc/doc.vue'
import discountsComponent from '../components/home/discounts/discounts.vue'//用户在线订单
import favoriteComponent from '../components/home/favorite/favorite.vue' //口味收藏

// import loginComponent from '../components/login/login.vue' //登录

const router = new VueRouter({
    routes: [
        {path: '/home', component: homeComponent, name: 'home',},
        {path: '/goodslist', component: goodslistComponent, name: 'goodslist'},
        {path: '/order', component: orderComponent, name: 'order'},
        {path: '/shoppingcar', component: shoppingcarComponent, name: 'shoppingcar'},
        {path: '/user', component: userComponent, name: 'user'},
        {path:'/bill',component:userBill},
        {path:'/discount',component:userDiscount},
        {path:'/help',component:userHelp},
        {path:'/personal',component:userPersonal},
        {path:'/wallet',component:userWallet},
        {path:'/login',component:loginComponent,name:"login"},
        {path:'/register',component:registerComponent,name:'register'},
        {path:'/coffee',component:docComponent,name:'coffee'},
        {path:'/discounts',component:discountsComponent,name:'discounts'},
        {path:'/favorite',component:favoriteComponent,name:'favorite'}

    ]
})
export default router;