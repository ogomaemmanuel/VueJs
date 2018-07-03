<script>
    import Vue from 'vue';
    import Router from 'vue-router';

    Vue.use(Router);
    import note from '../notes/note.vue';
    import profile from '../userprofile/profile.vue';
    import my_notes from '../notes/my-notes.vue';
    import blog from '../blogs/blog.vue'
    import blog_create from '../blogs/blog_create.vue'
    import blog_list from '../blogs/blog_list.vue'
    import blog_detail from "../blogs/blog_detail.vue"
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
        {
            path: "/blog",
            name: 'blog',
            component: blog ,
            children:[
                {
                    path: "/blog-create",
                    name: 'blogcreate',
                    component: blog_create ,
                },
                {
                    path: "/blog-list",
                    name: 'bloglist',
                    component: blog_list ,
                 }

                 ,
                  {
                      path: "/blog_detail/:blogId",
                      name: 'blogdetail',
                      component: blog_detail ,
                   }

            ]

        },
        {path: '*', redirect: "/"}
    ]
    export default new Router({
        routes: approutes
    })


</script>