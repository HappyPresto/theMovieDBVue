<template>
<nav>
    <div class="left">
        <router-link to="/" class="header__link" name="main">Main</router-link>
        <router-link to="/favorites" class="header__link" name="favorites">Favorites</router-link>
        <router-link to="/nowplaying" class="header__link" name="nowplaying">Now Playing</router-link>
    </div>
    <div class="right" v-if="login">
        <!--<router-link to="/" class="header__link" name="login"><span @click="logOut()">Log Out</span></router-link>-->
        <button class="header__link" @click="logOut()">LogOut</button>
    </div>
    <div class="right" v-else>
        <router-link to="/login" class="header__link" name="login">Log In</router-link>
    </div>
</nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import {LOGOUT} from '../constants'

export default {
    data() {
        return {
        ///    login: "",
        }
    },
    created() {
        this.logOut();
    },
    method: {
        logOut() {
            console.log("222");
            /*this.$store.dispatch({
                type: LOGOUT
            })*/
        }
    },
    computed: { 
        ...mapState([
            'login'
        ]),
    },
    created() {
    ///    this.login = this.login;
        console.log(this.$store.state.users);
    },
    updated() {
        
      //  this.login = this.$store.state.login;
        console.log(this.$store.state.users);
    }
}
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        background: #777;
    }
    .header__link {
        margin-right: 10px;
        padding: 10px;
        color: #fff;
        display: inline-block;
    }

</style>