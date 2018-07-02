<template>
    <div>
        <div class="row">
            <button class="button" @click="showCreateForm()" type="button">New</button>
        </div>

        <div v-if="revealform==true">
            <form>
                <input v-model="note.title" placeholder="Enter Note Title" type="text"/>
                <input v-model="note.description" placeholder="description" type="text">
                <select v-model="note.type" name="type" id="notetype">
                    <option value="Text">Text</option>
                    <option value="Code">Code</option>
                </select>
                <textarea v-bind:maxlength="notecontentLength" @input="changeNoteBackground()" v-bind:class="[{codebackground: isCode},null ]" v-model="note.content" name="" id=""
                          cols="30" rows="10"></textarea>
                <span>{{contentLengthMessage}}</span>
            </form>
            <button data-tooltip aria-haspopup="true" class="has-tip button" data-disable-hover="false" tabindex="1" title="Fancy word for a beetle." v-on:click="addNote()" type="button">Add Note
            </button>
            <note_list v-if="notes.length>0" :notelist="notes">
                <h4>My Notes</h4>

            </note_list>
        </div>


    </div>
</template>
<script>
    import note_list from "./note-list.vue";
  import { EventBus } from './event-bus.js';

    export default {
        components: {
            note_list,
        },
        data() {
            return {
                note: {
                    title: "",
                    description: "",
                    content: "",
                    type:""
                },
                notecontentLength:400,
                revealform: false,
                notes: [],
                isCode: false,
                contentLengthMessage:"",

            }

        },
        methods: {
            addNote: function () {
                this.notes.push(this.note);
                let vm = this;

                EventBus.$emit("recordCreated", "New Note");
                this.note={
                    title: "",
                    description: "",
                    content: "",
                    type:""
                };
            },

            showCreateForm: function () {
                this.revealform = true;
            },
            changeNoteBackground(){
                if(this.note.type==="Code"){
                    this.isCode=true;
                }else{
                    this.isCode=false;
                }

            }

        },
        watch:{
            'note.content':function (newValue) {
                if (newValue.length){
                    if (newValue.length == this.notecontentLength) {
                        this.contentLengthMessage = "Remaining " + (this.notecontentLength - newValue.length);

                    }
                    else {
                        this.contentLengthMessage = "Remaining " + (this.notecontentLength - newValue.length);
                    }
            }



            }
            //note: function (noteValue) {



            //},

        }
    }

</script>
<style>
    .codebackground {
        background: #000000 !important;
        color: #ffff00;
    }

</style>