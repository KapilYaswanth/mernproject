const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type : String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema); // User is a collection of users that will be created in mongo db