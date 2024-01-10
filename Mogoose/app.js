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
    name: String,
    age: Number,
    major: String,
    scholarship: {
        merit: Number,
        other: Number
    },
});
// create a model for students
const Student = mongoose.model("Student", studentSchema);
// save a Jon to database
const Jon = new Student({
    name: "Jon",
    age: 18,
    major: "Computer Science",
    scholarship: {
        merit: 1000,
        other: 500
    }
});
// save Jon to DB
// Jon.save()
// .then(() =>{
//     console.log("Jon has been saved to DB");
// })
// .catch((err) =>{
//     console.log("Error happend when saving Jon to DB");
//     console.log(err);
// });

// find Jon in DB
Student.updateOne(
    {name: "David"}, 
    {name: "Cindy"}
).then((mes) =>{
    console.log(mes);
});
// update merit plus 500 to every student
// Student.updateMany({}, {$inc: {"scholarship.merit": 500}}).then((data) =>{
//     console.log(data);
// });
Student.find({}).then((data) =>{
    console.log(data);
});
app.get('/', (req, res) =>{
    res.render('index.ejs');
})

app.listen(6010, () => {
    console.log('Server is running on port 6010');
});