'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/listings/{listingId}',
    config: {
      description: 'Show a single listing',
      handler: function(request, reply){
        Listing.findById(request.params.listingId, function(err, listing){
          return reply(listing);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.showOne'
};
