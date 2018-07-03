<template>
    <div id="app">
       <home></home>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    window.EventBus = new Vue();
    import home from "./components/home.vue"
    export default {
     components:{
         home,
     }

    }
</script>

<style>
.red{
    color: red;
}

</style>
