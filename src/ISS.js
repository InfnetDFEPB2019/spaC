export default class ISS {
    constructor(id, latitude, longitude,
                altitude, velocity, visibility,
                crewMembers, crewNumber) {

        this._id = id;
        this._latitude = latitude;
        this._longitude = longitude;
        this._altitude = altitude;
        this._velocity = velocity;
        this._visibility = visibility;
        this._crewMembers = crewMembers;
        this._crewNumber = crewNumber;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get latitude() {
        return this._latitude;
    }

    set latitude(value) {
        this._latitude = value;
    }

    get longitude() {
        return this._longitude;
    }

    set longitude(value) {
        this._longitude = value;
    }

    get altitude() {
        return this._altitude;
    }

    set altitude(value) {
        this._altitude = value;
    }

    get velocity() {
        return this._velocity;
    }

    set velocity(value) {
        this._velocity = value;
    }

    get visibility() {
        return this._visibility;
    }

    set visibility(value) {
        this._visibility = value;
    }

    get crewMembers() {
        return this._crew;
    }

    set crewMembers(value) {
        this._crewMembers = value;
    }

    get crewNumber() {
        return this._crewNumber;
    }

    set crewNumber(value) {
        this._crewNumber = value;
    }
}