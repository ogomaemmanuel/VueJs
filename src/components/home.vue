<template>
<div>
    <div class="apptitle">
        {{appname}}
    </div>
    <div class="row">
            <div class="small-2 large-4 columns">
                <side_menu>

                </side_menu>
                <router-link to="/">Home</router-link>
                <router-link to="/profile">My Profile</router-link>
            </div>
            <div class="small-10 large-8 columns">

                <router-view></router-view>
            </div>
    </div>


    <div></div>
</div>
</template>
<script>
    import side_menu from './side-menu.vue'

export default {
        data(){
            return{
                appname:"Notes App"

        }

        },

        components:{
            side_menu,

        },

}
</script>
<style>

</style>