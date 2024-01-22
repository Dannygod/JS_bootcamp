require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth-route');
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

app.get('/', (req, res) => {
    res.render("index.ejs")
});
app.get('/auth/login', (req, res) => {
    res.render("login.ejs")
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});