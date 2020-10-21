const express = require('express');
//Esto es un objeto y le agregamos metodos 
const router = express.Router();
const passport = require('passport');


//Login aouth
router.get('/login', (req, res) => {
  res.render('login')
})

//auth logout
router.get('/logout', (req, res ) => {
  //handle with password
  res.send('logging out')
})

//auth with google
router.get('/google', passport.authenticate('google', {
  scope :['profile']
}))


//handle callback route for google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  //res.send(req.user)
  res.redirect('/profile/')
})



//Aqui los exportamos
module.exports = router;
