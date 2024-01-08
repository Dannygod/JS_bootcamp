const express = require("express");
const path = require("path");
const app = express();
// POST method
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); //middleware

app.get("/", (req, res) => {
    console.log(__dirname, "index.html");
    res.sendFile(path.join(__dirname, "form.html")); // Use path.join to construct the file path
});
app.post("/formHandling", (req, res) => {
    const {username, userage} = req.body;
    res.send(`表單成功送出 內容如下: 姓名: ${username} 年齡: ${userage}`);
});
app.get("/:errorPage", (req, res) => {
    console.log(req.params);
    res.send(`The page ${req.params.errorPage} is not exist!`);
}); // error page
app.listen(9288, () => {
    console.log("App is running at localhost:9288");
});