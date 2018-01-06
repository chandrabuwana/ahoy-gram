const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema =   new Schema({
  username: {
    type: String,
    unique: true
  },
  password : String,
  name: String
})

var User = mongoose.model('User', userSchema)

module.exports = User