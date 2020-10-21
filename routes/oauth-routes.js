const express = require('express');
//Esto es un objeto y le agregamos metodos 
const router = express.Router();

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
router.get('/google', (req, res) => {
  //handle with passpord
  res.send('login in with google')
})


//Aqui los exportamos
module.exports = router;
