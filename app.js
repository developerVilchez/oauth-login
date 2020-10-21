const express = require('express');
const app = express();
const authRouter = require('./routes/oauth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//console.log(passportSetup)


//view engine
app.set('view engine', 'ejs');

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


app.listen(3000, () => {
  console.log('app now listennig for request on port 3000');
})