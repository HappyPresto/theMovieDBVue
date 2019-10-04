import Vue from 'vue';
import VueRouter from 'vue-router';

import AppPopular from '../components/AppPopular';
import AppDetail from '../components/AppDetail';
import AppFavoritesMovies from '../components/AppFavoritesMovies';
import AppNowInTheCinema from '../components/AppNowInTheCinema';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
    {
        path: '/',
        name: 'main',
        component: AppPopular
    },
    {
        path: '/detail/:id',
        name: 'MovieDetail',
        component: AppDetail,
    },
    {
        path: '/favorites/',
        name: "Favorites Movie",
        component: AppFavoritesMovies
    },
    {
        path: '/nowplaying',
        name: "Now in the Cinema",
        component: AppNowInTheCinema
    },
    ]
});

// path: '/movie/:id'