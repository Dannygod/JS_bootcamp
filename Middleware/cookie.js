const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser("thisIsMySecret"));
app.get("/", (req, res) => {
    // res.cookie("name", "Jennifer");
    let {name} = req.cookies;
    let {address} = req.signedCookies;
    console.log(req.cookies);
    res.send(`Hello, ${name}, you live at ${address}`);
});
app.get("/cookie", (req, res) =>{
    res.cookie("address", "406 N. 4th Street", {signed: true});
    res.send("Cookie sent!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});