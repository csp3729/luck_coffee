<template>
    <ul>
        <li v-for="obj in menus" :key="obj.path">
            <router-link :to="obj.path">{{obj.text}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                menus: [
                    {path: '/home', text: '首页'},
                    {path: '/goodslist', text: '菜单'},
                    {path: '/order', text: '订单'},
                    {path: '/shoppingcar', text: '购物车'},
                    {path: '/user', text: '用户中心'},
                ]
            }
        }
    }
</script>
