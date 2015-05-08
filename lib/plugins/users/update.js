'use strict';

var User = require('../../models/user');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users',
    config: {
      description: 'Update a user',
      validate: {
        payload: {
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          phone: Joi.number(),
          avatar: Joi.string().uri().required(),
          photo: Joi.string()
        }
      },
      handler: function(request, reply){
        if(request.auth.credentials._id){
          User.findByIdAndUpdate(request.auth.credentials._id, request.payload, saveCb);
        }else{
          var user = new User(request.payload);
          user.firebaseId = request.auth.credentials.firebaseId;
          user.save(saveCb);
        }

        function saveCb(err, user){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(user);
          }
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.update'
};
