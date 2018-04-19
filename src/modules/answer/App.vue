<template>
    <section class="main">
        <HeaderBar />
        <Bannerbar />
        <Options />
    </section>
</template>

<script>
    import HeaderBar from './components/HeaderBar.vue'
    import Bannerbar from './components/Bannerbar.vue'
    import Options from './components/Options.vue'
    export default{
        components:{
            HeaderBar,
            Bannerbar,
            Options
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import 'scss/base';
    .main{
        padding:0.5rem;
    }
</style>