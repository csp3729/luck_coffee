<template>
    <ul>
        <li v-for="obj in menus" :key="obj.path">
            <router-link :to="obj.path"><img :src="obj.src">{{obj.text}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                menus: [
                    {path: '/home', text: '首页',src:'src/project/img/home.png'},
                    {path: '/goodslist', text: '菜单',src:'src/project/img/menu.png'},
                    {path: '/order', text: '订单',src:'src/project/img/order.png'},
                    {path: '/shoppingcar', text: '购物车',src:'src/project/img/shopping_cart.png'},
                    {path: '/user', text: '我的',src:'src/project/img/my.png'},
                ]
            }
        }
    }
</script>
