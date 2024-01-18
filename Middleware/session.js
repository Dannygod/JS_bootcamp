const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const session = require("express-session");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser("thisIsMySecret"));
app.use(session({
    secret: "Dannygodnavbarmaster",
    resave: false,
    saveUninitialized: false,
}));
app.get("/", (req, res) => {
    res.send("home page");
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