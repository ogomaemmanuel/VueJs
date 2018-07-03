<template>
    <div>

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
            this.blogId = this.$route.params.id;
        },
        mounted(){

        }
    }
</script>
<style>

</style>