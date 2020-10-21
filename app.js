const express = require('express');
const app = express();
const authRouter = require('./routes/oauth-routes');


//view engine
app.set('view engine', 'ejs');

//set up router
app.use('/auth', authRouter)


//create home route

app.get('/', (req, res) => {
  res.render('home')
})


app.listen(3000, () => {
  console.log('app now listennig for request on port 3000');
})