const express = require('express');
const app = express();
const authRouter = require('./routes/oauth-routes');
const profileRouter = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
//view engine
app.set('view engine', 'ejs');

//Creamos la cookie, va tener duracion de 1 dia , con el key lo vamos a encriptar

app.use(cookieSession({
  maxAge : 24 * 60 * 60 * 1000,
  keys : [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//Connect con mongodb
const db = keys.mongo.db;
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log(`Connected to mongo cloud`))
.catch((err) => console.log(err) )


//set up router
app.use('/auth', authRouter);
app.use('/profile', profileRouter);

//create home route
app.get('/', (req, res) => {
  res.render('home', {user: req.user})
})


app.listen(5001, () => {
  console.log('app now listennig for request on port 5001');
})