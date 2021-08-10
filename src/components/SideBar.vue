<template>
  <div class="sidebar">
    <div class="sidebar__top"
        :style="sidebarTop"
    >

    </div>
    <ul class="sidebar__items">
      <li
        v-for="item in items"
        :key="item.id"
        :class="{ active: $store.state.active === item.id }"
        @click="$store.state.active = item.id; stateActive = item.id"
        class="sidebar__item"
      >
        <div class="forBorderRadius"></div>
        <img :src="item.url" alt="icon" class="sidebar__icon" />
        <p class="sidebar__name">
          {{ item.name }}
        </p>
      </li>
    </ul>
    <div class="sidebar__down"
        :style="sidebarDown"
    >

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        stateActive: 2,
      items: [
        {
          id: 1,
          url: require("../assets/images/open-page.png"),
          name: "Моя страница",
        },
        {
          id: 2,
          url: require("../assets/images/adverts.png"),
          name: "Публикации",
        },
        {
          id: 3,
          url: require("../assets/images/messages.png"),
          name: "Сообщения",
        },
        {
          id: 4,
          url: require("../assets/images/following.png"),
          name: "Подписки",
        },
        {
          id: 5,
          url: require("../assets/images/bookmarks.png"),
          name: "Избранное",
        },
        {
          id: 6,
          url: require("../assets/images/partners.png"),
          name: "Инвесторы",
        },
        {
          id: 7,
          url: require("../assets/images/mentors.png"),
          name: "Менторы",
        },
      ],
      methods: {},
    };
    
  },
  computed: {
        sidebarTop: function() {
            let i = 1;
            while (i <= this.items.length) {
                if (this.stateActive == i) {
                    return {height: 60 + ((i - 1) * 80) + 'px'}
                }
                i++;
            }
        },
        sidebarDown: function() {
            let i = 1;
            while (i <= this.items.length) {
                if (this.stateActive == i) {
                    return {top: 140 + ((i - 1) * 80) + 'px'}
                }
                i++;
            } 
        }
    }
};
</script>

<style>
.sidebar {
  width: 345px;
  height: 700px;
  position: relative;
  overflow-y: hidden;
}
.sidebar__top{
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 140px;
    width: 100%;
    background-color: #13272e;
    position: absolute;
    transition: .3s;
}
.sidebar__down{
    border-top-right-radius: 15px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 220px;
    z-index: -1;
    background-color: #13272e;
    transition: .3s;
}
.sidebar__items {
  padding: 45px 0 0 0;
}
.sidebar__item {
  position: relative;
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 35px;
}
.sidebar__name {
  margin-left: 11px;
  font-size: 16px;
}
/* большая часть кода будет удалена ибо переделал */
/* .active {
  background: linear-gradient(to right, #203942, #1d353e);
  z-index: 10;
} */
/* .active::before, .active::after, .forBorderRadius::after, .forBorderRadius::before{
        position: absolute;
        width: 20px;
        height: 20px;
        content: "";
        right: 0;
    }
    .active::before, .active::after{
        z-index: 1;
        background-color: #1D353E;
    }
    .forBorderRadius::after, .forBorderRadius::before{
        z-index: 2;
        background-color: #13272E;
    }
    .active::before{
        top: -20px;
    }
    .active::after{
        top: 80px;
    }
    .forBorderRadius::after{
        border-bottom-right-radius: 30px;
        top: -20px;
    }
    .forBorderRadius::before{
        border-top-right-radius: 30px;
        top: 80px;
    } */

@media (max-width: 1500px) {
  .sidebar {
    width: 310px;
  }
}
@media (max-width: 1210px) {
  .sidebar__name {
    font-size: 14px;
  }
  .sidebar__items {
    padding: 35px 0 0 0;
  }
  .sidebar__item {
    height: 60px;
  }
  .active::after {
    top: 60px;
  }
  .forBorderRadius::after {
    border-bottom-right-radius: 15px;
  }
  .forBorderRadius::before {
    border-top-right-radius: 15px;
    top: 60px;
  }
}
@media (max-width: 1130px) {
  .sidebar {
    width: 270px;
  }
  .sidebar__item {
    padding-left: 20px;
  }
}
</style>