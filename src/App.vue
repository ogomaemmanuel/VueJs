<template>
    <div id="app">
       <todo></todo>
    </div>
</template>

<script>
    import todo from "./components/todo.vue"
    export default {
     components:{
         todo,
     }

    }
</script>

<style>
.red{
    color: red;
}

</style>
