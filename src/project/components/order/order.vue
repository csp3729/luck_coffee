<template>
    <div class="order">
        <h1>订单列表</h1>
        <ul>
            <li v-bind:style="colorObj" @click='li1'>全部</li>
            <li @click="li2" v-bind:style="{color:li2Color,borderBottom:li2Border}">未完成</li>
            <li @click="li3" v-bind:style="{color:li3Color,borderBottom:li3Border}">已完成</li>
        </ul>
    </div>
</template>

<script>
    import "./order.css";


    export default {
        data(){
            return {
                li1Color:'#89AFD6',
                li1Border:'0.040258rem solid #89AFD6',
                li2Color:'',
                li2Border:'',
                li3Color:'',
                li3Border:''
            }
        },
        methods:{
            li1:function(){
                this.li1Color="#89AFD6";
                this.li1Border = '0.040258rem solid #89AFD6';
                this.li2Color = '';
                this.li2Border = '';
                this.li3Color = '';
                this.li3Border = ''
            },
            li2:function(){
                this.li2Color="#89AFD6";
                this.li2Border = '0.040258rem solid #89AFD6';
                this.li1Color = '';
                this.li1Border = '';
                this.li3Color = '';
                this.li3Border = ''

            },
            li3:function(){
                this.li3Color="#89AFD6";
                this.li3Border = '0.040258rem solid #89AFD6';
                this.li1Color = '';
                this.li1Border = '';
                this.li2Color = '';
                this.li2Border = ''
            }
        },
        computed:{
            colorObj:function(){
                return [
                    {color:this.li1Color},
                    {borderBottom:this.li1Border}
                ]
            }
        }
    }

</script>