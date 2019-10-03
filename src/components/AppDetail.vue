<template>
<div class="detailMovie" v-if="detailMovie.legnth != []">
    <h3>{{detailMovie.title}}</h3>
    <p>Picture</p>
    <p class="detailMovie__release">{{detailMovie.release_date}}</p>
    <div class="detailMovie__rating">
        <span class="detailMovie__rating-voteAverage">{{detailMovie.vote_average}}</span>
        <span class="detailMovie__rating-voteCount">{{detailMovie.vote_count}}</span>
    </div>
    <div class="detailMovie__overview">
        {{detailMovie.overview}}
    </div>
    <div class="detailMobie__similar">
        <h4>Similar movies</h4>
        <div class="detailMovie__similarList">
            <div class="detailMovie__similarMovie"
                 v-for="(similarMovie, index) in similarMovies"
                 :key= index 
            >
            <p>{{similarMovie.title}}</p>
            <router-link :to="'/detail/' + similarMovie.id" class="btn btn-success">More</router-link> 
            <hr>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {GET_DETAIL_MOVIE, GET_SIMILAR_MOVIE} from '../constants';

export default {
    data() {
        return {
            detailMovie: [],
            similarMovies: []
        }
    },
    created(){
        this.$store.dispatch(GET_DETAIL_MOVIE, this.$route.params.id)
            .then(res => {
                this.detailMovie = res;
                console.log(this.detailMovie);
            })

        this.$store.dispatch(GET_SIMILAR_MOVIE, this.$route.params.id)
            .then(res => {     
                /*this.similarMovies = res.results.map((el) => {
                    console.log(el);
                })   */   
                this.similarMovies = res.results;
                console.log(this.similarMovies);
            })
    },
     computed:{
         movie(){
             return this.$store.state.movie;
         }
     }
}
</script>