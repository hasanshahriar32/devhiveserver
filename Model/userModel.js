const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  image: String,
  
});
module.exports = model('user', userSchema)