<template>
  <div class="open-card__wrapper">
    <div class="open-card__inner">
      <div class="open-card__content-wrapper">
        <!-- header desktop -->
        <div class="open-card__header">
          <div class="open-card__profile">
            <img src="@/assets/images/navmenu-avatar.png" alt="avatar" />
            <div class="open-card__profile-name">
              <p>{{ $store.state.getContent.nameProfile }}</p>
            </div>
          </div>
          <div
            class="open-card__background-close"
            @click="$store.commit('openCard')"
          >
            <img
              src="@/assets/images/add-card.png"
              alt="close"
              class="open-card__btn-close"
            />
          </div>
        </div>
        <!-- header для мобилок -->
        <div class="open-card__header header-mobile">
          <div
            class="open-card__background-close"
            @click="$store.commit('openCard')"
          >
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
        <!-- --- -->
        <div class="open-card__content-text">
          <div class="open-card__title" v-if="$store.state.active == 2">
            <p>{{ $store.state.getContent.title }}</p>
          </div>
          <p>
            {{ $store.state.getContent.body }}
          </p>
          <div class="sphere">
            <p>Сфера: {{$store.state.getContent.sphere}} </p>
          </div>
          <div class="for-mobile"></div>
        </div>
        <!-- footer -->
        <div class="open-card__footer">
          <footer-desktop/>
          <footer-mobile/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import FooterMobile from "@/components/main/openCard/FooterMobile"
import FooterDesktop from '@/components/main/openCard/FooterDesktop';
export default {
  name: "open-card",
  components: {
    FooterMobile,
    FooterDesktop
  },
  data() {
    return {
      showCard: false,
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
  background-color: #18303b;
}
::-webkit-scrollbar-thumb {
  background-color: #1c3844;
  border-radius: 9em;
}
.open-card__wrapper {
  margin: auto;
  position: absolute;
  right: 10px;
  top: 120px;
  left: 300px;
  height: 85vh;
}
.open-card__inner {
  background-color: #264d5c;
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.open-card__content-wrapper {
  position: relative;
  width: 75%;
  height: 100%;
  background-color: #1c3844;
  border-radius: 30px;
}
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
.open-card__content-text {
  height: 80%;
  padding: 0 1.5% 0 1.5%;
  overflow-y: scroll;
}
.open-card__title {
  margin-bottom: 15px;
}
.open-card__title p {
  font-size: 20px;
}
.open-card__footer {
  position: absolute;
  bottom: 10px;
  width: 97%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  border-radius: 20px;
}
.header-mobile,
.for-mobile {
  display: none;
}
.sphere{
  margin: 10px 0 10px 0;
}
@media (max-width: 1525px) {
  .open-card__wrapper {
    top: 100px;
  }
  .open-card__content-text {
    height: 77%;
  }
}
@media (max-width: 1500px) {
  .open-card__wrapper {
    left: 270px;
  }
}
@media (max-width: 1260px) {
  .open-card__wrapper {
    left: 260px;
  }
  .open-card__title p {
    font-size: 18px;
  }
}
@media (max-width: 1170px) {
  .open-card__wrapper {
    top: 90px;
  }
}
@media (max-width: 1130px) {
  .open-card__wrapper {
    left: 210px;
  }
}
@media (max-width: 1025px) {
  .open-card__content-wrapper {
    width: 100%;
  }
}
@media (max-width: 980px) {
  .open-card__wrapper {
    left: 110px;
  }
  .open-card__profile img {
    width: 55px;
  }
  .open-card__background-close {
    width: 30px;
    height: 30px;
    border-radius: 10px;
  }
}
@media (max-height: 920px) {
  .open-card__content-text {
    height: 80%;
  }
}
@media (max-width: 500px) {
  .open-card__wrapper {
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
  }
  .open-card__content-wrapper {
    border-radius: 0;
    padding-top: 20px;
  }
  .open-card__content-text {
    height: 78%;
    padding: 0 3.5% 0 3.5%;
  }
  .open-card__header{
    display: none;
  }
  .header-mobile {
    display: flex;
    padding: 0 3.5% 10px 3.5%;
  }
  .open-card__background-close {
    background-color: unset;
  }
  .open-card__btn-close {
    transform: rotate(0deg);
  }
  .header-mobile__parametres {
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .open-card__profile-name {
    font-size: 16px;
    margin-left: 5px; 
  }
  .open-card__footer {
    justify-content: space-between;
    margin: 0;
    width: 100%;
    bottom: 85px;
    height: 65px;
    border-radius: 0;
    background-color: #1c3844;
    /* background-color: red; */
  }
  .for-mobile{
    display: block;
    width: 100%;
    height: 80px;
  }
}
</style>