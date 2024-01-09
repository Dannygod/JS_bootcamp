const express = require("express");
const path = require("path");
const app = express();
// serving static file
app.use(express.static("public"));

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
            // let fruitHTML = document.querySelector(".showFruit");
            // fruitHTML.innerHTML(`<h4>你是不是在找: ${kindOfFruit}</h4>`);
            res.send(`你是不是在找: ${kindOfFruit}`);
        }
    });
});
app.get("/fruit", (req, res) => {
    res.sendFile(path.join(__dirname, "fruit.html")); // Use path.join to construct the file path
});
app.get("/mike", (req, res) => {
    res.status(302);
    res.sendFile(path.join(__dirname, "moved.html")); // Use path.join to construct the file path
});

app.get("/:errorPage", (req, res) => {
    // let {errorPage} = req.params;
    // console.log(req.params);
    // res.send(`The page ${req.params.errorPage} is not exist!`);
    res.status(404);
    res.sendFile(path.join(__dirname, "errorPage.html")); // Use path.join to construct the file path
}); // error page
app.listen(9288, () => {
    console.log("App is running at https://localhost:9288");
});