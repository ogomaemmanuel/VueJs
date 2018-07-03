<template>
    <div>
        <table>
            <thead>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>

            </thead>
            <tbody>
            <tr :key="post.id" v-for="post in getBlogs">
                <td>{{post.userId}}</td>
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}
                    <router-link :to="{ name: 'blogdetail', params: {blogId: post.id } }">more..</router-link>
                </td>
            </tr>
            </tbody>
        </table>
        <router-view></router-view>

    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                posts: [],
            }


        },
       mounted(){
            this.$store.dispatch("loadBlogs")
       },


        methods: {
            ...mapGetters(['loadBlogs']),

        },
        computed: {
            getBlogs(){
              return  this.$store.getters.blogs
            }


        }

    }


</script>
<style>

</style>