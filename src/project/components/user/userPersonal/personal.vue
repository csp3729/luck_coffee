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
                window.localStorage.removeItem('token');
                this.$router.push({name:'user'});
            }
        },
        mounted:function(){
            var username = window.localStorage.getItem('token');
            $('li:nth-child(2) a span.right').html(username);
        }
    }
</script>

