import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const state = {
    blogs: [],
    blogById:{}
};
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
};
const getters={
    blogs:state=>state.blogs,
    blogById:state=>state.blogById,
};


const actions = {
    loadBlogs(store) {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
            store.commit("LOAD_BLOGS", response.data);

        })

    },
    addBlog(store, newBlog){
        store.commit(newBlog)
    },
    getBlogById(store,blogId){
        axios.get("https://jsonplaceholder.typicode.com/posts/"+blogId).then(function (response) {
            store.commit("GET_BLOG_BY_ID", response.data);

        })
    }


};

const store = new Vuex.Store({
    state, getters, mutations,actions
});

export default store;