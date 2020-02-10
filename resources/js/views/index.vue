<template>
    <div>
        <b-row>
            <b-colxx xxs="12">
                <piaf-breadcrumb :heading=" $route.name "></piaf-breadcrumb>
                <div class="separator mb-5"></div>
            </b-colxx>
        </b-row>

        <b-row>
            <b-col xl="6" lg="12">
                <b-card
                    title="DDDDD"
                    sub-title="sssss">
                    <b-catd-text>
                        fgdfghhfgj jhfgjj
                    </b-catd-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import resizeObserver from 'vue-resize'
    export default {
        name: "index",
        components: {
            resizeObserver
        }
    }
</script>

<style scoped>

</style>
