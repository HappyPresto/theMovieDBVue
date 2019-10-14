import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions/'
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        favorites: [],
        login: false,
        users: [
            {
                user: "Admin",
                password: "admin",
                favorites: "",
                login: false
            }, 
            {
                user: "User",
                password: "12345",
                favorites: "",
                login: false
            }
        ]
    },
    getters: {

    },
    actions,
    mutations,
  });