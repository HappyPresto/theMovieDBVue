import Vue from 'vue'
import {GET_POPULAR_MOVIES, GET_DETAIL_MOVIE, GET_SIMILAR_MOVIE, START, SUCCESS, FAIL} from '../../constants'
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

    }
/*
http://image.tmdb.org/t/p/w185/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg
*/