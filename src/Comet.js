export default class Comet {
    constructor(id, name, absoluteMagnitude, estimatedDiameterAvg, potentiallyHazardous,
                closeApproach, relativeVelocity, missDistance, sentryObject) {
        this.Id = id;
        this.Name = name;
        this.AbsoluteMagnitude = absoluteMagnitude;
        this.EstimatedDiameterAvg = estimatedDiameterAvg;
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

    get estimatedDiameterAvg() {
        return this.EstimatedDiameterAvg;
    }

    set estimatedDiameterAvg(value) {
        this.EstimatedDiameterAvg = value;
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

    static hazardLevel(String){
        let classification;

        if (String === "true") {
            classification = "DANGER";
        } else {
            classification = "SAFE";
        }
        return classification;
    }

    static hitChanceNext100Years(String){
        let possibility;

        if (String === "true") {
            possibility = "MAYBE";
        } else {
            possibility = "SAFE";
        }
        return possibility;
    }
}

// export default class Comet {
//     constructor(id, name, absoluteMagnitude, estimatedDiameter, potentiallyHazardous,
//                 closeApproach, relativeVelocity, missDistance, sentryObject) {
//         this.Id = id;
//         this.Name = name;
//         this.AbsoluteMagnitude = absoluteMagnitude;
//         this.EstimatedDiameter = estimatedDiameter;
//         this.PotentiallyHazardous = potentiallyHazardous;
//         this.CloseApproach = closeApproach;
//         this.RelativeVelocity = relativeVelocity;
//         this.MissDistance = missDistance;
//         this.SentryObject = sentryObject;
//     }
//
//     get id() {
//         return this.Id;
//     }
//
//     set id(value) {
//         this.Id = value;
//     }
//
//     get name() {
//         return this.Name;
//     }
//
//     set name(value) {
//         this.Name = value;
//     }
//
//     get absoluteMagnitude() {
//         return this.AbsoluteMagnitude;
//     }
//
//     set absoluteMagnitude(value) {
//         this.AbsoluteMagnitude = value;
//     }
//
//     get estimatedDiameter() {
//         return this.EstimatedDiameter;
//     }
//
//     set estimatedDiameter(value) {
//         this.EstimatedDiameter = value;
//     }
//
//     get potentiallyHazardous() {
//         return this.PotentiallyHazardous;
//     }
//
//     set potentiallyHazardous(value) {
//         this.PotentiallyHazardous = value;
//     }
//
//     get closeApproach() {
//         return this.CloseApproach;
//     }
//
//     set closeApproach(value) {
//         this.CloseApproach = value;
//     }
//
//     get relativeVelocity() {
//         return this.RelativeVelocity;
//     }
//
//     set relativeVelocity(value) {
//         this.RelativeVelocity = value;
//     }
//
//     get missDistance() {
//         return this.MissDistance;
//     }
//
//     set missDistance(value) {
//         this.MissDistance = value;
//     }
//
//     get sentryObject() {
//         return this.SentryObject;
//     }
//
//     set sentryObject(value) {
//         this.SentryObject = value;
//     }
//
//     static ceilValue(value){
//         return Math.ceil(value);
//     }
//
//     static hazardLevel(boolean){
//         let classification;
//
//         if (boolean == "true") {
//             classification = "DANGER";
//         } else {
//             classification = "SAFE";
//         }
//         return classification;
//     }
//
//     static hitChanceNext100Years(boolean){
//         let possibility;
//
//         if (boolean == "true") {
//             possibility = "MAYBE";
//         } else {
//             possibility = "SAFE";
//         }
//         return possibility;
//     }
// }