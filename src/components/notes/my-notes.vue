<template>
    <div>

<note_list :notelist="searchNotes">
    <h4>My Saved Notes</h4>
   
</note_list>
    </div>
</template>
<script>
    import note_list from './note-list.vue';
    export default {
        components:{
            note_list
        },
        data(){
            return{
                my_notes:[
                    {
                        title:"Html5 Webstorage",
                        description:"String user data client",
                        content:"storage.set('username','Emmanuel')"
                    },
                    {
                        title:"Angular Filters",
                        description:"Using Angular filter",
                        content:"app.module.filter('filter Name'," +
                        "function(){ return function(filterparams)" +
                        "{return computed result}})"
                    },
                    {
                        title:"Vue Installation",
                        description:"Installing vue via npm",
                        content:"npm install @cli/vue"
                    },
                ],
                searchterm:"",

            }
        },
        methods:{

        },
        computed:{
            searchNotes(){
                if(this.searchterm!==""||this.searchterm!==null){
                     return this.my_notes;
                } else {
                    return this.my_notes.filter(note=>note.title.toLowerCase().indexOf(this.searchterm)!==-1) ;
                }
            }
        }
    }


</script>
<style>

</style>