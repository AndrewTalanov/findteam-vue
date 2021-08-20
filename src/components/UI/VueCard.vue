<template>
  <div class="card__item" v-for="card in cards" :key="card.id">
    <div class="card__content">
      <div class="card__header">
        <img :src="card.iconURL" alt="icon" />
        <p class="card__name">{{ card.nameCard }}</p>
        <p class="card__profile">{{ card.nameProfile }}</p>
      </div>
      <p class="card__title">
        {{ card.titleCard.slice(0, titleSlice) + threeDots }}
      </p>
      <p class="card__body">
        {{ card.contentBody.slice(0, bodySlice) + threeDots }}
      </p>
      <div class="card__footer">
        <img src="@/assets/images/warning.png" alt="warn" />
        <img class="dontknow" src="@/assets/images/dontknow.png" alt="warn" />
        <img src="@/assets/images/arrow_down.png" alt="down" />
        <p class="card__popularity">{{ card.popularityCard }}</p>
        <img src="@/assets/images/arrow_up.png" alt="up" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>