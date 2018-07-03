//import axios from 'axios'

const state = {
    blogs: [],
    blogById:{}
}
const mutations = {
    LOAD_BLOGS(state, blogs) {
        state.blogs = blogs;

    },
    ADD_BLOG(state,newBlog){
        state.blogs=state.blogs.push(newBlog)

    },
    GET_BLOG_BY_ID(state,newBlogById){
        state.blogById=newBlogById;

    }
}
const getters={
    blogs:state=>state.blogs,
    blogById:state=>state.blogById,
}

const actions = {
    loadBlogs(store) {
        this.axios.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
            store.commit("LOAD_BLOGS", response.data);

        })

    },

    addBlog(store, newBlog){
        store.commit(newBlog)
    },
    getBlogById(store,blogId){
        this.axios.get("https://jsonplaceholder.typicode.com/posts/"+blogId).then(function (response) {
            store.commit("GET_BLOG_BY_ID", response.data);

        })
    }


}

export default {
    state,
    actions,
    mutations,
    getters,

}
