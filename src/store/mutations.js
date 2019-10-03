import Vue from 'vue'
import {GET_POPULAR_MOVIES} from '../constants'

export default {
    [GET_POPULAR_MOVIES]: (store, data) => {
        console.log(store.count);
        console.log(data);
        store.count++;
        // Vue.set(state, 'count', state.count++);
    }
}