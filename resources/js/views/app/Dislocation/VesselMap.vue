<template>
    <div>
        <b-row>
            <b-col xxs="12">
                <piaf-breadcrumb :heading=" $route.name "></piaf-breadcrumb>
                <div class="separator mb-5"></div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="4" md="12" class="mb-4">
                <b-card title="Все суда"></b-card>
            </b-col>
            <b-col lg="4" md="12" class="mb-4">

            </b-col>
            <b-col lg="4" md="12" class="mb-4">

            </b-col>
        </b-row>

        <b-row>
            <b-col xxs="12">
                <b-card>
                    <yandex-map
                            :coords="coords"
                            :zoom="10"
                            style=" height: 600px;"
                    :debug="true">

                    </yandex-map>
                </b-card>

            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        //name: "VesselMap",
        data: () => ({
            coords: [54, 39],
            //zoom: 10
        })
    }
</script>

<style scoped>

</style>
