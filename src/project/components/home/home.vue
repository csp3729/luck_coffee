<template>
    <div class="lc">
        <!-- <div class="lc_body">Body</div> -->
        <div class="bann">
                <transition-group tag="ul" name="image">
                    <li v-for="(item,index) in bann" :key="index" v-show="index == mark">
                        <img :src="item.path">
                    </li>
                </transition-group>
                <div class="bullet">
                    <span v-for="(item,index) in bann.length" :key="index" :class="{'active':index == mark}"></span>
                </div>
        </div>
        <div class="main">
            <ul>
                <li><a href="#">
                    <span class="span1">现象工厂店</span><span class="span2">距您700米</span>
                    </a>
                    <div class="box" ><span class="span3">自提</span><span class="span4">外送</span></div>
                </li>
                <li v-for="(item,index) in obj" :key="index">
                   <router-link :to="item.path"><span class="span1">{{item.text}}</span><span class="span2">{{item.text2}}</span></router-link>
                    <!-- <div class="box"><span class="span3">{{item.text3}}</span><span class="span4">{{item.text4}}</span></div> -->
                   <div class="box2"><img :src="item.src"></div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import menus from '../menu/menu.vue';
    // import lunbo from './lunbo/lunbo.vue';
    // import main from './main/main.vue';
    import './home.css';

    export default {
        components:{
            // meaus,
            // lunbo,
        },
        data(){
            return{
                mark:0,
                obj:[
                    // {path: '/goodslist',text:'现象工厂店',text2:'距您700米',text3:'自提',text4:'外送'},
                    {path: '/goodslist',text:'现在下单',text2:'ORDER NOW',src:'src/project/img/index1.jpg'},
                    {path: '/favorite',text:'口味收藏',text2:'MY FAVORITES',src:'src/project/img/index2.jpg'},
                    {path: '/discounts',text:'优惠活动',text2:'LUCKIN PROMOTION',src:'src/project/img/index3.jpg'},
                ],
                bann: [
                    {path:'src/project/img/bann1.jpg'},
                    {path:'src/project/img/bann2.jpg'},
                    {path:'src/project/img/bann3.jpg'},
                ],
            }
        },
        methods:{
             autoPlay(){
                this.mark++;
                if(this.mark >= 3){
                    this.mark = 0;
                    return
                }
            },
            play(){
                setInterval(this.autoPlay,3000)
            },
        },
        mounted(){
            this.play();    
        }
    }
</script>
