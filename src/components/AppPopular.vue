<template>
    <div :class="className"
            v-if="results.length > 0"
    >
        <!--<div class="popularMovies__list">
            <div class="popularMovies__el"
                    v-for="(movie, index) in results" :key="index"
            >
                <h3>{{movie.title}}</h3>
                <p>{{movie.overview}}</p>
                <router-link :to="'/detail/' + movie.id"><button class="btn btn-success">More</button></router-link> 
            </div>
        </div>-->
        <app-movie-output
            :className = className
            :results = results
        >
        </app-movie-output>
    </div>
</template>

<script>
//import AppInput from './components/Input';
import {GET_POPULAR_MOVIES, START, SUCCESS, FAIL} from '../constants';
import AppMovieOutput from './AppMovieOutput';

export default {
    data() {
        return {
            results: [],
            className: "popularMovies",
        }
    },			
    created() {
        this.$store.dispatch({
            type: GET_POPULAR_MOVIES,
        })
        .then(res=>{
            this.results = res.results;
        });     
    },
    methods: {
        getDetailMovie(id) {
            console.log(id);
        }
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    components: {
        AppMovieOutput,
    }
}
</script>

<style scoped>
</style>