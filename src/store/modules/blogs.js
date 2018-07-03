//import axios from 'axios'

const state = {
    blogs: []
}
const mutations = {
    LOAD_BLOGS(state, blogs) {
        state.blogs = blogs;

    }
}
const getters={
    blogs:state=>state.blogs
}

const actions = {
    loadBlogs(store) {
        this.axios.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
            store.commit("LOAD_BLOGS", response.data);

        })

    }


}

export default {
    state,
    actions,
    mutations,
    getters,

}
