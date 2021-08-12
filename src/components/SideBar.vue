<template>
  <div class="sidebar">
    <div class="sidebar__top" :style="sidebarTop"></div>
    <ul class="sidebar__items">
      <li
        v-for="item in items"
        :key="item.id"
        @click="
          $store.state.active = item.id;
          stateActive = item.id;
        "
        class="sidebar__item"
      >
        <div class="forBorderRadius"></div>
        <img :src="item.url" alt="icon" class="sidebar__icon" />
        <p
          class="sidebar__name"
          :class="{ active: $store.state.active === item.id }"
        >
          {{ item.name }}
        </p>
      </li>
    </ul>
    <div class="sidebar__down" :style="sidebarDown"></div>
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
    startHeight: function () {
      if (screen.width < 980) {
        return {
          startTop: 25,
          startDown: 85,
          offet: 60,
        };
      }
      if (screen.width < 1210) {
        return {
          startTop: 50,
          startDown: 110,
          offet: 60,
        };
      }
      if (screen.width >= 1210) {
        return {
          startTop: 35,
          startDown: 115,
          offet: 80,
        };
      }
    },
    sidebarTop: function () {
      for (let i = 1; i <= this.items.length; i++) {
        if (this.stateActive == i) {
          return {
            height:
              this.startHeight.startTop +
              (i - 1) * this.startHeight.offet +
              "px",
          };
        }
      }
    },
    sidebarDown: function () {
      for (let i = 1; i <= this.items.length; i++) {
        if (this.stateActive == i) {
          return {
            top:
              this.startHeight.startDown +
              (i - 1) * this.startHeight.offet +
              "px",
          };
        }
      }
    },
  },
};
</script>

<style>
.sidebar {
  width: 345px;
  height: 700px;
  position: relative;
  overflow: hidden;
}
.sidebar__top {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  /* Высота задается через скрипты */
  /* height: 140px; */
  width: 100%;
  background-color: #13272e;
  position: absolute;
  transition: 0.3s;
}
.sidebar__down {
  border-top-right-radius: 15px;
  width: 100%;
  height: 100%;
  position: absolute;
  /* Высота задается через скрипты */
  /* top: 220px; */
  z-index: -1;
  background-color: #13272e;
  transition: 0.3s;
}
.sidebar__items {
  padding: 20px 0 0 0;
  user-select: none;
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
}
@media (max-width: 1130px) {
  .sidebar {
    width: 240px;
  }
  .sidebar__item {
    padding-left: 20px;
  }
}
@media (max-width: 980px) {
  .sidebar {
    width: 120px;
  }
  .sidebar__item {
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
  .sidebar__name {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
  .sidebar__items {
    padding: 10px 0 0 0;
  }
}
@media (max-width: 426px) {
  .sidebar {
    width: 100px;
  }
  .sidebar__name {
    margin: 5px 0 0 0;
    font-size: 10px;
  }
  .sidebar__icon {
    width: 20px;
  }
}
@media (max-width: 400px) {
  .sidebar__name {
    display: none;
  }
  .active {
    display: block;
  }
}
</style>