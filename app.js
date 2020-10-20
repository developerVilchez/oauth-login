const express = require('express');
const app = express();

//view engine

app.set('view engine', 'ejs');


//create home route

app.get('/', (req, res) => {
  res.render('home')
})


app.listen(3000, () => {
  console.log('app now listennig for request on port 3000');
})