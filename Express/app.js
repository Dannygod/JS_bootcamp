// const sayHi = require("./test");
// // console.log(sayHi);
// console.log(sayHi);

const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("網頁載入成功");
    res.end();
})

app.listen(9288, () => {
    console.log("App is running at 9288");
})
