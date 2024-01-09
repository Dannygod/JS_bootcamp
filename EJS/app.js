const express = require('express');
const app = express();
// middleware
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/form', (req, res) => {
    res.render('form.ejs');
});
app.get('/response', (req, res) => {
    const { username, userage } = req.query;
    res.render('form_confirm.ejs', { username: username, userage: userage });
});
app.get('/:name', (req, res) => {
    const { name } = req.params;
    res.render('person.ejs', { name: name }); // {name} is same as {name:name}
});
const port = 6060;
app.listen(port, () => {
    console.log(`You are at port ${port}`);
})