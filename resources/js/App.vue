<template>
    <div id="app-container" :class="getMenuType">
        <top-nav></top-nav>
        <side-bar></side-bar>
        <main>
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </main>

    </div>
</template>

<script>
    import TopNav from "./containers/TopNav";
    import SideBar from "./containers/SideBar";
    import { mapGetters } from 'vuex'
    export default {
        name: 'app',
        data () {
            return {
                show: false
            }
        },
        components: {
            TopNav,
            SideBar
        },

        computed: {
            ...mapGetters(['getMenuType'])
        }

    }
</script>

<style scoped>

</style>
