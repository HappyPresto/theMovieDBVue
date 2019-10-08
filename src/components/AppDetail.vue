<template>
<div class="detailMovie" v-if="detailMovie.length != []" :key="detailMovie.id">
    <h3>{{detailMovie.title}}</h3>
    <div class="detailMovie__baseInfo">
        <p class="detailMovie__release">{{detailMovie.release_date}}</p>
        <div class="detailMovie__rating">
            <span class="detailMovie__rating-voteAverage"><i class="fas fa-star"></i> {{detailMovie.vote_average}}</span>
            <span class="detailMovie__rating-voteCount"><i class="fas fa-male"></i> {{detailMovie.vote_count}}</span>
        </div>
    </div>
    <app-favorites 
        :id="detailMovie.id">
    </app-favorites>
    <p>Picture</p>
    <div class="detailMovie__overview">
        {{detailMovie.overview}}
    </div>
    <hr />
    <div class="detailMobie__similar" :v-if="similarMovies != []">
        <h4>Similar movies</h4>
        <app-slider :className="'detailMovie__similarMovie'"
                    :obj="similarMovies"
        >
        </app-slider>
    </div>
</div>
</template>

<script>
import {GET_DETAIL_MOVIE, GET_SIMILAR_MOVIE} from '../constants';
import AppFavorites from './AppFavorites';
import AppSlider from './AppSlider';

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
         AppFavorites,
         AppSlider
     }
}
</script>

<style scoped>
h4 {
    text-align: center;
    margin-bottom: 20px;
}
.detailMovie__baseInfo {
    display: flex;
}
.detailMovie__rating {
    margin-left: 10px;
}
</style>