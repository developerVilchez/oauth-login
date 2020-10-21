const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
    //opciones para la estrategia
    clientID : keys.google.clientID,
    clientSecret : keys.google.clientSecret,
    callbackURL : '/auth/google/redirect'
  }, () => {
    //passport callback function
  }))