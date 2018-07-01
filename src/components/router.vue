<script>
    import Vue from 'vue';
    import Router from 'vue-router';

    Vue.use(Router);
    import note from './note.vue';
    import profile from './profile.vue';
    import my_notes from './my-notes.vue';
    const approutes = [
        {
            path: "/",
            name: 'note',
            component: note
        },
        {
            path: "/profile",
            name: 'profile',
            component: profile,

        },
        {
            path: "/mynotes",
            name: 'mynotes',
            component: my_notes,

        },
        {path: '*', redirect: "/"}
    ]
    export default new Router({
        routes: approutes
    })


</script>