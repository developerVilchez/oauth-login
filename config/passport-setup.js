const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');

passport.serializeUser((user, done) => {
  done(null, user);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  });
});



passport.use(
  new GoogleStrategy({
    //opciones para la estrategia
    clientID : keys.google.clientID,
    clientSecret : keys.google.clientSecret,
    callbackURL : '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile._json.picture);
    //Verificamos si el usuario existe en la base de datos  
    User.findOne({ googleId:profile.id })
      .then((currentUser) => {
        if(currentUser) {
         console.log(`El usuario es ${currentUser}`);
         done(null, currentUser)   
        }else {
          // Creamos un nuevo usuario
        new User({
          username : profile.displayName,
          googleId : profile.id,
          imageUser : profile._json.picture
          }).save().then((newUser) => {
          console.log(`Nuevo usuario creado ${newUser}`);
          done(null, newUser)
        })
      }
    })
  }))