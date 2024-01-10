const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() =>{
    console.log("Connect to MongoDB");
})
.catch((err)=>{
    console.log("Connect to MongoDB failed");
    console.log(err);
})

app.listen(6010, () => {
    console.log('Server is running on port 6010');
});