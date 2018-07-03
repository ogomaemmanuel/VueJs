<template>
    <div>
        <form>
            <input v-model="todo.title" id="todo-title-txt" type="text"></input>
            <input v-model="todo.description" id="todo-description-txt" type="text"></input>
            <input v-model="todo.startDate" id="todo-start-date" type="datetime-local"></input>
            <button @click="addTodo()" type="button">Add ToDo</button>
            <todo_list :todos="todos"></todo_list>
        </form>
    </div>
</template>
<script>
    import Vue from 'vue'

    Vue.component('todo_list',require('./todo-list.vue').default);

    export default {
        data(){
            return {
                todo:{
                    title:"",
                    desription:"",
                    starrdate:null
                },
                todos:[],

            }
        },
        methods:{
            addTodo(){
                this.todos.push(this.todo)
                this.todo={};

            }
        }

    }
</script>