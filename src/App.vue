<template>
    <div class="wrapper">
        {{count}}
        <button @click="plusPlus" 
        >
        Plus
        </button>
    </div>
</template>

<script>
//import AppInput from './components/Input';

export default {
    data() {
        return {
        }
    },			
    created() {
        
    },
    methods: {
        plusPlus() {
            this.$store.dispatch('increment');
        }
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    components: {
        //AppInput
    }
}
</script>

<style scoped>
    .wrapper{
        padding: 15px;
        max-width: 500px;
        margin: 0 auto;
    }
</style>