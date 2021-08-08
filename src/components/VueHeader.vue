<template>
  <header>
    <nav-menu></nav-menu>
  </header>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue"

export default {
    components: {
        NavMenu
    }
}
</script>

<style scoped>
  header{
    height: 130px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1525px) {
    header{
      height: 100px;
    }
  }
  @media (max-width: 1170px) {
    header{
      height: 80px;
    }
  }
</style>