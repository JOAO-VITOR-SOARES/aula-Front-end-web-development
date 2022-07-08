let TEMP = document.querySelector("#repositorios");
let city = document.querySelector("#city");
let icon = document.querySelector("#icon");

function api_tempo_hoje() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Camb%C3%A9&lang=pt_br&units=metric&APPID=ee4181be469e95dd23835ad46d185cd5`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            console.log(response.list)
            displayResults(response)
        });
}

const teste2 = api_tempo_hoje();

    function displayResults(weather) {
    console.log(weather)
   
    city.innerText = JSON.stringify(weather.name);
    TEMP.innerText = JSON.stringify(weather.main.temp);
    icon.innerText = JSON.stringify(weather[0].icon);
}


