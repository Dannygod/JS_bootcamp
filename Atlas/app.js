require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user-model');
const authRoute = require('./routes/auth-route');
const profileRoute = require('./routes/profile-route');
require("./config/passport");
mongoose.connect(process.env.DB_CONNECT, {
}).then(() => {
    console.log('Connected to mongo atlas');
}).catch((err) => {
    console.log(err);
});
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/auth', authRoute);
app.use('/profile', profileRoute);

app.get('/', (req, res) => {
    res.render("index.ejs")
});
app.get('/auth/login', (req, res) => {
    res.render("login.ejs")
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});