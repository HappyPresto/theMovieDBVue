<template>
        <div :class="className + '__list'">
            <div :class="className + '__el'"
                    v-for="(movie, index) in results" :key="index"
            >
                <h3>{{movie.title}}</h3>
                <p>{{movie.vote_average}}</p>
                <p>{{movie.overview}}</p>
                <router-link :to="'/detail/' + movie.id"><button class="btn btn-success">More</button></router-link> 
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