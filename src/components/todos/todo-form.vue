<template>
    <div>
        <form>
            <input v-model="todo.title" id="todo-title-txt" type="text"></input>
            <input v-model="todo.description" id="todo-description-txt" type="text"></input>
            <input v-model="todo.startDate" id="todo-start-date" type="datetime-local"></input>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                todo:{
                    title:"",
                    desription:"",
                    starrdate:null
                },


            }
        },

    }
</script>