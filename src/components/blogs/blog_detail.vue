<template>
    <div>
        <h4>{{getBlogById.title}}</h4>
        <p>{{getBlogById.body}}</p>

    </div>

</template>
<script>
    export default {
        data(){
            return{
                blogId:null
            }
        },
        created(){
            this.blogId = this.$route.params.blogId;
            this.$store.dispatch("getBlogById",this.blogId);
        },
        mounted(){


        },
        computed:{
            getBlogById(){
                return this.$store.getters.blogById;
            }
        }
    }
</script>
<style>

</style>