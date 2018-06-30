
<script>
    import Vue from 'vue';
    import Router from 'vue-router';

    Vue.use(Router);
    import note from './note.vue'
    import profile from './profile.vue'
    const approutes=[
        {
            path:"/",
            name:'note',
            component: note },
        {
            path:"/profile",
            name:'profile',
            component: profile ,

        },
        {path:'*', redirect:"/"}
    ]
export default  new Router({
        routes:approutes
    })




</script>