<template>
    <navmenu-account></navmenu-account>
    <navmenu-search></navmenu-search>
    <go-app></go-app>
</template>

<script>
import NavmenuAccount from '@/components/NavmenuAccount.vue'
import NavmenuSearch from '@/components/NavmenuSearch.vue'
import GoApp from '@/components/GoApp.vue'

export default {
    components: {
        NavmenuAccount, NavmenuSearch, GoApp
    }
}
</script>

<style scoped>
</style>