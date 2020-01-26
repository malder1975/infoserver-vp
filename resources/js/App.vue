<template>
    <div id="main" class="h-100">
        <top-nav></top-nav>
        <side-bar></side-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopNav from "./containers/TopNav";
    import SideBar from "./containers/SideBar";
    export default {
        name: 'app',
        components: {
            TopNav,
            SideBar
        }

    }
</script>

<style scoped>

</style>
