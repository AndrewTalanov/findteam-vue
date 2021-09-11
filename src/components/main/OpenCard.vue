<template>
  <div class="open-card__wrapper">
    <div class="open-card__inner">
      <div class="open-card__content-wrapper">
        <!-- header desktop -->
        <header-desktop/>
        <!-- header для мобилок -->
        <header-mobile/>
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
import HeaderDesktop from '@/components/main/openCard/HeaderDesktop.vue';
import HeaderMobile from '@/components/main/openCard/HeaderMobile.vue';
export default {
  name: "open-card",
  components: {
    FooterMobile,
    FooterDesktop,
    HeaderDesktop,
    HeaderMobile
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
  .open-card__footer {
    justify-content: space-between;
    margin: 0;
    width: 100%;
    bottom: 85px;
    height: 65px;
    border-radius: 0;
    background-color: #1c3844;
  }
  .for-mobile{
    display: block;
    width: 100%;
    height: 80px;
  }
}
</style>