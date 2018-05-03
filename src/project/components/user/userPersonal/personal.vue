<template>
    <div class="personal">
        <h1>个人资料</h1>
        <ul>
            <li v-for="obj in data" :key="obj.text">
            <router-link :to="obj.text"><span>{{obj.text}}</span><span class="right"></span></router-link>
            </li>
        </ul>
        <input type="button" value="退出登录" class="btn" @click="esc"/>
    </div>
</template>

<script>
    import './personal.css';
    
    export default {
        data(){
            return {
                data:[
                    {text:'头像'},
                    {text:'用户名'},
                    {text:'性别'},
                    {text:'绑定手机'},
                    {text:'收货地址'}
                ]
            }
        },
        methods:{
            esc:function(){
                var cookies = document.cookie;
                var arr = cookies.split('=');
                var d = new Date();
                d.setDate(d.getDate()-1);
                document.cookie = "username="+arr[1] + "; expires=" + d.toUTCString();
                this.$router.push({name:'user'});
            }
        },
        mounted:function(){
            var cookies = document.cookie;
            var arr = cookies.split('=');
            $('li:nth-child(2) a span.right').html(arr[1]);
        }
    }
</script>

