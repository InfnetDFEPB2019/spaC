// IMPORTANT LINKS: http://www.pressthered.com/navigating_a_json_object_in_javascript/

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

// import {Comet} from 'Comet';

const START = String(document.querySelector("input#start").value),
      END = String(document.querySelector("input#end").value);
let url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + START + "&end_date=" + END + "&api_key=DEMO_KEY",
    cometList = Array();


class Comet {
    constructor(id, name, absoluteMagnitude, estimatedDiameter, potentiallyHazardous,
                closeApproach, relativeVelocity, missDistance, sentryObject) {
        this.Id = id;
        this.Name = name;
        this.AbsoluteMagnitude = absoluteMagnitude;
        this.EstimatedDiameter = estimatedDiameter;
        this.PotentiallyHazardous = potentiallyHazardous;
        this.CloseApproach = closeApproach;
        this.RelativeVelocity = relativeVelocity;
        this.MissDistance = missDistance;
        this.SentryObject = sentryObject;
    }

    get id() {
        return this.Id;
    }

    set id(value) {
        this.Id = value;
    }

    get name() {
        return this.Name;
    }

    set name(value) {
        this.Name = value;
    }

    get absoluteMagnitude() {
        return this.AbsoluteMagnitude;
    }

    set absoluteMagnitude(value) {
        this.AbsoluteMagnitude = value;
    }

    get estimatedDiameter() {
        return this.EstimatedDiameter;
    }

    set estimatedDiameter(value) {
        this.EstimatedDiameter = value;
    }

    get potentiallyHazardous() {
        return this.PotentiallyHazardous;
    }

    set potentiallyHazardous(value) {
        this.PotentiallyHazardous = value;
    }

    get closeApproach() {
        return this.CloseApproach;
    }

    set closeApproach(value) {
        this.CloseApproach = value;
    }

    get relativeVelocity() {
        return this.RelativeVelocity;
    }

    set relativeVelocity(value) {
        this.RelativeVelocity = value;
    }

    get missDistance() {
        return this.MissDistance;
    }

    set missDistance(value) {
        this.MissDistance = value;
    }

    get sentryObject() {
        return this.SentryObject;
    }

    set sentryObject(value) {
        this.SentryObject = value;
    }

    static ceilValue(value){
        return Math.ceil(value);
    }

    static hazardLevel(boolean){
        let classification;

        if (boolean == "true") {
            classification = "DANGER";
        } else {
            classification = "SAFE";
        }
        return classification;
    }

    static hitChanceNext100Years(boolean){
        let possibility;

        if (boolean == "true") {
            possibility = "MAYBE";
        } else {
            possibility = "SAFE";
        }
        return possibility;
    }
}


function cometSearch(){
    function reqListener (){
        let comets = JSON.parse(this.response);
        console.log(((comets["near_earth_objects"]["2019-11-09"]["0"]["estimated_diameter"]["kilometers"]["estimated_diameter_max"])*1000).toFixed(2));

        // while(comets.hasNext){
        //     const c = new Comet(comets.id,
        //         comets.name,
        //         comets.absolute_magnitude,
        //         Comet.ceilValue(comets["near_earth_objects"]["2019-11-09"]["0"]["estimated_diameter"]["kilometers"]["estimated_diameter_max)"],
        //         Comet.hazardLevel(comets.is_potentially_hazardous_asteroid),
        //         comets.close_approach_date_full,
        //         Comet.ceilValue(relative_velocity.kilometers_per_second),
        //         comets.miss_distance.kilometers,
        //         Comet.hitChanceNext100Years(comets.is_sentry_object));
        //     console.log(c);
        // }

        // for (let i = 0; i < Object.entries(comets); i++) {
        //     const c = new Comet(comets.id,
        //         comets.name,
        //         comets.absolute_magnitude,
        //         Comet.ceilValue(comets.estimated_diameter.kilometers.estimated_diameter_max),
        //         Comet.hazardLevel(comets.is_potentially_hazardous_asteroid),
        //         comets.close_approach_date_full,
        //         Comet.ceilValue(relative_velocity.kilometers_per_second),
        //         comets.miss_distance.kilometers,
        //         Comet.hitChanceNext100Years(comets.is_sentry_object));
        // }
    }

    //let cardID = document.querySelector("input#mtg_id");
    let oReq = new XMLHttpRequest();
    oReq.onload = reqListener;console.log(url);
    oReq.open("get", url, true);
    oReq.send();
}