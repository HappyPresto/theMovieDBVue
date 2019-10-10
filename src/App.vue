<template>
    <div class="wrapper"> 
        <!-- <header>
            <app-navigation></app-navigation>   
        </header> -->
        <router-view name="navBar"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
import AppNavigation from './components/AppNavigation';
import AppPopular from './components/AppPopular';

export default {
    data() {
        return {
        }
    },			
    created() {
        
    },
    methods: {
        plusPlus() {
            this.$store.dispatch({
                type: POPULAR_MOVIES,
            })
            .then(res=>{
                console.log("coent ", res.results)
            });
        }
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    components: {
        AppNavigation,
        AppPopular,
    }
}
</script>

<style scoped>
    .wrapper{
        padding: 0 15px;
        max-width: 800px;
        margin: 0 auto;
    }
    header {
        background: #777;
    }
</style>