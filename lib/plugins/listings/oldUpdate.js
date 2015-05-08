'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/listings/{listingId}',
    config: {
      description: 'Update a listing',
      handler: function(request, reply){
        Listing.findByIdAndUpdate(request.params.listingId, request.payload, function(err, listing){
          return reply(listing);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.update'
};
