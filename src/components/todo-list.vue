<template>
<div>
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

        <tbody>
        <tr v-for="todo in todos">
            <td>{{todo.id}}</td>
            <td>{{todo.createDate}}</td>
            <td>{{todo.description}}</td>
            <td>{{todo.startDate}}</td>
            <td><button class="button" type="button" @click="deleteToDo(todo)">Delete</button></td>
        </tr>
        </tbody>
    </table>

</div>

</template>
<script>
export default {
    props:["todos"],
    components:{

    },

    data(){
        return{

        }
    },
    methods:{
        deleteToDo:function(todoToDelete){
            //this.todos=this.todos.filter(todo => todo.id!==todoToDelete.id );
            this.todos.$remove(todoToDelete);
            this.$emit("user-deleted",id);

        }
    }

}


</script>

