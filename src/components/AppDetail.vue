<template>
<div class="detailMoviePage">
    <div v-if="detailMovie.length != []" 
         :key="detailMovie.id"
         class="detailMovie"
    >
        <img class="detailMovie__img" :src="'http://image.tmdb.org/t/p/w300' + detailMovie.poster_path"/>
        <div class="detailMovie__desc">
            <div class="detailMovie__main">
                <h3 class="detailMovie__title">{{detailMovie.title}}</h3>
                <p class="detailMovie__tagline">{{detailMovie.tagline}}</p>
            </div>
            <div class="detailMoivie__genres">
                <p class="detailMoivie__genre" v-for="(genre) in detailMovie.genres" :key="genre.id">
                    {{genre.name}},
                </p>
            </div>
            <div class="detailMovie__baseInfo">
                <p class="detailMovie__release">{{detailMovie.release_date}}</p>
                <div class="detailMovie__rating">
                    <span class="detailMovie__rating-voteAverage"><i class="fas fa-star"></i> {{detailMovie.vote_average}}</span>
                    <span class="detailMovie__rating-voteCount"><i class="fas fa-male"></i> {{detailMovie.vote_count}}</span>
                </div>
            </div>
            <app-favorites 
                class="detailMovie__favorites"
                :id="detailMovie.id">
            </app-favorites>
            <div class="detailMovie__overview">
                {{detailMovie.overview}}
            </div>
        </div>
    </div>
    <hr />
    <div class="detailMobie__similar" :v-if="similarMovies != []">
        <h4>Similar movies</h4>
        <app-slider :className="'detailMovie__similarMovie'"
                    :obj="similarMovies"
                    @changedetail="changeDetailPage($event)"
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
    updated(){
        //location.reloa
    },
    methods: {
        changeDetailPage(e) {
            this.$store.dispatch(GET_DETAIL_MOVIE, e.id)
                .then(res => {
                    this.detailMovie = res;
                })

            this.$store.dispatch(GET_SIMILAR_MOVIE, e.id)
                .then(res => {   
                    let tenMovies = [];  
                    tenMovies = res.results.map((el) => {
                        return el;
                    });
                    tenMovies.length = 10;
                    this.similarMovies = tenMovies;
                })
        }
    },
    computed: {
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
h3 {
    margin: 0;
}
h4 {
    text-align: center;
    margin-bottom: 20px;
}
p {
    margin: 0;
}
.detailMovie {
    display: flex;
    margin-top: 30px;
}
.detailMovie__tagline {
    margin: 10px 0;
    font-weight: bold;
}
.detailMovie__desc {
    margin-left: 30px;
}
.detailMoivie__genres {
    display: flex;
}
.detailMoivie__genre {
    margin-right: 10px;
}
.detailMovie__baseInfo {
    display: flex;
}
.detailMovie__rating {
    margin-left: 10px;
}
.detailMovie__overview {
    margin-top: 30px;
}
</style>