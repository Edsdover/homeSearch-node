'use strict';

var Mongoose = require('mongoose');

var userSchema = Mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  avatar: {type: String, required: true},
  photo: {type: String},
  phone: {type: Number},
  firebaseId: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now}
});

var User = Mongoose.model('User', userSchema);
module.exports = User;
