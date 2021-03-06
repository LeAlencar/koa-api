const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema);