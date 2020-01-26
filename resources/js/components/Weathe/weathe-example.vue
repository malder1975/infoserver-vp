<template>

</template>

<script>
    new Vue({
        el: "#weatherApp",
        data: {
            temp: 0,
            format: 'C',
            time: new Date(),
            phase: 'fa-adjust'
        },
        methods: {
            setCelsius: function() {
                if (this.format = 'F') {
                    this.format = 'C';
                    this.temp = (this.temp - 32) * 5/9;
                } else {
                    this.temp = this.temp;
                }
            },
            setFahrenheit: function() {
                this.format = 'F';
                this.temp = (this.temp * 9/5) + 32;
            },
            setTime: function() {
                var timeAtLoad = this.time;
                return timeAtLoad.toLocaleTimeString([], {timeZone: 'Australia/Perth', hour: '2-digit', minute:'2-digit', hour12: true})

            },
            setPhase: function() {
                var timeOfDayUTC = new Date().getUTCHours();
                var timeOfDay = timeOfDayUTC + 8;

                if (timeOfDay > 6 && timeOfDay < 18) {
                    return 'fa-sun'
                } else {
                    return 'fa-moon'
                }
            },
            getWeather: function() {
                var request = new XMLHttpRequest();
                request.open('GET', 'http://www.bom.gov.au/fwo/IDW60801/IDW60801.95307.json', true);
                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) {
                        // Success!
                        var weatherData = JSON.parse(request.responseText);
                        console.log('Data retrieved');
                    } else {
                        // We reached our target server, but it returned an error
                        console.log('There was a problem retrieving the data')
                    }
                };
                request.onerror = function() {
                    // There was a connection error of some sort
                    console.log('There was a connection error');
                };
                request.send();
            }
        }
    });
</script>

<style scoped>

</style>
