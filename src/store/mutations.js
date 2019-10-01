import Vue from 'vue'
import {INCREMENT} from '../constants'

export default {
    [INCREMENT]: (state) => {
        console.log(state.count);
        state.count++
        // Vue.set(state, 'count', state.count++);
    }
}