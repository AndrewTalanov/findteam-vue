<template>
  <div class="sidebar">
    <div class="sidebar__top" :style="{height: heightTop + 'px'}"></div>
    <ul class="sidebar__items">
      <li
        v-for="item in items"
        :key="item.id"
        @click="
          $store.commit('changeActive', item.id)
        "
        class="sidebar__item"
      >
        <img :src="item.url" alt="icon" class="sidebar__icon" />
        <p
          class="sidebar__name"
        >
          {{ item.name }}
        </p>
      </li>
    </ul>
    <div class="sidebar__down" :style="{top: heightDown + 'px'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightDown: null,
      heightTop: null,
      startTop: null,
      startDown: null,
      offset: null,
      items: [
        {
          id: 1,
          url: require("@/assets/images/open-page.png"),
          name: "Моя страница",
        },
        {
          id: 2,
          url: require("@/assets/images/adverts.png"),
          name: "Публикации",
        },
        {
          id: 3,
          url: require("@/assets/images/messages.png"),
          name: "Сообщения",
        },
        {
          id: 4,
          url: require("@/assets/images/following.png"),
          name: "Подписки",
        },
        {
          id: 5,
          url: require("@/assets/images/bookmarks.png"),
          name: "Избранное",
        },
        {
          id: 6,
          url: require("@/assets/images/partners.png"),
          name: "Инвесторы",
        },
        {
          id: 7,
          url: require("@/assets/images/mentors.png"),
          name: "Менторы",
        },
      ],
    };  
  },
  methods: {
    startHeight() {
      if (this.$store.state.widthBrows >= 1210) {
        this.startTop = 35;
        this.startDown = 115;
        this.offset = 80;
      }
      else if ((this.$store.state.widthBrows < 1210) && (this.$store.state.widthBrows > 980)) {
        this.startTop = 50;
        this.startDown = 110;
        this.offset = 60;
      }
      else if (this.$store.state.widthBrows < 980) {
        this.startTop = 25;
        this.startDown = 85;
        this.offset = 60;
      }
    },
    sidebarTopAndBot() {
      for (let i = 1; i <= this.items.length; i++) {
        if (this.$store.state.active == i) {
          this.heightTop = this.startTop + (i - 1) * this.offset;
          this.heightDown = this.startDown + (i - 1) * this.offset;
        }
      }
    },
  },
  created() {
    window.addEventListener('resize', this.startHeight);
    window.addEventListener('resize', this.sidebarTopAndBot);
  },
  mounted() {
    this.startHeight();
    this.sidebarTopAndBot();
  },
  watch: {
    '$store.state.widthBrows': function(){
      this.startHeight();
    }
  },
  beforeUpdate() {
    this.sidebarTopAndBot();
  },
};
</script>

<style scoped>
.sidebar {
  width: 345px;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.sidebar__top {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  /* Высота задается через скрипты */
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
  cursor: pointer;
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
/* 500px отключаю сайдбар*/
</style>