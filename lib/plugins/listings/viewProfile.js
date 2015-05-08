'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/listings/list/{userId}',
    config: {
      description: 'Display a users listings',
      handler: function(request, reply){
        Listing.find({userId: request.params.userId}, function(err, listings){
          console.log(err);
          console.log('\n\n\n', listings);
          return reply({listings: listings});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.viewProfile'
};
