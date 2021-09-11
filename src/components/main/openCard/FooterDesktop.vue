<template>
  <!-- footer для публикаций -->
  <div
    class="open-card__footer-content"
    v-if="$store.state.active == 2 && $store.state.widthBrows > 500"
  >
    <img src="@/assets/images/warning.png" alt="warn" />
    <img src="@/assets/images/dontknow.png" alt="izb" />
    <img src="@/assets/images/arrow_down.png" alt="down" />
    <p>{{ $store.state.getContent.popularity }}</p>
    <img src="@/assets/images/arrow_up.png" alt="up" />
  </div>
  <!-- footer для менторов/инвесторов -->
  <div
    class="open-card__footer-content no-adverts"
    v-if="
      ($store.state.active == 6 || $store.state.active == 7) &&
      $store.state.widthBrows > 500
    "
  >
    <p class="price">
      <span v-if="$store.state.active == 7">Стоимость:</span
      ><span v-if="$store.state.active == 6">Сумма:</span>
      {{ $store.state.getContent.sum }}
    </p>
    <div class="icons">
      <img src="@/assets/images/warning.png" alt="warn" />
      <img src="@/assets/images/dontknow.png" alt="izb" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.open-card__footer-content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.open-card__footer-content img {
  margin: 0 10px 0 10px;
}
.no-adverts {
  justify-content: space-between;
}
.price {
  padding: 0 0 0 15px;
}
</style>