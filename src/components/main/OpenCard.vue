<template>
  <div class="open-card__wrapper">
    <div class="open-card__inner">
      <div class="open-card__content-wrapper">
        <div class="open-card__header">
          <div class="open-card__profile">
            <img src="@/assets/images/navmenu-avatar.png" alt="avatar" />
            <div class="open-card__profile-name">
              <p>{{$store.state.getContent.nameProfile}}</p>
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
        <div class="open-card__content-text">
            <div class="open-card__title">
                <p>{{$store.state.getContent.title}}</p>
            </div>
          <p>
            {{$store.state.getContent.body}}
          </p>
        </div>
        <div class="open-card__footer">
          <div class="open-card__footer-content">
            <img src="@/assets/images/warning.png" alt="warn" />
            <img src="@/assets/images/dontknow.png" alt="izb" />
            <img src="@/assets/images/arrow_down.png" alt="down" />
            <p>{{$store.state.getContent.popularity}}</p>
            <img src="@/assets/images/arrow_up.png" alt="up" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
export default {
  name: "open-card",
  data() {
    return {
      showCard: false,
    };
  },
};
</script>

<style scoped>
.open-card__wrapper {
  margin: auto;
  width: 83%;
  height: 90vh;
  position: absolute;
  bottom: 0;
  right: 0;
}
.open-card__inner {
  background-color: #264d5c;
  margin-top: 30px;
  width: 98%;
  height: 96.5%;
  border-radius: 30px;
}
.open-card__content-wrapper {
  width: 1123px;
  height: 96%;
  background-color: #1c3844;
  border-radius: 30px;
  padding: 20px;
}
.open-card__header {
  margin-bottom: 15px;
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
.open-card__content-text {
  height: 85%;
  overflow-y: scroll;
}
.open-card__title{
    margin-bottom: 15px;
}
.open-card__title p{
    font-size: 20px;
}
.open-card__footer {
  width: 100%;
  height: 40px;
  background-color: #1c3844;
  display: flex;
  justify-content: flex-end;
}
.open-card__footer-content {
  height: 100%;
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-between;
}
</style>