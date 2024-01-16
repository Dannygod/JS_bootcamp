
let APIKey = "b141958406551710cb8bfb968718caf5";

async function fetchWeather() {
    let lat = document.querySelector("#lat").value;
    let lon = document.querySelector("#lon").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    let weather = parsedData.weather[0].main;
    let temp = parsedData.main.temp;
    temp = Math.floor(temp - 273.15);
    let humidity = parsedData.main.humidity;
    let wind = parsedData.wind.speed;
    let city = parsedData.name;
    let country = parsedData.sys.country;
    let weatherContent = document.querySelector("#weather");
    weatherContent.innerHTML = `
        <div class="weather-content">
            <h3 class="city">城市: ${city}, ${country}</h3>
            <h4 class="weather">天氣: ${weather}</h4>
            <h4 class="temp">溫度: ${temp}</h4>
            <h4 class="humidity">濕度: ${humidity}</h4>
            <h4 class="wind">風速: ${wind}</h4>
        </div>
    `;
}
document.querySelector("#lat").addEventListener("input", () =>{
    fetchWeather();    
});
document.querySelector("#lon").addEventListener("input", () => {
    fetchWeather();
});