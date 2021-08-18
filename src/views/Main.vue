<template>
    <vue-header></vue-header>
    <main>
        <sidebar-desktop v-if="$store.state.widthBrows > 500"></sidebar-desktop>
        <sidebar-mobile v-if="$store.state.widthBrows <= 500"></sidebar-mobile>
        <my-page v-if="$store.state.active == 1"></my-page>
        <card-list v-else-if="$store.state.active == 2"></card-list>
        <my-message v-else-if="$store.state.active == 3"></my-message>
        <my-sub v-else-if="$store.state.active == 4"></my-sub>
        <my-favorites v-else-if="$store.state.active == 5"></my-favorites>
        <investors-vue v-else-if="$store.state.active == 6"></investors-vue>
        <mentors-vue v-else-if="$store.state.active == 7"></mentors-vue>
    </main>
</template>

<script>
import VueHeader from "@/components/header/VueHeader.vue"
import CardList from '@/components/main/CardList.vue'
import MyPage from '@/components/main/MyPage.vue'
import MyMessage from '@/components/main/MyMessage.vue'
import MySub from '@/components/main/MySub.vue'
import MyFavorites from '@/components/main/MyFavorites.vue'
import InvestorsVue from '@/components/main/InvestorsVue.vue'
import MentorsVue from '@/components/main/MentorsVue.vue'
import SidebarMobile from '../components/main/sidebar/SidebarMobile.vue'
import SidebarDesktop from '../components/main/sidebar/SidebarDesktop.vue'

export default {
    components: {
        VueHeader,
        CardList,
        MyPage,
        MyMessage,
        MySub,
        MyFavorites,
        InvestorsVue,
        MentorsVue,
        SidebarMobile,
        SidebarDesktop,
    },
    data() {
        return {
        }
    },
    methods: {
        updateInStoreWidthBrows() {
            this.$store.commit('updateWidthBrows');
        }
    },
    created() {
        window.addEventListener('resize', this.updateInStoreWidthBrows);
    },
    mounted() {
        this.$store.commit('updateWidthBrows');
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
    body{
        background: linear-gradient(to right, #203942,#0f2027);
        width: 100%;
        height: 100vh;
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
    html{
        overflow: hidden;
    }
</style>
