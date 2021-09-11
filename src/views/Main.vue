<template>
  <header-desktop v-if="$store.state.widthBrows > 500"></header-desktop>
  <header-mobile v-if="$store.state.widthBrows <= 500"></header-mobile>
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
import HeaderDesktop from "@/components/header/HeaderDesktop.vue";
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import CardList from "@/components/main/CardList.vue";
import MyPage from "@/components/main/MyPage.vue";
import MyMessage from "@/components/main/MyMessage.vue";
import MySub from "@/components/main/MySub.vue";
import MyFavorites from "@/components/main/MyFavorites.vue";
import InvestorsVue from "@/components/main/InvestorsVue.vue";
import MentorsVue from "@/components/main/MentorsVue.vue";
import SidebarMobile from "@/components/main/sidebar/SidebarMobile.vue";
import SidebarDesktop from "@/components/main/sidebar/SidebarDesktop.vue";

export default {
  components: {
    HeaderDesktop,
    HeaderMobile,
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
    return {};
  },
  methods: {
    updateInStoreWidthBrows() {
      this.$store.commit("updateWidthBrows");
    },
  },
  created() {
    window.addEventListener("resize", this.updateInStoreWidthBrows);
  },
  watch: {
    "$store.state.active": function () {
      this.$store.commit("onlyCloseCard");
    },
  },
  mounted() {
    this.$store.commit("updateWidthBrows");
  },
};
</script>

<style>
/* общие для многих элементов стили */

/* шрифты */
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap");

/* скролл */
::-webkit-scrollbar {
  width: 5px;
  background-color: #0f2027;
}
::-webkit-scrollbar-thumb {
  background-color: #1e3740;
  border-radius: 9em;
}

/* бэкграунд и текста */
body {
  background: linear-gradient(to right, #203942, #0f2027);
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  color: white;
}
main {
  display: flex;
}
html {
  overflow: hidden;
}

/* для табов */
.all-tab__wrapper {
  width: 100%;
  height: 93vh;
}
.all-tab__inner {
  width: 90%;
  height: 95%;
  overflow-x: hidden;
  margin: 0 auto;
  margin-top: 40px;
}
@media (max-width: 1700px) {
  .all-tab__inner {
    width: 97%;
  }
}
@media (max-width: 1440px) {
  .all-tab__inner {
    width: 96%;
  }
}
@media (max-width: 1267px) {
  .all-tab__inner {
    width: 98%;
  }
}
@media (max-width: 500px) {
  .all-tab__wrapper {
    margin: 0 auto;
    height: 97vh;
  }
  .all-tab__inner {
    width: 99%;
    margin: 0 0 0 0;
  }
}

/* для табов где есть список карточек */
.all-tab__with-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  padding: 2px 4% 2px 4%;
}
.mobile-bottom {
  display: none;
}
@media (max-width: 1700px) {
  .all-tab__with-cards {
    grid-column-gap: 25px;
    padding: 2px 2% 2px 1%;
  }
}
@media (max-width: 1595px) {
  .all-tab__with-cards {
    grid-column-gap: 15px;
  }
}
@media (max-width: 1550px) {
  .all-tab__with-cards {
    grid-column-gap: 20px;
  }
}
@media (max-width: 1461px) {
  .all-tab__with-cards {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
}
@media (max-width: 1440px) {
  .call-tab__with-cards {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
}
@media (max-width: 1267px) {
  .all-tab__with-cards {
    padding: 2px 0.5% 2px 0.5%;
  }
}
@media (max-width: 981px) {
  .all-tab__with-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 750px) {
  .all-tab__with-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 500px) {
  .mobile-bottom {
    display: block;
    width: 100%;
    height: 20px;
  }
}

/* для карточек */
.all-card__item {
  border-radius: 30px;
  background-color: #1c3844;
  height: 380px;
  margin-bottom: 15px;
  cursor: pointer;
}
@media (max-width: 1550px) {
  .all-card__item {
    margin-bottom: 20px;
  }
}
@media (max-width: 1461px) {
  .all-card__item {
    margin-bottom: 30px;
  }
}
@media (max-width: 1440px) {
  .all-card__item {
    margin-bottom: 20px;
  }
}
@media (max-width: 1210px) {
  .all-card__item {
    height: 330px;
  }
}
@media (max-width: 981px) {
  .all-card__item {
    height: 350px;
  }
}
</style>
