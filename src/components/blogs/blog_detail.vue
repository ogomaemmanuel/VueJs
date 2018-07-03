<template>
    <div>
        <h4>{{getBlogById.title}}</h4>
        <p>{{getBlogById.body}}</p>
<button class="button" @click="goToBlogList()" type="button">Back</button>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                blogId:null
            }
        },
        methods:{
            goToBlogList(){
                this.$router.go(-1);
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