import Comet from './Comet.js';

// IMPORTANT LINKS:
// http://www.pressthered.com/navigating_a_json_object_in_javascript/
// https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation/getCurrentPosition
// https://developer.mozilla.org/pt-BR/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

const /*START_DATE = String(document.querySelector("input#start").value),
      END_DATE = String(document.querySelector("input#end").value);*/

    START_DATE = "2019-12-01",
    END_DATE = "2019-12-06";

let URL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + START_DATE + "&end_date=" + END_DATE + "&api_key=DEMO_KEY",
    cometList = Array();

let nasaJSON = '../dummyFiles/nasa.json';

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => oReq.send());

let oReq = new XMLHttpRequest();
oReq.onload = cometSearch;

oReq.open("get", nasaJSON, true);
// oReq.open("get", URL, true);

function formatDateJSON(dateValue) {
    // new Date(Date.now()).toUTCString()
    let date = new Date(dateValue),
        dateISO = date.toISOString(),
        day = dateISO.substr(8, 2),
        month = dateISO.substr(5, 2),
        year = dateISO.substr(0, 4),
        nextDay = (year + "-" + month + "-" + day);

    // let date = new Date(dateValue);
    // //date.setHours(date.getHours()+24);
    // let dateISO = date.toISOString();
    // let
    //     day = dateISO.substr(8, 2),
    //     month = dateISO.substr(5, 2),
    //     year = dateISO.substr(0, 4);
    // let nextDay = (year + "-" + month + "-" + day);

    return nextDay;
}

function cometSearch () {
    let comets = JSON.parse(this.response),
        start = new Date(START_DATE),
        end = new Date(END_DATE),
        comet = new Comet(),
        key;

    start.setHours(start.getHours() + 4);
    end.setHours(end.getHours() + 4);

    for (start; start <= end; start.setHours(start.getHours() + 24)) {
        let
            jsonDate = formatDateJSON(start),
            dataPath = Object.values(comets)[2][jsonDate];

        // console.log("JSON DATE: ",jsonDate,"\n");

        for (let iterator = 0; iterator < dataPath.length; iterator++){
            // console.log(iterator,jsonDate);
            let
                id = String(Object.values(comets)[2][jsonDate][iterator]
                                                                  ["id"]),
                name = String((Object.values(comets)[2][jsonDate][iterator]
                              ["name"]).replace("(", "").replace(")", "")),
                absoluteMagnitude = String(Object.values(comets)[2][jsonDate][iterator]
                                                               ["absolute_magnitude_h"]),
                estimatedDiameterAvg = String((((Object.values(comets)[2][jsonDate][iterator]
                                                ["estimated_diameter"]["meters"]["estimated_diameter_max"]
                                               + Object.values(comets)[2][jsonDate][iterator]
                                                ["estimated_diameter"]["meters"]["estimated_diameter_min"]) / 2)).toFixed(2)),
                potentiallyHazardous = Comet.hazardLevel(Object.values(comets)[2][jsonDate][iterator]
                                                        ["is_potentially_hazardous_asteroid"]),
                closeApproach = String(Object.values(comets)[2][jsonDate][iterator]
                                      ["close_approach_data"][0]["close_approach_date_full"]).replace(" ", " - "),
                relativeVelocity = String(Number(Object.values(comets)[2][jsonDate][iterator]
                                                ["close_approach_data"][0]["relative_velocity"]
                                                ["kilometers_per_hour"]).toFixed(2)),
                missDistance = String(Number(Object.values(comets)[2][jsonDate][iterator]
                                              ["close_approach_data"][0]["miss_distance"]
                                              ["kilometers"]).toFixed(2)),
                sentryObject = Comet.hitChanceNext100Years(String(Object.values(comets)[2][jsonDate][iterator]
                                                                                          ["sentry_object"]));

            let comet = new Comet(
                id,
                name,
                absoluteMagnitude,
                estimatedDiameterAvg,
                potentiallyHazardous,
                closeApproach,
                relativeVelocity,
                missDistance,
                sentryObject
            );
            cometList.push(comet);
        }
    }
        console.log("\n");console.log(cometList);console.log(comets);

    // let
    //     id = String(Object.values(comets)[2]["2015-09-08"][0]["id"]),
    //     name = String((Object.values(comets)[2]["2015-09-08"][0]["name"])
    //         .replace("(","").replace(")","")),
    //     absoluteMagnitude = String(Object.values(comets)[2]["2015-09-08"][0]["absolute_magnitude_h"]),
    //     estimatedDiameterAvg = String((((
    //         Object.values(comets)[2]["2015-09-08"][0]["estimated_diameter"]["meters"]["estimated_diameter_max"]
    //         + Object.values(comets)[2]["2015-09-08"][0]["estimated_diameter"]["meters"]["estimated_diameter_min"])/2)).toFixed(2)),
    //     potentiallyHazardous = Comet.hazardLevel(Object.values(comets)[2]["2015-09-08"][0]["is_potentially_hazardous_asteroid"]),
    //     closeApproach = String(Object.values(comets)[2]["2015-09-08"][0]["close_approach_data"][0]["close_approach_date_full"])
    //         .replace(" ", " - "),
    //     relativeVelocity = String(Number(
    //         Object.values(comets)[2]["2015-09-08"][0]["close_approach_data"][0]["relative_velocity"]["kilometers_per_hour"]).toFixed(2)),
    //     missDistance = String(Number(Object.values(comets)[2]["2015-09-08"][0]["close_approach_data"][0]["miss_distance"]["kilometers"])
    //         .toFixed(2)),
    //     sentryObject = Comet.hitChanceNext100Years(String(Object.values(comets)[2]["2015-09-08"][0]["sentry_object"]));

    function generateTableHead(table) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }


    let table = document.querySelector("table");
    let data = Object.getOwnPropertyNames(comet);//classmateList.keys();
    generateTableHead(table, data);
    generateTable(table, cometList);
}

function getLocation() {
    let options = {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success,error,options);

    function success(pos){
        let gps = pos.coords;
        alert("LAT: " + gps.latitude +
              " | LONG: " + gps.longitude +
              " | ACCURACY: " + gps.accuracy);
    }
    // var options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0
    // };
    //
    // function success(pos) {
    //     var crd = pos.coords;
    //
    //     console.log('Sua posição atual é:');
    //     console.log('Latitude : ' + crd.latitude);
    //     console.log('Longitude: ' + crd.longitude);
    //     console.log('Mais ou menos ' + crd.accuracy + ' metros.');
    // };
    //
    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    //
    // navigator.geolocation.getCurrentPosition(success, error, options);
}