<template>
    <div>
        <b-row>
            <b-col xxs="12">
                <piaf-breadcrumb :heading=" $route.name "></piaf-breadcrumb>
                <div class="separator mb-5"></div>
            </b-col>
        </b-row>

        <b-row>
            <div  v-for="(rsp,index) in rsps" :key="index" :class="colClass" >

                    <b-card  header-tag="header" class="mb-4"
                            >
                        <h4 slot="header"  >{{rsp.RSPNAME}} ({{ rsp.RSPCODE }})</h4>
                    </b-card>

            </div>


        </b-row>

        <b-row >
            <!--b-col -->
        <b-card v-for="(rsp,index) in rsps" :key="index" class="col-md-5 mb-4"  header-tag="header"
        >
            <h4 slot="header"  >{{rsp.RSPNAME}} ({{ rsp.RSPCODE }})</h4>
        </b-card>
            <!--/b-col-->
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
                return  'col-xxs-12 col-sm-6 col-md-4 col-lg-4 mb-5' //: 'col-xxs-12 col-sm-6 col-md-4 col-lg-4 mb-4'
            },

        },
    }
</script>

<style scoped>

    div.row {
        display: flex;
       flex-direction: row;
    }
   .rspcards {

       padding-left: 1.2rem;
       padding-right: 1.2rem;
       padding-top: 1.2rem;
       padding-bottom: 1.2rem;
   }

    div.card {

        flex-direction:row;


        /*padding-left: -1.5rem;
        -right: -1.5rem; */
        margin-left: 0.625rem;
        margin-right: 0.625rem;
        margin-bottom: 1.875rem;
    }
    div.card:nth-child(1) {
        background-color: #98dfb6;
    header.card-header {
        background-color:#2980b9;
    }
    }


    div.card:nth-child(2) {
        background-color: #a1cbef;

    }

    div.card:nth-child(3) {
        background-color: bisque;
    }

    div.card:nth-child(4) {
        background-color: #fffbdb;
    }

    div.card:nth-child(5) {
        background-color: thistle;
    }


</style>
