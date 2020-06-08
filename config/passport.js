const LocalStrategy = require('passport-local').Strategy;
 var BasicStrategy = require('passport-http').BasicStrategy;
// var DigestStrategy = require('passport-http').DigestStrategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
//TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
var configAuth = require('./authkey');
// Load User model
const User = require('../models/user');
//const Role = require('../models/Role');
const JwtStrategy = require('passport-jwt').Strategy;
const pExtractJwt = require('passport-jwt');
var ExtractJwt =pExtractJwt.ExtractJwt;
module.exports = function(passport) {
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
//opts.issuer = 'accounts.examplesoft.com';
//opts.audience = 'yoursite.net';
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  
    User.findOne({id:jwt_payload.id}, function(err, user) {
        if (err) {
           console.log(err)
          resizeBy.send(jwt_payload)
        }
        if (user) {
          console.log(user)
          return done(null, user);
         
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
})
);
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email,
        password:password
        //validated:true
      },function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

       
       if (user) {
         return done(null, user);
       } else {
           return done(null, false);
           // or you could create a new account
       }
        
      }).catch((err)=>res.send({"error":error,"info": info}))
    })
  );
  passport.use(
    new BasicStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        if (user) {
          return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
         
      }).catch(console.error()
      );
    })
  );
//   passport.use(
//     new DigestStrategy({ usernameField: 'email' }, (email, password, done) => {
//       // Match user
//       User.findOne({
//         email: email
//       }).then(user => {
//         if (!user) {
//           return done(null, false, { message: 'That email is not registered' });
//         }

//         // Match password
//         bcrypt.compare(password, user.password, (err, isMatch) => {
//           if (err) throw err;
//           if (isMatch) {
//             return done(null, user);
//           } else {
//             return done(null, false, { message: 'Password incorrect' });
//           }
//         });
//       });
//     })
//   );

//   passport.use(new FacebookStrategy({

//     // pull in our app id and secret from our auth.js file
//     clientID        : configAuth.facebookAuth.clientID,
//     clientSecret    : configAuth.facebookAuth.clientSecret,
//     callbackURL     : configAuth.facebookAuth.callbackURL

// },

// // facebook will send back the token and profile
// function(token, refreshToken, profile, done) {
//   const role=Role.User;
//   console.log('token');
// console.log(token);
// console.log('profile');

// console.log(profile);

//     // asynchronous
//     process.nextTick(function() {

//         // find the user in the database based on their facebook id
//         User.findOne({ fbid : profile.id }, function(err, user) {

//             // if there is an error, stop everything and return that
//             // ie an error connecting to the database
//             if (err)
//                 return done(err);
//             // if the user is found, then log them in
//             if (user) {
//                 return done(null, user); // user found, return that user
//             } else {
//                 // if there is no user found with that facebook id, create them
//                    // set all of the facebook information in our user model
//                    fbid    = profile.id; // set the users facebook id                   
//                    token = token; // we will save the token that facebook provides to the user                    
//                    name  = profile.displayName; // look at the passport user profile to see how names are returned
//                    email = profile.email; // facebook can return multiple emails so we'll take the first
   
//                 const newUser = new User({
//                   name,
//                   email,
//                   token,
//                   fbid,
//                   role
//                 });

             
//                 // save our user to the database
//                 newUser.save(function(err) {
//                     if (err)
//                         throw err;

//                     // if successful, return the new user
//                     return done(null, newUser);
//                 });
//             }

//         });
//     });

// }));
// passport.use(new GoogleStrategy({
//   consumerKey:configAuth.googleAuth.clientID, 
//   consumerSecret: configAuth.googleAuth.clientSecret,
//   callbackURL: configAuth.googleAuth.callbackURL
// },
// function(token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
// }
// ));
// passport.use(new TwitterStrategy({
//   consumerKey: configAuth.twitterAuth.consumerKey,
//   consumerSecret: configAuth.twitterAuth.consumerSecret,
//   callbackURL: configAuth.twitterAuth.callbackURL
// },
// function(token, tokenSecret, profile, done) {
//   User.findOrCreate({}, function(err, user) {
//     if (err) { return done(err); }
//     done(null, user);
//   });
// }
// ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
