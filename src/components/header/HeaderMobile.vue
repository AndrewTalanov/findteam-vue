<template>
  <div class="header-mobile__wrapper">
      <div class="header-mobile__inner">
          <p class="header-mobile__name-tab" v-if="$store.state.active == 2">
              Публикации
          </p>
          <p class="header-mobile__name-tab" v-else-if="$store.state.active == 3">
              Сообщения
          </p>
          <p class="header-mobile__name-tab" v-else-if="$store.state.active == 1">
              Профиль
          </p>
          <div class="header-mobile__filter-button"  v-if="$store.state.active == 2">
              <img class="header-mobile__filter-images" src="@/assets/images/filter.png" alt="filter">
          </div>
          <div class="header-mobile__filter-button"  v-if="$store.state.active == 3">
              <img class="header-mobile__filter-images" src="@/assets/images/pencil.png" alt="filter">
          </div>
          <p class="header-mobile__name-tab" v-else-if="$store.state.active == 6">
              Инвесторы
          </p>
          <p class="header-mobile__name-tab" v-if="$store.state.active == 7">
              Менторы
          </p>
          <div class="header-mobile__filter-button"  v-if="$store.state.active == 6">
              <img class="header-mobile__filter-images" src="@/assets/images/filter.png" alt="filter">
          </div>
          <div class="header-mobile__filter-button"  v-if="$store.state.active == 7">
              <img class="header-mobile__filter-images" src="@/assets/images/filter.png" alt="filter">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>
    .header-mobile__wrapper{
        width: 100%;
        height: 60px;
    }
    .header-mobile__inner{
        margin: 0 auto;
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-mobile__name-tab{
        font-size: 36px;
        display: inline-block;
    }
    .header-mobile__filter-button{
        width: 28px;
        height: 28px;
        background-color: #264D5C;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-mobile__filter-images{
        width: 14px;
        height: 14px;
    }
</style>