const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect("mongodb+srv://Cluster91855:ZEV1T1ZUUV91@cluster91855.jprvfen.mongodb.net/", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});