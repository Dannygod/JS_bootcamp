const express = require("express");
const path = require("path");
const app = express();
app.get("/", (req, res) => {
    console.log(__dirname, "index.html");
    res.sendFile(path.join(__dirname, "index.html")); // Use path.join to construct the file path
});
app.get("/p1", (req, res) => {
    res.send("網頁");
});
app.get("/p2", (req, res) => {
    res.send("網頁2");
});
// routing for pattern
app.get("/fruit/:kindOfFruit", (req, res) => {
    const {kindOfFruit} = req.params;
    const fruitList = ["apple", "banana", "guava"]
    fruitList.forEach(i => {
        if (kindOfFruit === i){
            res.send(`Fruit you are looking for: ${kindOfFruit}`);
        }
    });
    res.send(`Fruit you are looking for: Not found`);
});
app.get("/:errorPage", (req, res) => {
    console.log(req.params);
    res.send(`The page ${req.params.errorPage} is not exist!`);
}); // error page
app.listen(9288, () => {
    console.log("App is running at https://localhost:9288");
});