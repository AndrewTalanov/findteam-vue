<template>
    <navmenu-account></navmenu-account>
    <navmenu-search></navmenu-search>
    <go-app></go-app>
</template>

<script>
import NavmenuAccount from '@/components/header/navmenu/navmenu-items/NavmenuAccount.vue'
import NavmenuSearch from '@/components/header/navmenu/navmenu-items/NavmenuSearch.vue'
import GoApp from '@/components/header/navmenu/navmenu-items/GoApp.vue'

export default {
    components: {
        NavmenuAccount, NavmenuSearch, GoApp
    }
}
</script>

<style scoped>
</style>