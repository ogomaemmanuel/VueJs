<template>
<div>
    <h4>UserName: {{user.userName}}</h4>
    <h4> Dob: {{user.dob}}</h4>
</div>
</template>
<script>
export  default{
    data(){
       return{
           user:{
               userName:"Emmanuel",
               dob: new Date(),

           }
       }

    },
    methods:{


    }
}
</script>
<style>

</style>