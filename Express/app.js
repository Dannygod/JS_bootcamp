const express = require("express");
const app = express();
app.get("/", (req, res) => {
    // console.log(req);
    res.send("網頁 首頁");
    // res.send("The First page");
    res.end();
})

app.listen(9288, () => {
    console.log("App is running at 9288");
})
