<template>
    <div>
        <form>
            <input v-model="mail.to" id="todo-title-txt" type="text"/>
            <input v-model="mail.subject" id="todo-description-txt" type="text"/>
            <textarea v-model="mail.message"></textarea>
            <button class="button" @click="addTodo()" type="button">Send</button>
        </form>
    </div>
</template>
<script>


    export default {
        data(){
            return {
                mail:{
                    to:"",
                    subject:"",
                    message:null
                },

            }
        },
        methods:{
            sendMail(){


            },

        },


    }
</script>
