function getWeather(response) {

    console.log(response.data);

}

function requestApi(lat, lon, useImperial) {

    let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;

    axios.get(apiUrl).then(getWeather);

    if(useImperial) {

        apiUrl += "&temperature_unit=fahrenheit&wind_speed_unit=mph";
    }
    else {

        apiUrl += "&temperature_unit=celsius&wind_speed_unit=kmh";
    }

}

function displayCity(event) {

    event.preventDefault();
    let searchBar = document.querySelector("#search-bar");
    let city = document.querySelector("#heading");

    city.innerHTML = searchBar.value;
}

let displayOnPage = document.querySelector("#search-form");
displayOnPage.addEventListener("submit", displayCity);