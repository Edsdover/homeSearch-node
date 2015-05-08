'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/listings',
    config: {
      description: 'Get all listings for a user',
      handler: function(request, reply){
        Listing.find(function(err, listings){
          return reply({listings: listings});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.index'
};
