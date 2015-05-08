'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/listings/{listingId}',
    config: {
      description: 'Delete a listing',
      handler: function(request, reply){
        Listing.findOne({_id: request.params.listingId, userId: request.auth.credentials._id}, function(err, listing){
          listing.remove(function(){
            reply(request.params);
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.destroy'
};
