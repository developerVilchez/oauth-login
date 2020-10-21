const express = require('express');
const app = express();
const authRouter = require('./routes/oauth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
//view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge : 24 * 60 * 60 * 1000,
  keys : [key.session.cookieKey]
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
app.use('/auth', authRouter)


//create home route
app.get('/', (req, res) => {
  res.render('home')
})


app.listen(5001, () => {
  console.log('app now listennig for request on port 5001');
})