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
app.get("/", (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});