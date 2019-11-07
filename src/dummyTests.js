// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

import {Comet} from 'Comet';

const START = String(document.querySelector("input#start").value),
      END = String(document.querySelector("input#end").value);
let url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + START + "&end_date=" + END + "&api_key=DEMO_KEY",
    cometList = Array();

function cometSearch(){
    function reqListener (){
        let comets = JSON.parse(this.response).comets;
        console.log(comets);

        for (let i = 0; i < comets.length; i++) {
            const c = new Comet(comets.id,
                comets.name,
                comets.absolute_magnitude,
                Comet.ceilValue(comets.estimated_diameter.kilometers.estimated_diameter_max),
                Comet.hazardLevel(comets.is_potentially_hazardous_asteroid),
                comets.close_approach_date_full,
                Comet.ceilValue(relative_velocity.kilometers_per_second),
                comets.miss_distance.kilometers,
                Comet.possibleHit(comets.is_sentry_object));
        }
    }

    //let cardID = document.querySelector("input#mtg_id");
    let oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", `${url}`);
    oReq.send();
}