const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const Student = require('./models/student');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/studentDB", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to DB");
})
.catch((e)=>{
    console.log("Connection failed");
    console.log(e);
})
app.get('/', (req, res) =>{
    res.render('index.ejs');
})
app.get('/student/add', (req, res) =>{
    res.render('studentForm.ejs');
})
app.post("/student/add", (req, res)=>{
    const {id, name, age, merit, other} = req.body;
    console.log(req.body);
    res.send("Thanks for posting");
    const newStudent = new Student({id, name, age, scholarship: {merit, other},
    });
    newStudent.save()
    .then(()=>{
        console.log("New student added");
    }).catch((e)=>{ 
        console.log("Error adding student");
        console.log(e);
        res.status(500).send("Error adding student");
    });
});
app.listen(3000, ()=>{
    console.log('Server started on port 3000');
})