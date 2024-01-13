const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() =>{
    console.log("Connect to MongoDB");
})
.catch((err)=>{
    console.log("Connect to MongoDB failed");
    console.log(err);
})
// define a schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        requried: [true, "Age is required"]
    },
    major: {
        type: String,
        enum: ["Computer Science", "Math", "Physics"],
    },
    scholarship: {
        merit: {
            type: Number,
        },
        other: {
            type: Number,
        }
    },
});
// create a model for students
const Student = mongoose.model("Student", studentSchema);
// save a Jon to database
const Kelly = new Student({
    name: "Kelly",
    age: Math.floor(Math.random() * 10) + 18,
    major: "Computer Science",
    scholarship: {
        merit: Math.floor(Math.random() * 1000) + 500,
        other: Math.floor(Math.random() * 500) + 100
    }
});
// save Jon to DB
// Kelly.save()
// .then(() =>{
//     console.log("Kelly has been saved to DB");
// })
// .catch((err) =>{
//     console.log("Error happend when saving Jon to DB");
//     console.log(err);
// });

// find Jon in DB
// Student.findOneAndUpdate(
//     {name: "Eva"}, 
//     {name: "Jenny"},
//     {new: true}
// ).then((mes) =>{
//     console.log(mes);
// });

// update merit plus 500 to every student
// Student.updateMany({}, {$inc: {"scholarship.merit": 500}}).then((data) =>{
//     console.log(data);
// });

// find all students
// Student.find({}).then((data) =>{
//     console.log(data);
// });

// delete Jon
Student.findOneAndDelete({name: "Kelly"}).then((data) => {
    console.log(data);
});

app.get('/', (req, res) =>{
    res.render('index.ejs');
})

app.listen(6010, () => {
    console.log('Server is running on port 6010');
});