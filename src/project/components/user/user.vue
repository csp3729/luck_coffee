<template>
    <div class="user">
        <div class="user-t">
            <div class="pic"></div>
            <router-link to="/login">{{val}}</router-link>
        </div>
        <ul class="user-b">
            <li v-for="obj in arr" :key="obj.text">
            <i></i><router-link :to="obj.src">{{obj.text}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import "./user.css";
    export default {
        data(){
            return {
                val:"立即登录",
                arr:[
                    {text:'个人资料',src:"personal"},
                    {text:'咖啡钱包',src:"wallet"},
                    {text:'优惠券',src:"discount"},
                    {text:'发票管理',src:"bill"},
                    {text:'帮助反馈',src:"help"}
                ]
            }
        },
        mounted:function(){
            if(document.cookie){
                var cookies = document.cookie;
                var arr = cookies.split('=');
                this.val = arr[1];
            }
        }
    }

</script>

