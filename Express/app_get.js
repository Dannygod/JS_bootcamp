const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    console.log(__dirname, "index.html");
    res.sendFile(path.join(__dirname, "form.html")); // Use path.join to construct the file path
});
app.get("/formHandling", (req, res) => {
    const {username, userage} = req.query;
    res.send(`表單成功送出 內容如下: 姓名: ${username} 年齡: ${userage}`);
});
app.get("/:errorPage", (req, res) => {
    console.log(req.params);
    res.send(`The page ${req.params.errorPage} is not exist!`);
}); // error page
app.listen(9288, () => {
    console.log("App is running at localhost:9288");
});