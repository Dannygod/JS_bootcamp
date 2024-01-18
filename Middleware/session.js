require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const session = require("express-session");
const flash = require("connect-flash");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(process.env.SECRET));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());
app.get("/", (req, res) => {
    req.flash("success_mes", "successfully logged in");
    if(req.session.isVerified){
        res.send("home page<br>" + req.flash("success_mes"));
    }
    else{
        res.send("home page<br>");
    }
});
app.get("/verified", (req, res) => {
    req.session.isVerified = true;
    res.send("You are verified!");
});
app.get("/admin", (req, res) =>{
    if(req.session.isVerified){
        res.send("Welcome to the admin page");
    }
    else{
        res.status(403);
        res.send("Forbidden!");
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});