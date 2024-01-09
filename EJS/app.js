const express = require('express');
const app = express();
// middleware
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("This is home page");
});
app.get('/:name', (req, res) => {
    const { name } = req.params;
    res.render('index.ejs', { name });
});
const port = 6060;
app.listen(port, () => {
    console.log(`You are at port ${port}`);
})