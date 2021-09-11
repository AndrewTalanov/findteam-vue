<template>
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
</template>

<script>
export default {};
</script>

<style>
.open-card__footer-content {
  height: 100%;
  display: flex;
  align-items: center;
  min-width: 10%;
}
.open-card__footer-content img {
  margin: 0 10px 0 10px;
}
</style>