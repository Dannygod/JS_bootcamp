const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/:city", (req, res) => {
    let APIKey = "b141958406551710cb8bfb968718caf5";
    let {city} = req.params;
    console.log(city);
    let limit = 5;
    let lat = [];
    let lon = [];
    let temp = [];
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${APIKey}`
    fetch(url)
    .then((data) => data.json())
    .then((djs) => {
        // console.log(djs);
        djs.forEach((dj) => {
            lat.push(dj.lat);
            lon.push(dj.lon);
        });
    })
    for(let i = 0; i < lat.length; i++) {
        let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat[i]}&lon=${lon[i]}&appid=${APIKey}`;
        fetch(url2)
        .then((data) => data.json())
        .then((djs) => {
            console.log(djs);
            temp.push(djs.main.temp);            
        })
    }
    temp.forEach((t) => {
        t = Math.floor(t - 273.15);
        console.log(t);
    })
    res.render("weather.ejs", {city: city[0], temp: temp[0]});
});    



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

/*
async function fetchWeather() {
    // let lat = document.querySelector("#lat").value;
    // let lon = document.querySelector("#lon").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
    
    console.log(parsedData);
    let weather = parsedData.weather[0].main;
    let temp = parsedData.main.temp;
    temp = Math.floor(temp - 273.15);
    let humidity = parsedData.main.humidity;
    let wind = parsedData.wind.speed;
    let city = parsedData.name;
    let country = parsedData.sys.country;
    // let weatherContent = document.querySelector("#weather");
    // weatherContent.innerHTML = `
    //     <div class="weather-content">
    //         <h3 class="city">城市: ${city}, ${country}</h3>
    //         <h4 class="weather">天氣: ${weather}</h4>
    //         <h4 class="temp">溫度: ${temp}</h4>
    //         <h4 class="humidity">濕度: ${humidity}</h4>
    //         <h4 class="wind">風速: ${wind}</h4>
    //     </div>
    // `;
}
document.querySelector("#lat").addEventListener("input", () =>{
    fetchWeather();    
});
document.querySelector("#lon").addEventListener("input", () => {
    fetchWeather();
});
*/
