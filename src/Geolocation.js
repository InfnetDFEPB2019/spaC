export default class Geolocation {
    constructor(latitude, longitude, sunrise,
                sunset, solarNoon, dayLength,
                sunDistance, moonRise, moonSet,
                moonDistance) {

        this._latitude = latitude;
        this._longitude = longitude;
        this._sunrise = sunrise;
        this._sunset = sunset;
        this._solarNoon = solarNoon;
        this._dayLength = dayLength;
        this._sunDistance = sunDistance; // km
        this._moonRise = moonRise;
        this._moonSet = moonSet;
        this._moonDistance = moonDistance; // km
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

    get sunrise() {
        return this._sunrise;
    }

    set sunrise(value) {
        this._sunrise = value;
    }

    get sunset() {
        return this._sunset;
    }

    set sunset(value) {
        this._sunset = value;
    }

    get solarNoon() {
        return this._solarNoon;
    }

    set solarNoon(value) {
        this._solarNoon = value;
    }

    get dayLength() {
        return this._dayLength;
    }

    set dayLength(value) {
        this._dayLength = value;
    }

    get sunDistance() {
        return this._sunDistance;
    }

    set sunDistance(value) {
        this._sunDistance = value;
    }

    get moonRise() {
        return this._moonRise;
    }

    set moonRise(value) {
        this._moonRise = value;
    }

    get moonSet() {
        return this._moonSet;
    }

    set moonSet(value) {
        this._moonSet = value;
    }

    get moonDistance() {
        return this._moonDistance;
    }

    set moonDistance(value) {
        this._moonDistance = value;
    }
}