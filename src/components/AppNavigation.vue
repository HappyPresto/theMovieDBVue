<template>
<nav>
    <router-link to="/" class="header__link" name="main">Main</router-link>
    <router-link to="/favorites" class="header__link" name="favorites">Favorites</router-link>
    <router-link to="/nowplaying" class="header__link" name="nowplaying">Now Playing</router-link>
</nav>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>
    nav {
        display: flex;
    }
    .header__link {
        margin-right: 10px;
        padding: 10px;
        color: #fff
    }
</style>