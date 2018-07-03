import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const state = {
    blogs: []
};
const mutations = {
    LOAD_BLOGS(state, blogs) {
        state.blogs = blogs;

    }
};
const getters={
    blogs: state => state.blogs
};


const actions = {
    loadBlogs(store) {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
            store.commit("LOAD_BLOGS", response.data);

        })

    }


};

const store = new Vuex.Store({
    state, getters, mutations,actions
});

export default store;