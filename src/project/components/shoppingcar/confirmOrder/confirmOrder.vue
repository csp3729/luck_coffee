<template>
    <div class="confirmOrder">
        <router-link to="/shoppingcar"><img src="../../../img/jiantou.png"></router-link>
        <h2>确认订单</h2>
        <div class="time">
            <div class="box" >
                <span class="ziTi">自提</span>
                <span class="waiSong">外送</span>
            </div>
            <div class="box1">
                <p>立即取餐</p>
                <span class="qucan">约<b>14:49</b>可去</span>
            </div>
        </div>
        <div class="xian"></div>
        <div class="main">
            <p class="zi">自提门店</p>
            <p>现象工场店(No.0149)</p>
            <p>白云区工场店108单位</p>
            <div class="fangshi">
                <span></span>
                <i>店内用餐</i>
                <span class="dabao">>_<</span>打包带走
            </div>
            <div class="ding">订单信息</div>
            <div class="container"></div>
        </div>
        <div class="sum">
            <div class="sum_l">
                <span>应付合计</span>
                ￥0
            </div>
            <div class="sum_r">去支付</div>
        </div>
    </div>
</template>
<script>
    import './confirmOrder.css';

    export default{
        data(){
            return {
                show:[]
            }
        },
        mounted(){

        }
    }
</script>