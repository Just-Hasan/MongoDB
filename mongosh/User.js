/*
////////[Apa itu schema dalam mongoose]
Pada dasarnya schema adalah bentuk object (document)
yang akan dimasukan ke dalam suatu collection di database.

Sangat berguna & penting untuk konsistensi data
*/
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const userSchema = new mongoose.Schema({
  /*
  ////////[Membuat property secara sederhana]
  dibawah ini adalah cara sederhana dalam menentukan property dan type
  */
  name: String,

  /*
 ////////[Membuat property secara detail atau bisa disebut schema options] 
 dibawah ini adalah cara lebih detail dalam menentukan property dan type data

 type: tipe data dari property kita
 min : panjang minimum dari value yang akan dimiliki oleh properti kita
 max : panjang maximum dari value yang akan dimiliki oleh properti kita
 validate : digunakan untuk melakukan validasi terhadap data yang kita terima menggunakan function yang ada
            di validator function

  */
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (value) => value > 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    // match: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
    minLength: 10,
    required: true,
    lowercase: true,
    validate: {
      validator: (text) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(text),
      message: ({ mail }) => `${mail} doesn't contain @gmail.com`,
    },
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  /*
  ////////[mongoose.SchemaType.ObjectId]
  Pada dasarnya berarti bestfriends akan merefrensikan
  document lain yang memiliki ObjectId (bruh every document has an objectId)

  ref berfungsi untuk memberitau MongoDB, dari schema model mana dia harus mereferensikan
  data yang akan diambil, karena pada kasus ini kita ingin mereferensikan pada model yang sama
  maka kita gunakan model "User"

  */
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],

  /*
  ////////[Kita bisa menggunakan schema didalam schema]
  Misalnya pada property address, kita menggunakan addressSchema
  */
  address: addressSchema,
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
