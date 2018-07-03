<template>
    <div>
        <form>

            <todo_list :todos="todos"></todo_list>
        </form>
    </div>
</template>
<script>
    import Vue from 'vue'

    Vue.component('todo_list',require('./todo-form.vue').default);

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