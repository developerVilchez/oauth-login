const express = require('express');
const router = express.Router();

const authCheck = (req, res, next) => {
  if(!req.user){
    res.redirect('/auth/login')
  } else {
    next();
  }
};


router.get('/', authCheck, (req, res) => {
  //res.render('')
  res.send('Ya iniciaste sesion en nuestra aplicacion este es tu profile ' + req.user.username)
})

module.exports = router;