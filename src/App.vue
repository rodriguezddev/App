<template>
<div id="app" style="height: 100vh; width: 100%;">
    <Menu />
    <router-view />
</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
    components: {
        Menu
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
}
</style>
