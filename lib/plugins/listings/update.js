'use strict';

var Listing = require('../../models/listing');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/listings',
    config: {
      description: 'Update or Create a listing',
      validate: {
        payload: {
          address: Joi.string().required(),
          price: Joi.number().required(),
          sqft: Joi.number().required(),
          picture: Joi.string(),
          bedrooms: Joi.number().required(),
          bathrooms: Joi.number().required(),
          lat: Joi.number(),
          lng: Joi.number()
        }
      },
      handler: function(request, reply){
        if(request.payload._id){
          Listing.findByIdAndUpdate(request.payload._id, request.payload, saveCb);
        }else{
          var listing = new Listing(request.payload);
          listing.userId = request.auth.credentials._id;
          listing.save(saveCb);
        }

        function saveCb(err, listing){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(listing);
          }
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.updateCreate'
};
