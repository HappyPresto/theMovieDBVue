<template>
<div class="sliderComponent">
<button class="prevButton" @click="prevObj"> &lt; </button>
<div class="slider">
    <div :class="className + '-list'"
        :style="'width: ' + sliderWidth + 'px;'"
    >

        <div :class="className + '-el'"
                v-for="(similarMovie, index) in obj"
                :key= index 
                :style="'width:' + slideroffsetStep + 'px; margin-right:' + sliderOffsetLeft + 'px;'"
        >
        <p :class="className + '-name'">{{similarMovie.title}}</p>
        <img :src="'http://image.tmdb.org/t/p/w185' + similarMovie.poster_path"/>
        <div :class="className + '-rating'">
            <span :class="className + '-rating-voteAverage'"><i class="fas fa-star"></i> {{similarMovie.vote_average}}</span>
            <span :class="className + '-rating-voteCount'"><i class="fas fa-male"></i>  {{similarMovie.vote_count}}</span>
        </div>
        <router-link :to="{name: 'MovieDetail', params:{id: similarMovie.id}}" class="btn btn-success"><span @click="changeMovie(similarMovie.id)">More</span></router-link> 
        <hr>
        </div>

    </div> 
</div>
<button class="nextButton" @click="nextObj"> &gt; </button>
</div>
</template>

<script>
export default {
    props: {
        className: String,
        obj: Array
    },
    data() {
        return {
            slider: "",
            sliderAllCount: 0, // всего 
            sliderOffsetLeft: 50, // отступ между слайдами
            slideroffsetStep: 200, // шаг одного слайда
        }
    },
    beforeMount() {
        this.sliderAllCount = this.obj.length;
    },
    mounted() {
        this.initSlider();
    },
    updated() {
        this.sliderAllCount = this.obj.length;
    },
    methods: {
        initSlider() {
            //this.slider = this.$el.querySelector('.' + this.className + '-list');
            //console.log(this.slider);
        },
        prevObj() {
            this.$el.querySelector(".slider").scrollLeft -= this.step;
        },
        nextObj() {
            this.$el.querySelector(".slider").scrollLeft += this.step;
        },
        changeMovie(id) {
            this.$emit('changedetail', {
                id: id
            });
        }
    },
    computed: {
        step() {
            return this.sliderOffsetLeft + this.slideroffsetStep;
        },
        sliderWidth() {
            return (this.slideroffsetStep + this.sliderOffsetLeft) * this.sliderAllCount
        }
    }
}
</script>

<style scoped>
.sliderComponent {
    display: flex;
    align-items: center;
}
.btn {
    padding: 0;
    }
.btn span {
    display: block;
    padding: 6px 12px;
}
button {
    padding: 10px;
}
.slider {
    position: relative;
    overflow-x: scroll;
}
.detailMovie__similarMovie-name {
    height: 40px;
    text-align: center;
}
.detailMovie__similarMovie-list {
    display: flex;
    flex-wrap: wrap;
}
.detailMovie__similarMovie-el {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>