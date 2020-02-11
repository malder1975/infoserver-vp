<template>
    <div>
        <b-row>
            <b-col xxs="12">
                <piaf-breadcrumb :heading=" $route.name "></piaf-breadcrumb>
                <div class="separator mb-5"></div>
            </b-col>
        </b-row>

        <b-row>
            <b-colxx lg="4" md="12" class="mb-4">
                <b-card title="Все суда"></b-card>
            </b-colxx>
            <b-colxx lg="4" md="12" class="mb-4">

            </b-colxx>
            <b-colxx lg="4" md="12" class="mb-4">

            </b-colxx>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "VesselMap"
    }
</script>

<style scoped>

</style>
