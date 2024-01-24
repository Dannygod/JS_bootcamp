const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');
const bcrypt = require('bcrypt');
const session = require('express-session');
const saltRounds = 11;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    console.log("Session created");
    secret: "secret",
    resave: false,
    saveUninitialized: false,
}));
mongoose.connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>{
    console.log("Connect to MongoDB");
}).catch((err)=>{
    console.log("Connect to MongoDB failed");
    console.log(err);
});
const requireLogin = (req, res, next) => {
    if(!req.session.isVerified){
        res.redirect("/login");
    }
    else{
        next();
    }
}

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/profile", requireLogin , (req, res) => {
    console.log(req.session);
    const { user } = req.session;
    res.render("profile", {user});
});
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.post("/signup", async (req, res, next) => {
    // console.log(req.body);
    const { username, userpassword } = req.body;
    try{
        const newUser = new User({ username, userpassword });
        // find same username
        let user = await User.findOne({username});
        console.log(user);
        if(user){
            res.send("Username already exists!");
            return;
        }
    // encrypt password
        bcrypt.genSalt(saltRounds, async (err, salt) => {
            if(err) next(err);
            console.log(salt);
            bcrypt.hash(newUser.userpassword, salt, async (err, hash)=>{
                if(err) next(err);
                newUser.userpassword = hash;
                console.log(hash);
                await newUser.save()
                .then(() =>{
                    res.send("Successfully signed up!");
                    console.log("User created!");
                })
                .catch((e) =>{
                    console.log(e);
                    next(e);
                });
            })
        })
    } catch(e){
        next(e);
    }
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res, next) => {
    const { username, userpassword } = req.body;
    try{
        let newUser = await User.findOne({username});
        // check password
        bcrypt.compare(userpassword, newUser.userpassword, (err, result) =>{
            if(err) next(err);
            if(result){
                req.session.isVerified = true;
                req.session.user = newUser.username;
                res.redirect("/profile");
            }
            else{
                res.send("Wrong username or password!");
            }
        })
    } catch(e){
        next(e);
    }
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