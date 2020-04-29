<template>
    <div>
        <b-row>
            <b-col xxs="12">
                <piaf-breadcrumb :heading=" $route.name "></piaf-breadcrumb>
                <div class="separator mb-5"></div>
            </b-col>
        </b-row>

        <b-row>
            <div v-for="(rsp,index) in rsps" :key="index" :class="colClass" >
                <b-card-group deck>
                <b-col >
                    <b-card header-tag="header" class="mb-4"
                            header-bg-variant="success">
                        <h4 slot="header"  >{{rsp.RSPNAME}} ({{ rsp.RSPCODE }})</h4>
                    </b-card>

                </b-col>
                </b-card-group>
            </div>


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
    import axios from 'axios';
    export default {
        //name: "VesselMap",
        data: () => ({
            coords: [54, 39],
            rsps: [],
            errors: []
            //zoom: 10
        }),

        methods: {
            getRsp() {
                axios.get('/api/rsp').then((response) => (
                    this.rsps = response.data
                )).catch((error) =>
                    this.errors = error.response.data.errors || error.message);
            }
        },

        created() {
            this.getRsp()
        },

        computed: {
            colClass() {
                return this.rsps.length > 3 ? 'col-xxs-12 col-sm-6 col-md-4 col-lg-4' : 'col-xxs-12 col-sm-6 col-md-4 col-lg-4'
            },

        },
    }
</script>

<style scoped>

</style>
