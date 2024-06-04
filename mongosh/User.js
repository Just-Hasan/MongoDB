const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  bestFriend: mongoose.SchemaType.ObjectId,
  hobbies: [String],
  address: {
    sreet: String,
  },
});
module.exports = mongoose.model("User", userSchema, "users2");
