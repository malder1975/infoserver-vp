<template>

</template>

<script>
    export default {
        name: "WeatherWidget",
        data: {
            temp: 0,
            time: new Date()
        },
        methods: {
            getWeather() {
                var request = new XMLHttpRequest();
                request.withCredentials = true
                request.open('GET', 'https://api.gismeteo.net/v2/search/cities/?query=москв', true)
                request.setRequestHeader('X-Gismeteo-Token', '56b30cb255.3443075')//56b30cb255.3443075
                request.onload = function () {
                    if (request.status >= 200 && request.status < 400) {
                        var wetherData = JSON.parse(request.responseText)
                        console.log(wetherData)
                    }
                }
                request.onerror = function() {
                    console.log('There was a connection error');
                }
                request.send()
            }
        },
        created() {
            this.getWeather()

        }
    }
</script>

<style scoped>

</style>
