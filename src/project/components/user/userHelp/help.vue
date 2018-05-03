<template>
    <div class="help">
        <h1>帮助反馈</h1>
        <ul>
            <li v-for = "obj in arr" :key="obj.text">
                <router-link to="coffee" :key="obj.text">{{obj.text}}</router-link>
            </li>
        </ul>
        <input type="button" value="客户服务" class="btn"/>
    </div>
</template>
 
<script>
    import "./help.css";

    export default {
        data(){
            return {
                arr:[
                    {text:'购买类'},
                    {text:'配送类'},
                    {text:'商品类'},
                    {text:'发票类'},
                    {text:'合作类'},
                    {text:'意见反馈'},
                    {text:'关于我们'}
                ]
            }
        }
    }
</script>