const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student = require("./models/student");
const methodOverride = require("method-override");
const { response } = require("express");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
mongoose.set("useFindAndModify", false);

mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to mongoDB.");
  })
  .catch((e) => {
    console.log("Connection failed.");
    console.log(e);
  });
// GET method
app.get("/students", async (req, res) => {
  try {
    let data = await Student.find();
    res.send(data);
  } catch {
    res.send({ error: "Error with finding data." });
  }
});
app.get("/students/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let data = await Student.findOne({ id });
    if (data !== null) {
      res.send(data);
    } else {
      res.status(404);
      res.send({ error: "Cannot find this student. Please enter a valid id." });
    }
  } catch (e) {
    res.status(404);
    res.send({ error: "Error with finding data." });
    console.log(e);
  }
});
// POST method
app.post("/students", (req, res) => {
  let { id, name, age, merit, other } = req.body;
  let newStudent = new Student({
    id,
    name,
    age,
    scholarship: { merit, other },
  });
  newStudent
    .save()
    .then(() => {
      res.send("Student accepted.");
    })
    .catch((e) => {
      res.status(404);
      res.send(e);
    });
});
// PUT method
app.put("/students/:id", async (req, res) => {
  let { id, name, age, merit, other } = req.body;
  try {
    let d = await Student.findOneAndUpdate(
      { id },
      { id, name, age, scholarship: { merit, other } },
      {
        new: true,
        runValidators: true,
      }
    );
    res.send("Updated successfully.");
  } catch(e){
    res.status(404);
    res.send(e);
  }
});
class newData {
  constructor(){}
  setProperty(key, value){
    if(key == "merit" || key == "other"){
      this[`scholarship.${key}`] = value;
    }
    else{
      this[key] = value;
    }
  }
}
// PATCH method
app.patch("/students/:id", async (req, res) => {
  let { id } = req.params;
  let { name, age, merit, other } = req.body;
  let newObj = new newData();
  console.log(req.body);
  for (let property in req.body) {
    newObj.setProperty(property, req.body[property]); // setProperty(key, value)
  }
  console.log(newObj);
  try {
    let d = await Student.findOneAndUpdate(
      { id },
      newObj,
      {
        new: true,
        runValidators: true,
      }
    );
    res.send(d);
    // res.send("Updated successfully.");
  } catch(e){
    res.status(404);
    res.send(e);
  } 
});

// DELETE method
app.delete("/students/delete/:id", (req, res) => {
  let { id } = req.params;
  Student.deleteOne({ id })
    .then((meg) => {
      console.log(meg);
      res.send("Deleted successfully.");
    })
    .catch((e) => {
      console.log(e);
      res.send("Delete failed.");
    });
});

app.get("/*", (req, res) => {
  res.status(404);
  res.send("Not allowed.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
