<template>
    <div id="app">

        <form>
            <input v-model="todo.title" id="todo-title-txt" type="text"></input>
            <input v-model="todo.description" id="todo-description-txt" type="text"></input>
            <input v-model="todo.startDate" id="todo-start-date" type="datetime-local"></input>
            <button @click="addTodo()" type="button">Add ToDo</button>
        </form>
        {{msg}}
       <span v-bind:class="{red:todos.length>10}">{{todos.length}}</span>
        <span v-if="todos.length>10">
            You added More than 10
        </span>

        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>Create Date</th>
                <th>Description</th>
                <th>Start Date </th>
                <th></th>
            </tr>
            </thead>
            <tr v-for="todo in todos">
                <td>{{todo.id}}</td>
                <td>{{todo.createDate}}</td>
                <td>{{todo.description}}</td>
                <td>{{todo.startDate}}</td>
                <button @click="deleteToDo(todo)">Delete</button>
            </tr>
            <tbody>

            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                msg: "Hello",
                todo: {},
                todos: [{
                    /*id: (new Date()).getTime(),
                    createDate: new Date(),
                    title: "Test Title",
                    description: "Task a",
                    startDate: new Date(),*/


                }]
            }
        },
        methods: {
            // need annotation due to `this` in return type

            addTodo() {
                this.todo.id=(new Date()).getTime();
                this.todo.createDate=new Date();
                this.todos.push(this.todo);
                this.todo={};
            },
            deleteToDo(todoToDelete) {
                console.log(todoToDelete);
                this.todos=this.todos.filter(todo => todo.id!==todoToDelete.id );

            }
        },

    }
</script>

<style>
.red{
    color: red;
}

</style>
