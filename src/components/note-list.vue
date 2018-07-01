<template>
<div>
    <slot></slot>
    <input v-model="searchterm" type="text">
    <table>
        <thead>
        <th>Title</th>
        <th>
           Description
        </th>
        <th>
            Content
        </th>
        <th>

        </th>
        </thead>
        <tbody>
        <tr v-for="usernote in filteredNotes" :key="usernote.title">
            <td>{{usernote.title}}</td>
            <td>{{usernote.description}}</td>
            <td>{{usernote.content}}</td>
            <td> <button class="button">Delete</button> </td>
        </tr>
        </tbody>
    </table>
</div>

</template>
<script>
    export default{
        props:["notelist"],
        data(){
            return{
                searchterm:"",

            }

        },
        computed:{
            filteredNotes:function () {

                if(this.searchterm==""){
                    return this.notelist;
                }
                else
                    return  this.notelist
                        .filter(note=>note.title.toLowerCase()
                        .indexOf(this.searchterm.toLowerCase())!==-1);

            }
        }
    }

</script>
<style>

</style>