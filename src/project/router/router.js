import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import menuComponent from '../components/menu/menu.vue' //菜单
import homeComponent from '../components/home/home.vue' //首页
import goodslistComponent from '../components/goodslist/goodslist.vue' //商品列表
import orderComponent from '../components/order/order.vue' //订单
import shoppingcarComponent from '../components/shoppingcar/shoppingcar.vue' //购物车
import userComponent from '../components/user/user.vue' //用户中心

// import loginComponent from '../components/login/login.vue' //登录

const router = new VueRouter({
    routes: [
        {path: '/home', component: homeComponent, name: 'home',},
        {path: '/goodslist', component: goodslistComponent, name: 'goodslist'},
        {path: '/order', component: orderComponent, name: 'order'},
        {path: '/shoppingcar', component: shoppingcarComponent, name: 'shoppingcar'},
        {path: '/user', component: userComponent, name: 'user'},
    ]
})
export default router;