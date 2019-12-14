import MarsWeather from './MarsWeather.js';

let URL = "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0",
    marsWeatherList = Array();

let marsWeatherJSON = '../dummyFiles/marsweather.json';

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => oReq.send());

let oReq = new XMLHttpRequest();
oReq.onload = weatherForecast;

oReq.open("get", marsWeatherJSON, true);
// oReq.open("get", URL, true);

function weatherForecast () {
    let forecast = JSON.parse(this.response),
        days = Array();

    for (let i = 0; i < forecast["sol_keys"].length; i++){
        days.push(forecast["sol_keys"][i]);
    }

    for (let i = 0; i < days.length; i++){
        let
            averageTemp = String(forecast[days[i]]["AT"]["av"]),
            samplesTemp = String(forecast[days[i]]["AT"]["ct"]),
            minimumTemp = String(forecast[days[i]]["AT"]["mn"]),
            maximumTemp = String(forecast[days[i]]["AT"]["mx"]),

            averageWind = String(forecast[days[i]]["HWS"]["av"]),
            samplesWind = String(forecast[days[i]]["HWS"]["ct"]),
            minimumWind = String(forecast[days[i]]["HWS"]["mn"]),
            maximumWind = String(forecast[days[i]]["HWS"]["mx"]),

            averagePressure = String(forecast[days[i]]["PRE"]["av"]),
            samplesPressure = String(forecast[days[i]]["PRE"]["ct"]),
            minimumPressure = String(forecast[days[i]]["PRE"]["mn"]),
            maximumPressure = String(forecast[days[i]]["PRE"]["mx"]),

            season = String(forecast[days[i]]["Season"]);

        let dayForecast = new MarsWeather(averageTemp, samplesTemp, minimumTemp, maximumTemp,
                                          averageWind, samplesWind, minimumWind, maximumWind,
                                          averagePressure, samplesPressure, minimumPressure, maximumPressure,
                                          season);
        marsWeatherList.push(dayForecast);
    }
}