<template>
<div>
    <div class="grid-x">
        <div class="small-12 medium-3 large-3 cell">
            <div class="card-user-container">

                <!--card's image-->
                <div class="card-user-avatar">
                    <img src="https://placehold.it/200x200" alt="" class="user-image">
                </div>

                <!--user info name, bio and location-->
                <div class="card-user-bio">
                    <h4>User Name</h4>
                    <p>UX/UI ,Front-end developer, Foundation interested. </p>
                    <span class="location"><span class="location-icon fa fa-map-marker"></span><span class="location-text">Makkah Al-Mukaramah</span></span>
                </div>

                <!--card's socail icons-->
                <div class="card-user-social">
                    <ul class="menu">
                        <li class="fa fa-twitter"></li>
                        <li class="fa fa-dribbble"></li>
                        <li class="fa fa-instagram"></li>
                        <li class="fa fa-github"></li>
                    </ul>
                </div>

                <!--card's follow button-->
                <div class="card-user-button">
                    <a href="#" class="hollow button">FOLLOW</a>
                </div>
            </div>
        </div>
        <div class="small-12 medium-9 large-9 cell">
            <div class=" button-group">
                <a @click="showComposeMessage()" class="button">Compose Message</a>
                <a @click="showInbox()" class="button">Inbox</a>
                <a @click="showSettings()" class="button">Settings</a>
                <a class="button">Sent Mail</a>
            </div>
<keep-alive>
    <component v-bind:is="current_mail_page"></component>
</keep-alive>

        </div>
    </div>



</div>
</template>
<script>
    import mail_inbox from "./mail_inbox.vue"
    import compose_mail from "./compose_mail.vue";
    import loading_alert from '../loading_alert.vue'
    const settingsComponent = () => ({

        component: import('./settings.vue'),
        // A component to use while the async component is loading
        loading: loading_alert,
        // A component to use if the load fails

        // Delay before showing the loading component. Default: 200ms.
        delay: 20000,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 3000
    })

export  default{
       components:{
           "settingsComponent":settingsComponent,
           "mail_inbox": mail_inbox,
           "compose_mail": compose_mail,
       },
    data(){
       return{
           user:{
               userName:"Emmanuel",
               dob: new Date(),

           },
           current_mail_page:"compose_mail",
       }

    },
    methods:{
        showComposeMessage:function () {
            this.current_mail_page="compose_mail";

        },
        showInbox: function () {
            this.current_mail_page="mail_inbox";

        },
        showSettings:function () {
            this.current_mail_page="settingsComponent";

        }

    }
}
</script>
<style>

    .card-user-container {
        margin-bottom: 1rem;
        background-color: #fefefe;
        color: #0a0a0a;
        overflow: hidden;
        padding: 0;
        border-radius: 0;
    }

    .card-user-container .card-user-avatar .user-image {
        display: block;
        margin: auto;
        border-radius: 50%;
        width: 11.875rem;
        height: 11.875rem;
        padding: 0.9375rem;
    }

    .card-user-container .card-user-avatar .user-image:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }

    .card-user-container .card-user-bio {
        padding: 1rem;
        text-align: center;
    }

    .card-user-container .card-user-bio .location {
        display: inline-block;
        margin: 0 0.9375rem;
        color: #767676;
        font-size: 0.875rem;
    }

    .card-user-container .card-user-bio .location-icon,
    .card-user-container .card-user-bio .location-text {
        display: inline-block;
        padding: 0 0.3125rem;
    }

    .card-user-container .card-user-social {
        background: #e6e6e6;
        padding: 1rem;
        text-align: center;
    }

    .card-user-container .card-user-social ul {
        display: inline-block;
    }

    .card-user-container .card-user-social ul li {
        margin: 0 10px;
        font-size: 1.2em;
        cursor: pointer;
    }

    .card-user-container .card-user-social ul li:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }

    .card-user-container .card-user-button {
        text-align: center;
        padding: 1rem;
    }


</style>