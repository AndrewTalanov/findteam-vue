<template>
    <vue-header></vue-header>
    <main>
        <side-bar></side-bar>
        <my-page v-if="$store.state.active == 1"></my-page>
        <card-list v-else-if="$store.state.active == 2"></card-list>
        <my-message v-else-if="$store.state.active == 3"></my-message>
        <my-sub v-else-if="$store.state.active == 4"></my-sub>
        <my-favorites v-else-if="$store.state.active == 5"></my-favorites>
        <investors-vue v-else-if="$store.state.active == 6"></investors-vue>
        <mentors-vue v-else-if="$store.state.active == 7"></mentors-vue>
    </main>
    <footer>

    </footer>
</template>

<script>
import VueHeader from "@/components/VueHeader.vue"
import SideBar from '../components/SideBar.vue'
import CardList from '../components/CardList.vue'
import MyPage from '../components/MyPage.vue'
import MyMessage from '../components/MyMessage.vue'
import MySub from '../components/MySub.vue'
import MyFavorites from '../components/MyFavorites.vue'
import InvestorsVue from '../components/InvestorsVue.vue'
import MentorsVue from '../components/MentorsVue.vue'

export default {
    components: {
        VueHeader,
        SideBar,
        CardList,
        MyPage,
        MyMessage,
        MySub,
        MyFavorites,
        InvestorsVue,
        MentorsVue,
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
