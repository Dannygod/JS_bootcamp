const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
const middleware = (req, res, next) => {
  console.log("hello");
  next();  
}
mongoose
  .connect("mongodb://localhost:27017/test", {
    // useFindAndModify: false,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((e) => {
    console.log(e);
  });

const MonkeySchema = new mongoose.Schema({
  name: {
    type: String,
    minlenth: 5,
    required: [true, "Name is required"],
  }
});
const Monkey = mongoose.model("Monkey", MonkeySchema);
// let newMonkey = new Monkey({
//   name: "IU",
// });

app.get("/", async (req, res, next) => {
  try{
    await Monkey.findOe({name: "I"})
    .then((data) => {
      res.send("Monkey found");
      console.log(data);
    })
    .catch((e) => {
      res.send("Monkey not found");
      console.log(e);
    });
  }
  catch(err){
    next(err);
  }
});
// error handler
app.use((err, req, res, next) =>{
  console.log(err);
  res.status(500).send("Something went wrong :(<br>" + err);
});

// app.get("/", middleware, (req, res) =>{
//   res.send("Hello World");
// });

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
