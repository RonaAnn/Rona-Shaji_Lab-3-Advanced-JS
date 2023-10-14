import { WeatherAPI } from "./weather-api.js";

function testConstructURL() {
    const weatherObj = new WeatherAPI();

    var url = weatherObj.constructURL("Seoul");

    console.log(url);
}
//testConstructURL();

async function testInvokeURL() {

    const weatherObj = new WeatherAPI();
    var url = weatherObj.constructURL("Busan");
    console.log(url);

    const result = await weatherObj.invokeURL();
    console.log(result);
}

//testInvokeURL();

async function testResponseConversion() {
    const weatherObj = new WeatherAPI();
    var url = weatherObj.constructURL("Manama");

    const result = await weatherObj.invokeURL();

    const responseObj = weatherObj.responseConversion(result);
    console.log(responseObj);
}

testResponseConversion();