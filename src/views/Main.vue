<template>
    <vue-header></vue-header>
    <main>

    </main>
    <footer>

    </footer>
</template>

<script>
import VueHeader from "@/components/VueHeader.vue"

export default {
    components: {
        VueHeader
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
    body{
        background-color: #0f2027;
        background: linear-gradient(to right, #203942,#0f2027);
        width: 100%;
        height: 1080px;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;    
    }
    p, h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
        color: white;
    }
</style>
