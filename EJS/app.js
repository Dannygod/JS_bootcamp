const express = require('express');
const app = express();
// middleware

app.use(express.static("public"));
let languages = [
    {name: "HTML", rate: 9.7, popularity: 1, trending: "super hot"},
    {name: "CSS", rate: 9.5, popularity: 2, trending: "same"}, 
    {name: "JavaScript", rate: 9.9, popularity: 3, trending: "super hot"},
    {name: "Python", rate: 9.9, popularity: 4, trending: "super hot"},
    {name: "Java", rate: 9.6, popularity: 5, trending: "hot"},
    {name: "C", rate: 9.5, popularity: 6, trending: "same"},
];
app.get('/', (req, res) => {
    res.render('index.ejs', {languages: languages});
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