require('dotenv').config()
const express = require("express");
const app = express();
const APIKey = process.env.API_KEY;
// const fetch = require("node-fetch");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/:city", async (req, res) => {
    try {
        let {city} = req.params;
        let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
        const data = await fetch(url2)
        const djs = await data.json();
        console.log(djs);
        let temp = (Math.floor(djs.main.temp - 273.15));
        res.render("weather.ejs", {djs, temp});
    }
    catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
