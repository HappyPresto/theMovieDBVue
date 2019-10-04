import Vue from 'vue'
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../constants'

export default {
    [ADD_TO_FAVORITES]: (store, id) => {
        store.favorites.push(id);
    },
    [REMOVE_FROM_FAVORITES]: (store, id) => {
        store.favorites.splice(store.favorites.indexOf(id), 1);
    },
}