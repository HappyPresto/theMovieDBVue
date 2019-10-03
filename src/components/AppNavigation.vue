<template>
<nav>
    <router-link to="/" name="main">Главная</router-link>
    <router-link to="/foo" name="foo">Перейти в Foo</router-link>
    <router-link to="/bar" name="bar">Перейти в Bar</router-link>
</nav>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>