<template>
    <vue-header></vue-header>
    <main>
        <side-bar></side-bar>
        <card-wrapper></card-wrapper>
    </main>
    <footer>

    </footer>
</template>

<script>
import VueHeader from "@/components/VueHeader.vue"
import SideBar from '../components/SideBar.vue'
import CardWrapper from '../components/CardWrapper.vue'

export default {
    components: {
        VueHeader,
        SideBar,
        CardWrapper
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
    body{
        background: linear-gradient(to right, #203942,#0f2027);
        width: 100%;
        height: 100vh;
        overflow: hidden;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;    
    }
    p, h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
        color: white;
    }
    main{
        display: flex;
    }
</style>
