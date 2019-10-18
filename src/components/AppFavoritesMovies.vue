<template>
<div v-if="results.length != []" :key="results.id" :class="className">
    <app-movie-output
        :className = className
        :results = results
    >
    </app-movie-output>
</div>
</template>

<script>
import {GET_DETAIL_MOVIE} from '../constants';
import AppMovieOutput from './AppMovieOutput';

export default {
    data() {
        return {
            results: [],
            favorites: [],
            className: "popularMovies"
        }
    },
    created() {
        let users = this.$store.state.users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].user == this.$store.state.login) {
                users[i].favorites.map(favorite => {
                    this.$store.dispatch(GET_DETAIL_MOVIE, favorite)
                    .then(res => {
                        this.results.push(res);
                    });
                });
            }
        }
    },
    methods: {

    },
    computed: {

    },
    components: {
        AppMovieOutput
    }
}
</script>

<style scoped>
.popularMovies {
    margin-top: 30px;
}
</style>