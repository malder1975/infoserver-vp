<template>
    <div>
        <b-row>
            <b-col xxs="12">
                <piaf-breadcrumb :heading=" $route.name "></piaf-breadcrumb>
                <div class="separator mb-5"></div>
            </b-col>
        </b-row>

        <b-row class="table-res-toolbar">
            <b-button-toolbar >
                <b-form-select  v-model="selected" size="sm" class="mt-2 mb-2 ml-2">
                    <b-form-select-option v-for="rsp in rsps" :value="rsp.RSPCODE">{{ rsp.RSPNAME }}</b-form-select-option>
                    <template v-slot:first>
                        <b-form-select-option :value="null" disabled>-- Выберите группу флота --</b-form-select-option>
                    </template>

                </b-form-select>


            </b-button-toolbar>
        </b-row>
        <b-row>

        </b-row>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "TableRes",
        data() {
            return {
                selected: null,
                rsps: []

            }
        },

        methods: {
            getRsp() {
                axios.get('/api/rsp').then((response) => (
                    this.rsps = response.data
                )).catch((error) =>
                    this.errors = error.response.data.errors || error.message);

            }
        },

        mounted() {
            this.getRsp()
        }
    }
</script>

<style scoped>

</style>