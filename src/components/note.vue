<template>
    <div>
        <div class="row">
            <button v-if="revealform==true" type="button">New</button>
        </div>

        <div>
            <form>
            <input v-model="note.title" placeholder="Enter Note Title" type="text"/>
            <input v-model="note.description" placeholder="description" type="text">
            <textarea v-model="note.content" name="" id="" cols="30" rows="10"></textarea>
            </form>
            <button class="button" type="button">Add Note</button>
            <note_list :newnotes="notes"></note_list>
        </div>



    </div>
</template>
<script>
    import note_list from "./note-list.vue";

    export default {
        components:{
            note_list,
        },
        data() {
            return{
                note :{
                    title: "",
                    description: "",
                    content: "",
                },
            revealform : false,
            notes : []

        }

        },
        methods: {
            addNote: function () {
                this.notes.push(this.note);
            },

            showCreateForm: function () {
                this.realform = true;
            }

        }
    }

</script>
<style>

</style>