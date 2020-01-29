<template>
    <div class="sidebar" @mouseenter="isMenuOwer=true" @mouseleave="isMenuOwer=false" @touchstart="isMenuOwer=true">
        <!-- Панель главного меню -->
        <div class="main-menu">
            <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
                <ul class="list-unstyled">

                    <li :class="{ active : selectedParentMenu === 'dashboards' }"><a @click.prevent="openSubMenu($event, 'dashboards')" href="#dashboards"><i class=""></i>Dashboards</a> </li>
                    <li :class="{ active : selectedParentMenu === 'pages' }"><a @click.prevent="openSubMenu($event, 'pages')" href="#pages"><i class=""></i>Pages </a> </li>

                </ul>
            </vue-perfect-scrollbar>
        </div>

        <!-- Подъменю -->
        <div class="sub-menu">
            <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
                <ul class="list-unstyled" data-link="dashboards" :class="{ 'd-block' :selectedParentMenu === 'dashboards' }">

                </ul>
            </vue-perfect-scrollbar>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import { subHiddenBreakpoint, menuHiddenBreakpoint } from '../vars'
    export default {
        name: "SideBar",
        data() {
            return {
                selectedParentMenu: '',
                isMenuOver: false
            }
        },
        mounted() {
            this.selectMenu()
            window.addEventListener('resize', this.handleWindowResize)
            document.addEventListener('click', this.returnSelectedMenu)
            this.handleWindowResize()
        },
        beforeDestroy() {
            document.removeEventListener('click', this.returnSelectedMenu)
            window.removeEventListener('resize', this.handleWindowResize)
        },

        methods: {
            ...mapMutations(['changeSideMenuStatus', 'addMenuClassname', 'changeSelectedMenuHasSubItems']),
            selectMenu() {
                const currentParentUrl = this.$route.path.split('/').filter(x => x !== '')[1]
                if (currentParentUrl !== undefined || currentParentUrl !== null) {
                    this.selectedParentMenu = currentParentUrl.toLowerCase()
                } else {
                    this.selectedParentMenu = 'dashboards'
                }
            },
            changeSelectedParentHasNoSubmenu(parentMenu) {
                this.SelectedParentMenu = parentMenu
                this.changeSelectedMenuHasSubItems(false)
                this.changeMenuStatus({ step: 0, classNames: this.menuType })
            },
            openSubMenu(e, selectedParent) {
                this.changeSelectedMenuHasSubItems(true)

                const currentClasses = this.menuType ? this.menuType.split(' ').filter(x => x !== '') : ''

                if (!currentClasses.includes('menu-mobile')) {
                    if (
                        currentClasses.includes('menu-sub-hidden') &&
                        (this.menuClickCount === 2 || this.menuClickCount === 0)
                    ) {
                        this.changeSideMenuStatus({ step: 3, classNames: this.menuType })
                    } else if (
                        currentClasses.includes('menu-hidden') &&
                        (this.menuClickCount === 1 || this.menuClickCount === 3)
                    ) {
                        this.changeSideMenuStatus({ step: 2, classNames: this.menuType })
                    } else if (
                        currentClasses.includes('menu-default') &&
                        !currentClasses.includes('menu-sub-hidden') &&
                        (this.menuClickCount === 1 || this.menuClickCount === 3)
                    ) {
                        this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
                    }
                } else {
                    this.addMenuClassname({ className: 'sub-show-temporary', currentClasses: this.menuType })
                }
                this.selectedParentMenu = selectedParent
            },

            addEvents() {
                document.addEventListener('click', this.handleDocumentClick)
            },
            removeEvents() {
                document.removeEventListener('click', this.handleDocumentClick)
            },
            returnSelectedMenu() {
                if (!this.isMenuOwer) {
                    this.selectMenu()
                }
            },
            handleDocumentClick (e) {
                if (!this.isMenuOwer) {
                    let cont = true
                    e.path.map(p => {
                        if (p.nodeName !== 'svg' && p.className !== undefined && p.className.indexOf('menu-button') > -1) {
                            cont = false
                        }
                    })
                    if (cont) {
                        this.toggle()
                    }
                }
            },
            toggle() {
                const currentClasses = this.menuType.split(' ').filter(x => x !== '')
                if (currentClasses.includes('menu-sub-hidden') && this.menuClickCount === 3) {
                    this.changeSideMenuStatus({ step: 2, classNames: this.menuType })
                } else if (
                    currentClasses.includes('menu-hidden') || currentClasses.includes('menu-mobile')
                ) {
                    this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
                }
            },

            // Ресайзим
        }
    }
</script>

<style scoped>

</style>
