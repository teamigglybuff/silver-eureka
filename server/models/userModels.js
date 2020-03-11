const mongoose = require('mongoose');

const { Schema } = mongoose;


// User Schema 
const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  cart: { type: Array }
})

const User = mongoose.model('User', userSchema);

// Need to export the schema 
module.exports = User;