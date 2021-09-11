<template>
  <div class="open-card__header" v-if="$store.state.widthBrows > 500">
    <div class="open-card__profile">
      <img src="@/assets/images/navmenu-avatar.png" alt="avatar" />
      <div class="open-card__profile-name">
        <p>{{ $store.state.getContent.nameProfile }}</p>
      </div>
    </div>
    <div class="open-card__background-close" @click="$store.commit('openCard')">
      <img
        src="@/assets/images/add-card.png"
        alt="close"
        class="open-card__btn-close"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.open-card__header {
  padding: 1.5% 1.5% 15px 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.open-card__profile {
  display: flex;
  align-items: center;
}
.open-card__profile-name {
  margin-left: 15px;
}
.open-card__profile-name p {
  font-size: 18px;
}
.open-card__background-close {
  width: 45px;
  height: 45px;
  border-radius: 15px;
  background-color: #264d5c;
  display: flex;
  align-items: center;
  justify-content: center;
}
.open-card__btn-close {
  width: 65%;
  margin-left: 2px;
  transform: rotate(45deg);
}
@media (max-width: 980px) {
  .open-card__profile img {
    width: 55px;
  }
  .open-card__background-close {
    width: 30px;
    height: 30px;
    border-radius: 10px;
  }
}
@media (max-width: 500px) {
  .open-card__header {
    display: none;
  }
  .open-card__profile-name {
    font-size: 16px;
    margin-left: 5px;
  }
  .open-card__background-close {
    background-color: unset;
  }
  .open-card__btn-close {
    transform: rotate(0deg);
  }
}
</style>