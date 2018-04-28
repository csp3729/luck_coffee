<template>
    <div>
        <!-- <h1>test</h1> -->
        <router-view></router-view>
        <div class="lc_menu">
            <menus></menus>
        </div>
    </div>
</template>

<script>
    import menus from '../menu/menu.vue';
    import './app.css';
    
    export default {
        components:{
            menus,
        }
    }
</script>
