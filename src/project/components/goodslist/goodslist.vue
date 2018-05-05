<template>
    <div>
        <div class="goodslist">
            <h1 class="gl_h1">选择咖啡和小食</h1>
            <div class="gl_main">
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
                <div class="list">
                    <div class="gl_menu">
                        <ul>
                            <li v-for="(item,index) in classify" :key="index" >
                                <!-- <router-link :to="'#CL'+index">{{item}}-{{index}}</router-link> -->
                                <a :href="'#CL'+index">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="goods">
                        <div v-for="(item,index) in classify" :key="item" :id="'CL'+index">
                            <h3>{{item}}</h3>
                            <ul>
                                <li v-for="(item,index) in goodsClassif[index]" :key="index" :id="item._id" @click="show($event)">
                                    <img :src="item.url">
                                    <h4>{{item.pronameC}}</h4>
                                    <p>{{item.pronameE}}</p>
                                    <span>￥{{item.price}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shade" v-show="details">
                <div class="detailed"  @click="fun($event)">
                <span id="end" class="end">&times;</span>
                    <div id="select">
                        <div class="specification select">
                            <span>规格</span>
                            <div class="big" :class="[select.specification =='大' ? activeClass : '']">大</div>
                            <div class="little" :class="[select.specification =='小' ? activeClass : '']">小</div>
                        </div>
                        <div class="temperature select">
                            <span>温度</span>
                            <div class="ice" :class="[select.temperature =='冰' ? activeClass : '']">冰</div>
                            <div class="hot" :class="[select.temperature =='热' ? activeClass : '']">热</div>
                        </div>
                        <div class="sugar select">
                            <span>糖度</span>
                            <div class="halfsugar" :class="[select.sugar =='半糖' ? activeClass : '']">半糖</div>
                            <div class="singlesugar" :class="[select.sugar =='单糖' ? activeClass : '']">单糖</div>
                        </div>
                        <div class="milk select">
                            <span>奶　</span>
                            <div class="nonemilk" :class="[select.milk =='无奶' ? activeClass : '']">无奶</div>
                            <div class="singlemilk" :class="[select.milk =='单份奶' ? activeClass : '']">单份奶</div>
                            <div class="doublemilk" :class="[select.milk =='双份奶' ? activeClass : '']">双份奶</div>
                        </div>
                    </div>
                    <div class="goodsDescribe">
                        <h4>商品描述</h4>
                        <p>{{goods.describe}}</p>
                    </div>
                    <div class="goodsQty">
                        <div class="Ql">
                            <span>￥{{goods.price}}</span>
                            <p>{{goods.pronameC}} {{select.specification}}杯 + {{select.temperature}} + {{select.sugar}} + {{select.milk}}</p>
                        </div>
                        <div class="Qr">
                            <span class="reduce">-</span>
                            <span class="qty">{{select.qty}}</span>
                            <span class="add">+</span>
                        </div>
                    </div>
                    <div class="fun">
                        <div class="coupon">
                            <img src="../../img/coupon.png">
                            买2赠1,买5赠5
                        </div>
                        <div class="collect">
                            <img src="../../img/collect.png">
                            收藏口味
                        </div>
                        <div class="car" @click="add">
                            <img src="../../img/car.png">
                            加入购物车
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="lc_menu">
            <menus></menus>
        </div> -->
    </div>
</template>

<script>
    // import menus from '../menu/menu.vue';

    import http from '../../utils/httpclient.js'
    import './goodslist.css';

    var goodslist = [
                    {id:1,pornameE:'标准美式',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'大师咖啡'},
                    {id:2,pornameE:'标准美式',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'零度拿铁'},
                    {id:3,pornameE:'卡布奇诺瑞纳冰',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'瑞纳冰'},
                    {id:4,pornameE:'加浓美式',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'大师咖啡'},
                    {id:5,pornameE:'红茶拿铁',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'零度拿铁'},
                    {id:6,pornameE:'焦糖标准美式',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'大师咖啡'},
                    {id:7,pornameE:'百香芒果瑞纳冰',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'瑞纳冰'},
                    {id:8,pornameE:'抹茶拿铁',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'零度拿铁'},
                    {id:9,pornameE:'焦糖加浓美式',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'大师咖啡'},
                    {id:10,pornameE:'热巧克力',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'经典饮品'},
                    {id:11,pornameE:'巧克力核桃麦芬',pornameC:'Americano',price:'21',url:'src/project/img/1.jpg',
                    describe:'Espresso与水的黄金配比，带来最纯粹的咖啡芬芳，成为脑海中挥之不去的绝妙体验。',
                    classify:'健康轻食'},
                ]
    export default {
        data(){
            return {
                mark: 0,
                bann: [
                    {path:'src/project/img/timg1.jpg'},
                    {path:'src/project/img/timg2.jpg'},
                    {path:'src/project/img/timg3.jpg'},
                ],
                classify: [],
                goodsList:[],
                goodsClassif: [],
                goods:'',
                select:{
                    specification:'大',
                    temperature:'热',
                    sugar:'半糖',
                    milk:'无奶',
                    qty:1
                },
                activeClass:'brillancy',
                details:false

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

            
            show(e){
                this.details = true;
                var e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName != 'LI'){
                    var id = target.parentNode.id;
                } else {
                    var id = target.id;
                }
                for(var i=0;i<this.goodsList.length;i++){
                    if(this.goodsList[i]._id == id){
                        this.goods = this.goodsList[i];
                    }
                }
            },

            fun(e){
                var e = e || window.event;
                var target = e.target || e.srcElement;
                var tarName = target.className.toLowerCase();
                if(tarName === 'big'){
                    this.select.specification = '大'
                } else if(tarName === 'little'){
                    this.select.specification = '小'
                }else if(tarName === 'ice'){
                     this.select.temperature = '冰'
                }else if(tarName === 'hot'){
                    this.select.temperature = '热'
                }else if(tarName === 'singlesugar'){
                    this.select.sugar = '单糖'
                }else if(tarName === 'halfsugar'){
                    this.select.sugar = '半糖'
                }else if(tarName === 'nonemilk'){
                    this.select.milk = '无奶'
                } else if(tarName === 'doublemilk'){
                    this.select.milk = '双份奶'
                } else if(tarName === 'singlemilk'){
                    this.select.milk = '单份奶'
                } else if(tarName == 'reduce'){
                    if(this.select.qty == 1){
                        return
                    } else{
                        this.select.qty -= 1;
                    }
                } else if(tarName == 'add'){
                    this.select.qty += 1;
                } else if(tarName == 'end'){
                    this.details = false;
                    this.select.specification = '大'
                    this.select.temperature = '热'
                    this.select.sugar = '单糖'
                    this.select.milk = '无奶'
                    this.select.qty = 1
                }
            },
            
            add:function(){
                let goods = this.goods
                goods.specification = this.select.specification;
                goods.temperature = this.select.temperature;
                goods.sugar = this.select.sugar;
                goods.milk = this.select.milk;
                goods.qty = this.select.qty;
                http.post('shoppingcaradd',goods).then((res)=>{
                    if(res.status){
                        this.details = false;
                        this.select.specification = '大'
                        this.select.temperature = '热'
                        this.select.sugar = '单糖'
                        this.select.milk = '无奶'
                        this.select.qty = 1
                    }
                })
            }

        },
        mounted(){
            this.play();

            http.goods('showproducts').then((res)=>{
                if(res.status){
                    this.goodsList = res.data
                }
                for(var i=0;i<this.goodsList.length;i++){
                    if(this.classify.indexOf(this.goodsList[i].classify)<0){
                        this.classify.push(this.goodsList[i].classify)
                    };
                }

                for(var i=0;i<this.classify.length;i++){
                    var mes = this.classify[i]
                    this.goodsClassif[i] = [];
                    for(var j=0;j<this.goodsList.length;j++){
                        if(this.goodsList[j].classify === mes){
                            this.goodsClassif[i].push(this.goodsList[j])
                        }
                    }
                }
            })

            
        },
    }
</script>


