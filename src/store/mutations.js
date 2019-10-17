import Vue from 'vue'
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CHECK_USER, LOGOUT, SUCCESS} from '../constants'

export default {
    [ADD_TO_FAVORITES]: (store, id) => {
        store.favorites.push(id);
    },
    [REMOVE_FROM_FAVORITES]: (store, id) => {
        store.favorites.splice(store.favorites.indexOf(id), 1);
    },
    [CHECK_USER]: (store, payload) => {
        console.log(store.users.length);
        for (let i=0; i<store.users.length; i++) {
            if (store.users[i].user == payload.payload[0].user) {
                if (store.users[i].password == payload.payload[1].password) {
                    //store.login = true;
                    console.log(payload.payload[0].user);
                    store.login = payload.payload[0].user;
                    return;
                }
            }
        }
        store.login = false; // мб трабл в этом?
    },
    [LOGOUT]: (store) => {
        store.login = false;
    }
}