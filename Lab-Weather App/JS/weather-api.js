
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiId = 'c2bc87c15153d394fd8ec98dd5b78a99';
const unit = 'metric';

class WeatherAPI {

    constructURL(countryName) {
        this.apiURL = new URL(baseUrl);
        this.apiURL.searchParams.append("q", countryName);
        this.apiURL.searchParams.append("appid", apiId);
        this.apiURL.searchParams.append("units", unit);

        return this.apiURL.toString();
    }

    async invokeURL() {

        const response = await fetch(this.apiURL);
        const result = await response.json();

        return result;
    }

    responseConversion(responseJSON) {

        const weatherObj = {

            Location: `${responseJSON.name}, ${responseJSON.sys.country}`,
            Date: WeatherAPI.getDate(),
            Temperature: responseJSON.main.temp.toFixed(1),
            Weather: responseJSON.weather[0].main,
            LowTemp: responseJSON.main.temp_min.toFixed(1),
            HighTemp: responseJSON.main.temp_max.toFixed(1)
        }

        return weatherObj;
    }
    static getDate() {

        const today = new Date();

        return today.toLocaleDateString("us-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }
}


export { WeatherAPI }