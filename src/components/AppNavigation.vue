<template>
<nav>
    <div class="left">
        <router-link to="/" class="header__link" name="main">Main</router-link>
        <router-link to="/favorites" class="header__link" name="favorites">Favorites</router-link>
        <router-link to="/nowplaying" class="header__link" name="nowplaying">Now Playing</router-link>
    </div>
    <div class="right" v-if="login">
        <router-link to="/" class="header__link" name="login">Log Out</router-link>
    </div>
    <div class="right" v-else>
        <router-link to="/login" class="header__link" name="login">Log In</router-link>
    </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            login: "",
        }
    },
    created() {
        this.login = this.$store.state.login;
        console.log(this.$store.state.users);
    },
    updated() {
        this.login = this.$store.state.login;
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