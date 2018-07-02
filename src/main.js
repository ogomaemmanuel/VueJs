import Vue from 'vue'
import App from './App.vue'
import router from './components/router.vue';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import  '../node_modules/jquery/dist/jquery.min';
import '../node_modules/axios/dist/axios.min'


Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
