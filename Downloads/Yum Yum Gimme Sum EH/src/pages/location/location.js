//API_KEY: AIzaSyBQZzX0qPJ8ZWTpcP19P0ry9gbREFXjTMg
import { changeHamMeny } from "../../components/navbar/changeHamNav.js";
changeHamMeny();

export function getLocations(city) {
    const locations = {
        "Malmö": [
            { name: "Möllan", lat: 55.59392547607422, lng: 13.00897216796875 },
            { name: "Centralstationen", lat: 55.60882406629966, lng: 13.000008492493917 },
            { name: "Hyllie", lat: 55.563364903252214, lng: 12.975690319901211 }
        ],
        "Göteborg": [
            { name: "Liseberg", lat: 57.695885, lng: 11.990064 },
            { name: "Nordstan", lat: 57.708870, lng: 11.974560 },
            { name: "Slottsskogen", lat: 57.686889, lng: 11.948099 }
        ],
        "Stockholm": [
            { name: "Gamla Stan", lat: 59.325117, lng: 18.071093 },
            { name: "Kungsträdgården", lat: 59.331018, lng: 18.071091 },
            { name: "Södermalm", lat: 59.314775, lng: 18.072716 }
        ]
    };

    return locations[city] || [];
}

function locationPrint(city, location) {
    const cityClassMap = {
        "Malmö": ".map-box--malmo",
        "Göteborg": ".map-box--goteborg",
        "Stockholm": ".map-box--stockholm"
    };

    const citySelector = cityClassMap[city];

    const locationWrap = document.querySelector(`${citySelector} .location-text`);

    locationWrap.innerHTML = ""; 

    let locationTitle = document.createElement('p');
    locationTitle.textContent = `Nu är vi här: ${location.name}`;
    locationWrap.append(locationTitle);
}


function randomLocation(city, mapId) {
    const locations = getLocations(city);
    if (locations.length === 0) return; 

    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    const mapElement = document.getElementById(mapId);
    if (mapElement) {
        mapElement.setAttribute("center", `${randomLocation.lat},${randomLocation.lng}`);
        mapElement.innerHTML = `
            <gmp-advanced-marker position="${randomLocation.lat},${randomLocation.lng}" title="${randomLocation.name}"></gmp-advanced-marker>
        `;
    }

    locationPrint(city, randomLocation);
}

document.addEventListener("DOMContentLoaded", function () {
    randomLocation("Malmö", "malmo-map");
    randomLocation("Göteborg", "goteborg-map");
    randomLocation("Stockholm", "stockholm-map");
});