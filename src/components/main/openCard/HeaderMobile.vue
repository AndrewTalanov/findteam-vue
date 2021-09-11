<template>
  <div class="open-card__header" v-if="$store.state.widthBrows <= 500">
    <div class="open-card__background-close" @click="$store.commit('openCard')">
      <img
        src="@/assets/images/close-arrow.png"
        alt="close"
        class="open-card__btn-close"
      />
    </div>
    <div class="header-mobile__parametres">
      <img src="@/assets/images/comments.png" alt="com" />
      <img src="@/assets/images/warning.png" alt="warn" />
      <img src="@/assets/images/dontknow.png" alt="izb" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.open-card__header {
  padding: 0 3.5% 10px 3.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.open-card__background-close {
  width: 45px;
  height: 45px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.open-card__btn-close {
  width: 50%;
  margin-left: 2px;
}
.open-card__profile-name {
  font-size: 16px;
  margin-left: 5px;
}
.header-mobile__parametres {
  width: 30%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>