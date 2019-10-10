import Vue from 'vue';
import VueRouter from 'vue-router';

import AppPopular from '../components/AppPopular';
import AppDetail from '../components/AppDetail';
import AppNavigation from '../components/AppNavigation';
import AppFavoritesMovies from '../components/AppFavoritesMovies';
import AppNowInTheCinema from '../components/AppNowInTheCinema';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
    {
        path: '/',
        name: 'main',
        components: {
            default: AppPopular,
            navBar: AppNavigation
        }
    },
    {
        path: '/detail/:id',
        name: 'MovieDetail',
        components: {
            default: AppDetail,
            navBar: AppNavigation
        },
    },
    {
        path: '/favorites/',
        name: "Favorites Movie",
        components: {
            default: AppFavoritesMovies,
            navBar: AppNavigation
        }
    },
    {
        path: '/nowplaying',
        name: "Now in the Cinema",
        components: {
            default: AppNowInTheCinema,
            navBar: AppNavigation
        }
    },
    ]
});

// path: '/movie/:id'