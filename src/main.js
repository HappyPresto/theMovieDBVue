import Vue from 'vue'
import {store} from './store/'
import router from './router/'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

