<template>
  <div class="mentors__wrapper all-tab__wrapper">
    <div
      class="mentors__inner all-tab__inner all-tab__with-cards"
      v-show="!$store.state.showCard"
      @wheel="wheel"
      :style="{ 'margin-top': scrollDekstop + 'px', transition: 0.4 + 's' }"
    >
      <div
        class="mentors__item all-card__item"
        v-for="card in $store.state.mentors.cards"
        :key="card.id"
        @click="
          $store.commit('openCard'),
            $store.commit('changeContentState', [
              card.id,
              card.iconURL,
              (card.nameCard = null),
              card.nameProfile,
              (card.titleCard = null),
              card.contentBody,
              (card.popularityCard = null),
              card.sphere,
              card.sum,
            ])
        "
      >
        <div class="mentors__content">
          <div class="mentors__header">
            <img :src="card.iconURL" alt="icon" />
            <p class="mentors__profile">{{ card.nameProfile }}</p>
            <div class="mentors__menu">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <p class="mentors__body">
            {{ card.contentBody.slice(0, bodySlice) + threeDots }}
          </p>
          <div class="mentors__footer">
            <p>Сфера: {{ card.sphere.slice(0, sphereSlice) + threeDots }}</p>
            <p>Стоимость: {{ card.sum }}</p>
          </div>
        </div>
      </div>
      <div class="mobile-bottom"></div>
    </div>
    <open-card v-if="$store.state.showCard"> </open-card>
  </div>
</template>

<script>
import cutCardMentorsAndInvestors from "@/mixins/cutCardMentorsAndInvestors";
import scrollCloseOpenMobileHeader from "@/mixins/scrollCloseOpenMobileHeader";
import OpenCard from "@/components/main/OpenCard.vue";
import scrollDesktop from "@/mixins/scrollDesktop";
export default {
  mixins: [
    cutCardMentorsAndInvestors,
    scrollCloseOpenMobileHeader,
    scrollDesktop,
  ],
  components: { OpenCard },
  data() {
    return {};
  },
};
</script>

<style scoped>
.mentors__content {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.mentors__header {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
.mentors__header img {
  width: 36px;
  margin-right: 10px;
}
.mentors__profile {
  font-size: 24px;
  margin-right: 15px;
}
.mentors__menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.dot {
  width: 5px;
  height: 5px;
  border-radius: 30px;
  background-color: white;
  margin-left: 3px;
}
.mentors__body {
  margin-top: 15px;
}
.mentors__footer {
  position: absolute;
  bottom: 40px;
  right: 10px;
}
.mentors__footer p {
  margin-top: 5px;
}
@media (max-width: 1550px) {
  .mentors__body {
    font-size: 15px;
  }
}
@media (max-width: 1461px) {
  .mentors__body {
    font-size: 16px;
  }
}
@media (max-width: 750px) {
  .mentors__footer {
    left: 0;
  }
}
@media (max-width: 500px) {
  .mentors__wrapper {
    margin: 0 auto;
  }
  .mentors__inner {
    margin: 0 0 0 0;
  }
}
</style>