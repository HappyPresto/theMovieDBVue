<template>
<div class="detailMovie" v-if="detailMovie.length != []" :key="detailMovie.id">
    <h3>{{detailMovie.title}}</h3>
    <app-favorites 
        :id="detailMovie.id">
    </app-favorites>
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
            <div class="detailMovie__similarMovie-rating">
                <span class="detailMovie__similarMovie-rating-voteAverage">{{similarMovie.vote_average}}</span>
                <span class="detailMovie__similarMovie-rating-voteCount">{{similarMovie.vote_count}}</span>
            </div>
            <router-link :to="'/detail/' + similarMovie.id" class="btn btn-success">More</router-link> 
            <hr>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {GET_DETAIL_MOVIE, GET_SIMILAR_MOVIE} from '../constants';
import AppFavorites from './AppFavorites';

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
                let tenMovies = [];  
                tenMovies = res.results.map((el) => {
                    return el;
                });
                tenMovies.length = 10;
                this.similarMovies = tenMovies;
            })
    },
     computed:{
         favorites(){
             return this.$store.state.favorites;
         }
     },
     components: {
         AppFavorites
     }
}
</script>