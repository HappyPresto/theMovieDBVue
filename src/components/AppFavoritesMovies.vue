<template>
<div v-if="results.length != []" :key="results.id">
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
            className: ""
        }
    },
    created() {
        this.$store.state.favorites.map(favorite => {
            this.$store.dispatch(GET_DETAIL_MOVIE, favorite)
                .then(res => {
                    this.results.push(res);
                })

        });
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