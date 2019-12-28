import Geolocation from './Geolocation.js';

let
    API_KEY = "d471a642717f402e82c301737e45af07",
    LAT = "-22.906149",
    LONG = "-43.176866",
    /*DATE = "2019-12-30",*/
    DATE = String(document.querySelector("input#date").value),
    URL = "https://api.ipgeolocation.io/astronomy?apiKey=" + API_KEY + "&lat=" + LAT + "&long=" + LONG + "&date=" + DATE;

let geolocationDataJSON = '../dummyFiles/geolocationData.json';

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => oReq.send());

let oReq = new XMLHttpRequest();
oReq.onload = geolocationData;

oReq.open("get", geolocationDataJSON, true);
// oReq.open("get", URL, true);

function geolocationData () {
    let data = JSON.parse(this.response);

    let
        latitude = String(data["location"]["latitude"]),
        longitude = String(data["location"]["longitude"]),
        sunrise = String(data["sunrise"]),
        sunset = String(data["sunset"]),
        solarNoon = String(data["solar_noon"]),
        dayLength = String(data["day_length"]),
        sunDistance = String(data["sun_distance"]),
        moonRise = String(data["moonrise"]),
        moonSet = String(data["moonset"]),
        moonDistance = String(data["moon_distance"]);

    let
        locationData = new Geolocation(latitude,longitude,sunrise,
                                       sunset,solarNoon,dayLength,
                                       sunDistance,moonRise,moonSet,
                                       moonDistance);

    console.log(data,locationData,URL);
}