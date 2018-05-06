<template>
    <div class="shoppingcar">
        <h2>购物车</h2>
        <img class="img" src="../../img/car_1.fw.png" />
        <ul class="main">
            <li v-for="(obj,index) in dataset" :id="index" :key="index">
                <div class="check">
                    <input type="checkbox" checked class="check1" @click="cleck1($event)">
                </div>
                <div class="title">
                    {{obj.pronameC}}
                    <span class="pop">买2赠1,买5赠5</span>
                    <p>{{obj.specification}}/{{obj.milk}}/{{obj.sugar}}/{{obj.temperature}}</p>
                </div>
                <div class="choose">
                    <span class="price">￥{{obj.price*obj.qty}}</span>
                    <span class="jian" @click="jian($event)">-</span>
                    <span class="num">{{obj.qty}}</span>
                    <span class="jia" @click="increment($event)">+</span>
                </div>
            </li>
        </ul>
        <div class="sum">
            <div class="sum_l">
                <span>应付合计</span>
                ￥{{sum_price}}
                <p>面价满￥35免配送费</p>
            </div>
            <router-link to="/cOrder"><div class="sum_r">{{val}}</div></router-link>
        </div>
        <spinner v-if="show"></spinner>
    </div>
</template>
<script>
    import './shoppingcar.css';
    import spinner from './spinner/spinner.vue';
    import http from '../../utils/httpclient.js';

    export default{
        data(){
            return {
                dataset:[],
                sum_price:[],
                val:"去结算",
                show:false
            }
        },
        components:{
            spinner
        },
        mounted(){
            this.show = true;
            http.get('showshopping').then((res)=>{
                this.dataset = res.data;
                for(var i=0;i<res.data.length;i++){
                    this.sum_price = this.sum_price*1 + this.dataset[i].price*1 * this.dataset[i].qty*1;
                }
            });
            this.show = false;
        },
        methods:{
            increment:function(e){
                var e = e || window.event;
                var target = e.target || e.srcElement
                if(target.nodeName != 'LI'){
                    var id = target.parentNode.parentNode.id;
                } else {
                    var id = target.id
                };
                    this.dataset[id].qty = this.dataset[id].qty*1 + 1;
                    this.sum_price = this.sum_price*1 + this.dataset[id].price*1;
            },
            jian:function(e){
                var e = e || window.event;
                var target = e.target || e.srcElement
                if(target.nodeName != 'LI'){
                    var id = target.parentNode.parentNode.id;
                } else {
                    var id = target.id
                };
                this.dataset[id].qty = this.dataset[id].qty*1 - 1;
                this.sum_price = this.sum_price*1 - this.dataset[id].price*1;
                if(this.dataset[id].qty<1){
                    this.dataset[id].qty = 1;
                    this.sum_price = this.sum_price*1 + this.dataset[id].price*1;
                }
            },
            cleck1:function(e){
                var e = e || window.event;
                var target = e.target || e.srcElement
                if(target.nodeName == 'INPUT'){
                    var id = target.parentNode.parentNode.id;
                    if(target.checked==true){
                        this.sum_price = this.sum_price + this.dataset[id].price*1 * this.dataset[id].qty*1;
                    }else{
                        this.sum_price = this.sum_price - this.dataset[id].price*1 * this.dataset[id].qty*1;
                    }
                }
            }
        }
    }
</script>
