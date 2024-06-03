const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./User");
app.listen("3000");
mongoose.connect("mongodb://localhost:27017/appdb");

async function run() {
  const user = new User({
    name: "Hasan",
    age: 20,
  });
  user.save().then(() => console.log("user saved"));
  console.log(user);
}
run();
