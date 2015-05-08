'use strict';

var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users/{userId}',
    config: {
      description: 'Display a user profile',
      handler: function(request, reply){
        User.findById(request.params.userId, function(err, user){
          return reply({user: user});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.viewProfile'
};
