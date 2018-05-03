<template>
    <div class="login">
        <input type="text" placeholder="请输入用户名" v-model="data.username"/><br />       
        <input type="password" placeholder="请输入密码" v-model = "data.password"/><br />
        <input type="button" value="登录" class="btn" @click="login"/>
        <span class="error">{{data.error}}</span>
        <p @click="register">没有帐号，点击注册</p>
    </div>
</template>

<script>
    import './login.css';
    import http from "../../../utils/httpclient.js";

    export default {
        data(){
            return {
                data:{
                    username:'',
                    password:'',
                    error:''
                }
            }
        },
        methods:{
            login:function(){
                http.post('login',this.data).then((res)=>{
                    console.log(res);
                    document.cookie="username="+res.message;
                    if(res.status){
                        window.localStorage.setItem('token', res.data);
                        this.$router.push({name: 'user'});
                    }else{
                        this.data.error = "用户名或密码错误";
                    }
                    
                })
            },
            register:function(){
                this.$router.push({name:'register'})
            }
        }
    }

</script>