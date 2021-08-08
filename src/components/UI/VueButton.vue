<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'vue-button'
}
</script>

<style scoped>
    button{
        width: 60px;
        height: 60px;
        border-radius: 20px;
        background-color: #264D5C;
        border: none;
    }
</style>