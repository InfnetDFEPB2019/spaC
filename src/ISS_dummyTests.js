import ISS from './ISS.js';

const
    URL_ISS_DATA = "https://api.wheretheiss.at/v1/satellites/25544",
    URL_CREW_DATA = "http://api.open-notify.org/astros.json";

let
    LAT = "-22.906061",
    LONG = "-43.176881",
    URL_ISS_PASS_PREDICTION = "http://api.open-notify.org/iss-pass.json?lat=" + LAT + "&lon=" + LONG + "";

let ISSDataJSON = '../dummyFiles/ISSData.json',
    ISSCrewJSON = '../dummyFiles/ISSCrew.json',
    ISSPassPredictionJSON = '../dummyFiles/ISSPassPrediction.json';

// let searchButton = document.getElementById("searchButton");
// searchButton.addEventListener("click", () => oReq.send());

let oReq_DATA = new XMLHttpRequest(),
    oReq_CREW = new XMLHttpRequest(),
    oReq_PASS_PREDICTION = new XMLHttpRequest();

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => sendRequest());

oReq_DATA.open("get", ISSDataJSON, true);
oReq_CREW.open("get", ISSCrewJSON, true);
// oReq_PASS_PREDICTION.open("get", ISSPassPredictionJSON, true);

// oReq_DATA.open("get", URL_ISS_DATA, true);
// oReq_CREW.open("get", URL_CREW_DATA, true);
// oReq_PASS_PREDICTION.open("get", URL_ISS_PASS_PREDICTION, true);

oReq_DATA.onload = getISSData;
oReq_CREW.onload = getISSData;
// oReq_PASS_PREDICTION.onload = getISSData;

function sendRequest(){
    oReq_DATA.send();
    oReq_CREW.send();
    // oReq_PASS_PREDICTION.send();
}

// let oReq = new XMLHttpRequest();
// oReq.onload = getISSData;

function getISSData () {
    // let data = JSON.parse(this.response);

    let data = JSON.parse(oReq_DATA.response),
        crew = JSON.parse(oReq_CREW.response);

    let
        id = String(data["id"]),
        latitude = String(data["latitude"]),
        longitude = String(data["longitude"]),
        altitude = String(data["altitude"].toFixed(2)),
        velocity = String(data["velocity"].toFixed(2)),
        visibility = String(data["visibility"]),
        crewMembers = generateCrewArray(crew),
        crewNumber = String(crew["number"]);

    function generateCrewArray(crew) {
        let crewMembers = Array();

        for (let c = 0; c < crew["people"].length; c++) {
            crewMembers.push(String(crew["people"][c]["name"]));
        }
        return crewMembers;
    }

    let iss = new ISS(id,latitude,longitude,
                      altitude,velocity,visibility,
                      crewMembers,crewNumber);

    console.log(data,iss);
}