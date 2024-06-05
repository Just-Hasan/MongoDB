const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");
const app = express();
const genshinFemaleCharacters = require("./data/genshinFemaleCharacters");
app.listen("3000");
mongoose.connect(
  "mongodb+srv://iadore2code:test123@experiment.mk4zxt1.mongodb.net/appDb?retryWrites=true&w=majority"
);

async function deleteEverything() {
  await User.deleteMany({});
}
// deleteEverything();

async function multipleUsers() {
  try {
    const user = await User.insertMany(genshinFemaleCharacters);
    // user.save().then(() => console.log("user saved"));
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
// multipleUsers();

async function findUser() {
  try {
    const searchUser = await User.find({ name: "CR7" });
    console.log(searchUser);
  } catch (error) {
    console.log(`user not found`);
  }
}
// findUser();

async function deleteUser() {
  try {
    const user = await User.deleteMany({ name: "Hasan" });
    console.log(`user is deleted`);
  } catch (error) {
    console.log("Failed to delete user");
  }
}
// deleteUser();

async function updateUser() {
  try {
    await User.updateOne(
      { _id: "665e6fc424a920eb493d690a" },
      { name: "Sewey" }
    );
  } catch (error) {
    console.log("Failed to update user");
  }
}
// updateUser();

async function getAllUsers() {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
  } catch (error) {
    console.log("Failed to read data");
  }
}
// getAllUsers();

async function getSpecific() {
  try {
    const user = await User.where("name")
      .equals("Lisa")
      .populate("bestFriend")
      .limit(1);
    /*
    // Inserting bestfriend Id
    user[0].bestFriend = "6660544760f9de1ce2cfb99f";
    await user[0].save();
    */
    console.log(user);
  } catch (error) {
    console.log("Failed to read data");
  }
}
getSpecific();
