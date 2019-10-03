import Vue from 'vue';
import VueRouter from 'vue-router';

import AppPopular from '../components/AppPopular';
import AppDetail from '../components/AppDetail';

Vue.use(VueRouter);

const Movie = {
    props: ['id'],
    template: AppDetail
}

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
    ]
});

// path: '/movie/:id'