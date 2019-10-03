<template>
    <div class='popularMovies'
            v-if="results.length > 0"
    >
        <div class="popularMovies__list">
            <div class="popularMovies__el"
                    v-for="(movie, index) in results" :key="index"
            >
                <h3>{{movie.title}}</h3>
                <p>{{movie.overview}}</p>
                <router-link :to="'/detail/' + movie.id"><button class="btn btn-success">More</button></router-link> 
            </div>
        </div>
    </div>
</template>

<script>
//import AppInput from './components/Input';
import {GET_POPULAR_MOVIES, START, SUCCESS, FAIL} from '../constants'

export default {
    data() {
        return {
            results: []
        }
    },			
    created() {
        this.$store.dispatch({
            type: GET_POPULAR_MOVIES,
        })
        .then(res=>{
            this.results = res.results;
            console.log(this.results);
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
    }
}
</script>

<style scoped>
</style>