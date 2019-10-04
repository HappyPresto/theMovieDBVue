<template>
<div>
    {{id}}
    {{this.$store.state.favorites}}
    <button class="btn btn-success"
            @click="favoriteIdInStore"
    >
        <span v-if="favorite">Remove from favorites</span>
        <span v-else>Add to favorites</span>
    </button>
</div>
</template>

<script>
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../constants'

export default {
    props: {
        id: Number,
    },
    data() {
        return {
            favorite: false,
            favorites: []
        }
    },
    beforeMount() {
        if (this.$store.state.favorites.indexOf(this.id, 0) != -1) {
            this.favorite = true;
        }
    },
    mounted() {
        if (localStorage.favorites) {
            this.favorites = localStorage.favorites;
            console.log("right now", this.favorites);
        }
    },
    /* не работает адекватно локалсторэдж 
    http://qaru.site/questions/15995/how-do-i-store-an-array-in-localstorage
    */
    watch: {
        favorites(newVal, oldVal) {
            console.log('newVal', newVal);
            console.log('oldVal', oldVal);
            localStorage.favorites = this.favorites;
        }
    },
    methods: {
        favoriteIdInStore() {
            if (this.favorite == true) {
                this.$store.dispatch({
                    type: REMOVE_FROM_FAVORITES,
                    id: this.id
                })
                this.favorite = false;
                
                console.log("this.id ",this.favorites.indexOf(this.id));
                console.log("this.favorites ",this.favorites)
                this.favorites.splice(this.favorites.indexOf(this.id), 1);
                //delete this.favorites[this.id];
                console.log(this.favorites);
                return;
            }
            else {
                this.$store.dispatch({
                    type: ADD_TO_FAVORITES,
                    id: this.id
                })                
                this.favorite = true;
                this.favorites.push(this.id);
                return;
            }
        }
    },
    computed: {
    }
}
</script>