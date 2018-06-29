<template>
    <div>
        <form>
            <input v-model="todo.title" id="todo-title-txt" type="text"></input>
            <input v-model="todo.description" id="todo-description-txt" type="text"></input>
            <input v-model="todo.startDate" id="todo-start-date" type="datetime-local"></input>
            <button @click="addTodo()" type="button">Add ToDo</button>
            <todo_list v-on:user-deleted="alertUserDeleted(deletedUser)" :todos="todos"></todo_list>
            <spa v-if="todoDeleted">
                {{deletedTodoTitle}}
            </spa>
        </form>
    </div>
</template>
<script>
    import Vue from 'vue'

    Vue.component('todo_list',require('../components/todo-list.vue').default);

    export default {
        data(){
            return {
                todo:{
                    title:"",
                    desription:"",
                    starrdate:null
                },
                deletedTodoTitle:null,
                todoDeleted:false,
                todos:[],

            }
        },
        methods:{
            addTodo(){
                this.todos.push(this.todo)
                this.todo={};

            },
            showDeleteMessage(deteletedYser){
                console.log()
                this.todoDeleted=true;

            }
        },


    }
</script>
