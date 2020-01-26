<template>
    <div class="sidebar" @mouseenter="isMenuOwer=true" @mouseleave="isMenuOwer=false" @touchstart="isMenuOwer=true">
        <div class="main-menu">
            <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
                <ul class="list-unstyled">

                </ul>
            </vue-perfect-scrollbar>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import { subHiddenBreakpoint, menuHiddenBreakpoint } from '../vars'
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>
