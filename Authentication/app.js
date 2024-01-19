const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>{
    console.log("Connect to MongoDB");
}).catch((err)=>{
    console.log("Connect to MongoDB failed");
    console.log(err);
});

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.post("/signup", async (req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body;
    const newUser = new User({ username, userpassword: password });
    try{
        await newUser.save()
        .then(() =>{
            res.send("Successfully signed up!");
            console.log("User created!");
        })
        .catch((e) =>{
            console.log(e);
            next(e);
        });
    } catch(e){
        next(e);
    }
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res, next) => {
    
});    
app.get("/", (req, res) => {
    res.render('index');
});
// error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Something went wrong :(<br>" + err);
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});