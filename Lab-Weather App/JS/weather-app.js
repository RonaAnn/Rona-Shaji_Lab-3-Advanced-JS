import { WeatherAPI } from "./weather-api.js";

class WeatherApp {

    init() {

        this.addListener()

    }

    addListener() {

        const searchTextField = document.querySelector(".search-box");

        searchTextField.addEventListener("keypress", (event) => {

            const keyCode = event.keyCode;

            if (keyCode == 13) {

                // ENTER

                const userInput = event.target.value;

                const weatherAPIObj = new WeatherAPI();
                weatherAPIObj.constructURL(userInput);
                weatherAPIObj.invokeURL()
                    .then((responseJSON) => {

                        const responseObj = weatherAPIObj.responseConversion(responseJSON);

                        // Location 
                        const location = document.querySelector(".location .city")
                        location.innerText = responseObj.Location;

                        // Date 
                        const date = document.querySelector(".location .date")
                        date.innerText = responseObj.Date;

                        // Temperature 
                        const temperatureElement = document.querySelector(".current .temp")
                        temperatureElement.innerHTML = `${responseObj.Temperature}<span>°c</span>`;

                        // Weather 
                        const temperature = document.querySelector(".current .weather")
                        temperature.innerText = responseObj.Weather;


                        // Temperature Range 
                        const lowHighTemp = document.querySelector(".current .hi-low")
                        lowHighTemp.innerText = `${responseObj.LowTemp}°c / ${responseObj.HighTemp}°c`

                    });
            }
        })
    }

}

export { WeatherApp }