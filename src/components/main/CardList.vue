<template>
  <div class="card__wrapper all-tab__wrapper">
    <div
      class="card__inner all-tab__inner all-tab__with-cards"
      @wheel="wheel"
      :style="{ 'margin-top': scrollDekstop + 'px', transition: 0.4 + 's' }"
      v-show="!$store.state.showCard"
    >
      <div
        class="card__item all-card__item"
        v-for="card in $store.state.adverts.cards"
        :key="card.id"
        @click="
          $store.commit('openCard'),
            $store.commit('changeContentState', [
              card.id,
              card.iconURL,
              card.nameCard,
              card.nameProfile,
              card.titleCard,
              card.contentBody,
              card.popularityCard,
              card.sphere,
              (card.sum = null),
            ])
        "
      >
        <div class="card__content">
          <div class="card__header">
            <img :src="card.iconURL" alt="icon" />
            <p class="card__name">Нужен {{ card.nameCard }}</p>
          </div>
          <p class="card__title">
            {{ card.titleCard.slice(0, titleSlice) + threeDots }}
          </p>
          <p class="card__body">
            {{ card.contentBody.slice(0, bodySlice) + threeDots }}
          </p>
          <div class="card__footer">
            <img src="@/assets/images/warning.png" alt="warn" />
            <img
              class="dontknow"
              src="@/assets/images/dontknow.png"
              alt="warn"
            />
            <img src="@/assets/images/arrow_down.png" alt="down" />
            <p class="card__popularity">{{ card.popularityCard }}</p>
            <img src="@/assets/images/arrow_up.png" alt="up" />
          </div>
        </div>
      </div>
      <div class="mobile-bottom"></div>
    </div>
    <open-card v-if="$store.state.showCard"> </open-card>
  </div>
</template>

<script>
import { computed, watch } from "@vue/runtime-core";
import cutContentCard from "@/mixins/cutContentCard";
import scrollCloseOpenMobileHeader from "@/mixins/scrollCloseOpenMobileHeader";
import OpenCard from "@/components/main/OpenCard.vue";
import scrollDesktop from "@/mixins/scrollDesktop";

export default {
  components: { OpenCard },
  mixins: [cutContentCard, scrollCloseOpenMobileHeader, scrollDesktop],
  data() {
    return {};
  },
};
</script>

<style scoped>
.card__header img {
  width: 18px;
}
.card__content {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.card__header {
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.card__name {
  margin: 0 5px 0 10px;
  font-weight: 700;
  font-size: 13px;
}
.card__title {
  font-size: 18px;
  margin-bottom: 12px;
}
.card__body {
  font-size: 16px;
}
.card__footer {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 15px;
  right: 10px;
}
.card__popularity {
  margin: 0 5px 0 5px;
}
.dontknow {
  margin: 0 10px 0 10px;
}
@media (max-width: 1734px) {
  .card__title {
    margin-bottom: 6px;
  }
}
@media (max-width: 1550px) {
  .card__title {
    font-size: 16;
  }
  .card__body {
    font-size: 15px;
  }
}
@media (max-width: 1461px) {
  .card__title {
    font-size: 18;
  }
  .card__body {
    font-size: 16px;
  }
}
</style>