<template>
    <div class="register">
        <input type='text' v-model="data.username" placeholder="请输入用户名" v-on:blur="change"/><br />
        <input type="password" v-model = "data.password" placeholder="请输入密码" v-on:blur="change"/><br />
        <input type='text' v-model="data.telephone" placeholder="请输入手机号码"/><br />
        <input type="text" v-model = "data.gender" placeholder="请输入性别"/><br />
        <span class="error">{{data.error}}</span>
        <input type="button" value="注册" class="btn" @click="register"/>
    </div>
</template>

<script>
    import './register.css';
    import http from "../../../utils/httpclient";

    export default {
        data(){
            return {
                data:{
                    username:'',
                    password:'',
                    telephone:'',
                    gender:'',
                    error:''
                }
            }
        },
        methods:{
            register:function(){
                if(this.data.username.length === 0){
                    this.data.error = "用户名不能为空";
                    return false;
                }
                if(this.data.password.length === 0){
                    this.data.error = "密码不能为空";
                    return false;
                }
                http.post('register',this.data).then((res)=>{
                    console.log(res);
                    if(res.status){
                        this.$router.push({name: 'login'});
                    }
                })
            },
            change:function(){
                if(this.data.username.length === 0 || this.data.password.length === 0){
                    this.data.error = "用户名或密码不能为空";
                    return false;
                }
            }
        }
    }

</script>