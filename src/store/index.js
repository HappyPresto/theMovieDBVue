import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions/'
import mutations from './mutations'
import {INCREMENT} from '../constants'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {

    },
    actions,
    mutations,
  });