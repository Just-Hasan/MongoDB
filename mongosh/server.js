const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./User");
app.listen("3000");
mongoose.connect(
  "mongodb+srv://iadore2code:test123@experiment.mk4zxt1.mongodb.net/appDb?retryWrites=true&w=majority"
);

async function run() {
  const user = new User({
    name: "Hasan",
    age: 20,
    hobbies: ["Coding", "Making YouTube contents", "Reading", "Exercising"],
    address: {
      street: "Jln. HKSN Gg.Swadayatani RT. 10, RW. 01",
      city: "Banjarmasin",
    },
  });
  user.save().then(() => console.log("user saved"));
  console.log(user);
}
run();
