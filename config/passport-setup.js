const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy({
    //opciones para la estrategia
    clientID : "#",
    clientSecret : "#",
    callbackURL : "#"
  }), () => {
    //passport callback function
  }
)