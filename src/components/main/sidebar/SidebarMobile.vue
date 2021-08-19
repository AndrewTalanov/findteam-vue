<template>
  <div class="sidebar-mobile__wrapper">
    <div class="sidebar-mobile__inner">
      <div class="sidebar-mobile__items">
        <div
          class="sidebar-mobile__item"
          v-for="item in items"
          :key="item.index"
          @click="$store.commit('changeActive', item.id)"
        >
          <img :src="item.url" alt="tab" />
          <div 
            class="active-tab"
            :class="{active: $store.state.active == item.id}"
          >

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {   
            id: 2,
            url: require("@/assets/images/adverts.png") },
        { 
            id: 8,
            url: require("@/assets/images/adverts.png") },
        { 
            id: 9,
            url: require("@/assets/images/add-circle.png") },
        { 
            id: 3,
            url: require("@/assets/images/messages.png") },
        { 
            id: 1,
            url: require("@/assets/images/profile.svg") },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar-mobile__wrapper {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  background-color: #264d5c;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.sidebar-mobile__inner {
  width: 80%;
  height: 100%;
  margin: auto;
}
.sidebar-mobile__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.sidebar-mobile__item {
  width: 24px;
  height: 24px;
  position: relative;
}
.sidebar-mobile__item img {
  width: 100%;
}
.active-tab{
    display: none;
}
.active{
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 30px;
    background-color: white;
    position: absolute;
    bottom: -10px;
    right: 12px
}
</style>