import Vue from 'vue'
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CHECK_USER, SUCCESS} from '../constants'

export default {
    [ADD_TO_FAVORITES]: (store, id) => {
        store.favorites.push(id);
    },
    [REMOVE_FROM_FAVORITES]: (store, id) => {
        store.favorites.splice(store.favorites.indexOf(id), 1);
    },
    [CHECK_USER]: (store, payload) => {
        for (let i=0; i<store.users.length; i++) {
            if (store.users[i].user == payload.payload[0].user) {
                if (store.users[i].password == payload.payload[1].password) {
                    store.login = true;
                    return;
                }
            }
        }
        store.login = false;
    }
}