var express = require('express');
var router = express.Router();

const authorization = require('./../utils/auth');

//this is the get for the register page (/users/login)
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'});
});

//this is the get for the register page (/users/register)
router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Register'});
});

//this is the post for the login page (/users/login)
router.post('/login', function(request, response) {
  // get user data from form
  var email = request.body.email;
  var password = request.body.password;
  // console.log(email);
  console.log(authorization.auth.authorize(email, password));
  if (authorization.auth.authorize(email, password)) {
      response.statusCode = 200;
      response.end();
  } else {
      response.statusCode = 403; // Forbidden
      response.end();
  }
});

module.exports = router;
