'use strict';

var Mongoose = require('mongoose');

var listingSchema = Mongoose.Schema({
  address: {type: String, required: true},
  price: {type: Number, required: true},
  sqft: {type: Number, required: true},
  picture: {type: String},
  bedrooms: {type: Number, required: true},
  bathrooms: {type: Number, required: true},
  lat: {type: Number},
  lng: {type: Number},
  userId: {type: Mongoose.Schema.ObjectId, ref: 'User', required: true},
  createdAt: {type: Date, required: true, default: Date.now}
});

var Listing = Mongoose.model('Listing', listingSchema);
module.exports = Listing;
