<template>
  <!-- footer ля публикаций -->
  <div
    class="mobile-footer"
    v-if="$store.state.active == 2 && $store.state.widthBrows <= 500"
  >
    <div class="mobile-footer__profile">
      <img src="@/assets/images/navmenu-avatar.png" alt="avatar" />
      <div class="mobile-footer__profile-name">
        <p>{{ $store.state.getContent.nameProfile }}</p>
      </div>
    </div>
    <div class="mobile-footer__popularity">
      <img src="@/assets/images/arrow_down.png" alt="down" />
      <p>{{ $store.state.getContent.popularity }}</p>
      <img src="@/assets/images/arrow_up.png" alt="up" />
    </div>
  </div>
  <!-- footer для менторов/инветоров -->
  <div
    class="mobile-footer"
    v-if="
      ($store.state.active == 6 || $store.state.active == 7) &&
      $store.state.widthBrows <= 500
    "
  >
    <div class="mobile-footer__profile">
      <img src="@/assets/images/navmenu-avatar.png" alt="avatar" />
      <div class="mobile-footer__profile-name">
        <p>{{ $store.state.getContent.nameProfile }}</p>
      </div>
    </div>
    <p class="price">{{ $store.state.getContent.sum }}</p>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.mobile-footer__popularity {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mobile-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: 3.5%;
}
.mobile-footer__profile {
  display: flex;
  align-items: center;
}
.mobile-footer img {
  width: 32px;
}
.mobile-footer__profile-name {
  font-size: 16px;
  margin-left: 5px;
}
@media (max-width: 385px) {
  .mobile-footer__popularity p {
    margin: 0 5px 0 5px;
  }
}
</style>