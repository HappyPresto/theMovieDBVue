<template>
<div>
    {{favorites}}
    <button class="btn btn-success"
            @click="favoriteIdInStore"
    >
        <span v-if="favorite">Remove from favorites</span>
        <span v-else>Add to favorites</span>
    </button>
</div>
</template>

<script>
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, LOGOUT, GET_FAVORITES} from '../constants'

export default {
    props: {
        id: Number,
    },
    data() {
        return {
            login: "",
            favorite: false,
            favorites: []
        }
    },
    beforeMount() {
        /*if (this.$store.state.favorites.indexOf(this.id, 0) != -1) {
            this.favorite = true;
        }*/
        if (this.$store.state.login != false) {
            this.login = this.$store.state.login;
        }
        console.log(this.login);
        this.checkMovie;
    },
    mounted() {

    },
    /* не работает адекватно локалсторэдж 
    http://qaru.site/questions/15995/how-do-i-store-an-array-in-localstorage
    */
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
        checkMovie() {
            console.log(this.id);
            let users = this.$store.state.users;
            for (let i = 0; i < users.length; i++) {
                if (users[i].user == this.login) {
                    this.favorites = users[i].favorites;
                    let favorites = users[i].favorites;
                    if (favorites.indexOf(this.id) != -1) {
                        this.favorite = true;
                    }
                }
            }
        }
    }
}
</script>