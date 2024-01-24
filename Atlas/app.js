require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth-route');
const profileRoute = require('./routes/profile-route');
const passport = require('passport');
const session = require("express-session");
const flash = require("connect-flash");
require("./config/passport");
mongoose.connect(process.env.DB_CONNECT, {
}).then(() => {
    console.log('Connected to mongo atlas');
}).catch((err) => {
    console.log(err);
});
// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_mes = req.flash("success_mes");
    res.locals.error_mes = req.flash("error_mes");
    next();
});

app.use('/auth', authRoute);
app.use('/profile', profileRoute);

app.get('/', (req, res) => {
    res.render("index", { user: req.user });
});
app.get('/auth/login', (req, res) => {
    res.render("login", { user: req.user });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});