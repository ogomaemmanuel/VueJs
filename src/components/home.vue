<template>
    <div>
        <div class="apptitle">
            {{appname}}
        </div>
        <div class="callout success">
            {{alertmessage}}
        </div>
        <div class="grid-x">
            <div class="small-2 large-2 cell">
                <side_menu>

                </side_menu>
                <ul class="menu vertical expanded">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/profile">My Profile</router-link>
                    </li>
                    <li>
                        <router-link to="/mynotes">Saved Notes</router-link>
                    </li>
                </ul>

            </div>
            <div class="small-10 large-10 cell">

                <router-view></router-view>
            </div>
        </div>


        <div></div>
    </div>
</template>
<script>

    import side_menu from './side-menu.vue'
   import { EventBus } from './event-bus.js';


    export default {
        data() {
            return {
                appname: "Notes App",
                alertmessage: "",

            }

        },
        created(){
            let vm = this;

            EventBus.$on("recordCreated",function (data) {

                 vm.alertmessage= data;

            })
        },

        components: {
            side_menu,

        },

    }

</script>

<style>

</style>