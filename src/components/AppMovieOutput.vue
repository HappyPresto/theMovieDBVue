<template>
        <div :class="className + '__list'">
            <div :class="className + '__el'"
                    v-for="(movie, index) in results" :key="index"
            >
            <router-link :to="'/detail/' + movie.id" :class="className + '__link'">
                <img :src="'http://image.tmdb.org/t/p/w185' + movie.poster_path"/>
                <div :class="className + '__inside'">
                    <div :class="className + '__inside-desc'">
                        <h3>{{movie.title}}</h3>
                        <p><i class="fas fa-star"></i> {{movie.vote_average}}</p>
                        <p>{{movie.overview}}</p>
                    </div>
                    <button class="btn btn-success">More</button>
                </div>
            </router-link> 
            </div>
        </div>
</template>

<script>
export default {
    props: {
        className: String,
        results: Array
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
h3 {margin: 0;}
.popularMovies__link, .nowPlayingMovies__link {
    display: flex;
    align-items: flex-start;
    color: #000;
    text-decoration: none;
    margin-bottom: 30px;
}
.popularMovies__inside, .nowPlayingMovies__inside {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 278px;
}
</style>