/*
////////[Apa itu schema dalam mongoose]
Pada dasarnya schema adalah bentuk object (document)
yang akan dimasukan ke dalam suatu collection di database.

Sangat berguna & penting untuk konsistensi data
*/
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  /*
  ////////[mongoose.SchemaType.ObjectId]
  Pada dasarnya berarti bestfriends akan merefrensikan
  object lain yang memiliki ObjectId
  */
  bestFriend: mongoose.SchemaType.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

/*
////////[Penjelasan argument mongoose.model]
Argument pertama adalah nama dari collection yang
akan diubah menjadi bentuk plural, misal User menjadi users

Argument kedua adalah schema yang akan digunakan oleh model

Argument ketiga adalah nama collection yang ada di dalam
database
*/
// third params of mongoose model is the collection name in mongoDb
module.exports = mongoose.model("User", userSchema, "users2");
