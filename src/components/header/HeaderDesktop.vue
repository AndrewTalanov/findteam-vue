<template>
  <header>
    <nav-menu></nav-menu>
  </header>
</template>

<script>
import NavMenu from "@/components/header/navmenu/NavMenu.vue"

export default {
    components: {
        NavMenu
    }
}
</script>

<style scoped>
  header{
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1525px) {
    header{
      height: 80px;
    }
  }
  @media (max-width: 1170px) {
    header{
      height: 70px;
    }
  }
</style>