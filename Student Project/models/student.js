const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        max: [80, "Too old to go to school!"],
        min: [0, "Too young to go to school!"],
    },
    scholarship:{
        merit:{
            type: Number,
            max: [5000, "Too much for merit scholarship!"],
            min: 0,
        },
        other:{
            type: Number,
            min: 0,
        },
    },
})
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;