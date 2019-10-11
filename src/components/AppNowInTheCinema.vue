<template>
<div :class="className">
    <app-movie-output
        :className = className
        :results = results
    >
    </app-movie-output>
</div>
</template>

<script>
import {NOW_IN_THE_CINEMA} from '../constants';
import AppMovieOutput from './AppMovieOutput';

export default {
    data() {
        return {
            results: [],
            className: "nowPlayingMovies",
        }
    },			
    created() {
        this.$store.dispatch({
            type: NOW_IN_THE_CINEMA,
        })
        .then(res=>{
            this.results = res.results;
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

<style scoped>
.nowPlayingMovies {
    margin-top: 30px;
}
</style>