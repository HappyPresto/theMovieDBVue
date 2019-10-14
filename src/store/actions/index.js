import Vue from 'vue'
import {GET_POPULAR_MOVIES, GET_DETAIL_MOVIE, GET_SIMILAR_MOVIE, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, NOW_IN_THE_CINEMA, CHECK_USER, START, SUCCESS, FAIL} from '../../constants'
const theMovieDBApiKey = 'e5508ea1bc1c68bba86b598d4aea81c9';

export default {
    [GET_POPULAR_MOVIES]: (store, payload) =>
        Vue.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${theMovieDBApiKey}&language=en-US&page=1`)
            .then(res => {
                if(res.error){
                    throw new Error(res.message)
                }
                return res.data
            }).catch(err => {
                console.error(err)
            }),
        //store.commit('POPULAR_MOVIES')
    [GET_DETAIL_MOVIE]: (store, id) =>
        Vue.axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${theMovieDBApiKey}`)
            .then(res => {
                if (res.error){
                    throw new Error(res.message)
                }
                return res.data
            }).catch(err => {
                console.error(err)
            }),
    [GET_SIMILAR_MOVIE]: (store, id) =>
        Vue.axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${theMovieDBApiKey}`)
        .then(res => {
            if (res.error){
                throw new Error(res.message)
            }
            return res.data
        }).catch(err => {
            console.error(err)
        }),
    [NOW_IN_THE_CINEMA]: (store) =>
    Vue.axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${theMovieDBApiKey}`)
        .then(res => {
            if (res.error){
                throw new Error(res.message)
            }
            return res.data
        }).catch(err => {
            console.error(err)
        }),
    [ADD_TO_FAVORITES]: (store, payload) => 
        store.commit(ADD_TO_FAVORITES, payload.id)
    ,
    [REMOVE_FROM_FAVORITES]: (store, payload) =>
        store.commit(REMOVE_FROM_FAVORITES, payload.id)
    ,
    [CHECK_USER]: (store, payload) => {
            store.commit(CHECK_USER, payload);
        }
    }
/*
http://image.tmdb.org/t/p/w185/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg
*/