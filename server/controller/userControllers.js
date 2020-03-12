const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const userControllers = {}


// Adds the user to the table
userControllers.signUp = (req, res, next) => {
  const newUser = {
    userName: req.body.userName,
    password: req.body.password
  }
  User.create(newUser, (err, response) => {
    if (err) return next({
      log: err,
      message: 'Error with creating a new user'
    })
    return next();
  })
}


// Check for user
userControllers.login = (req, res, next) => {
  const user = {
    userName: req.body.userName,
  }
  User.find(user, (err, response) => {
    if (err) return next({
      log: err,
      message: 'Error with login'
    })
    // console.log('This is the response from the found user:', response[0].password);
    if (response.length > 0) {
      const userPassword = req.body.password;
      const bcryptPassword = response[0].password;
      bcrypt.compare(userPassword, bcryptPassword, (err, result) => {
        if (err) return next({
          log: err,
          message: 'Error with bcrypt'
        })
        if (result) {
          res.locals.cart = response[0].cart;
          // res.locals.cart = response[0]
          next();
        }
        else return (res.send("Username or password isn't correct"));
      })
    }
    else return res.send("Username or password isn't correct");
  })
}

// Check if the username is already used
userControllers.check = (req, res, next) => {
  const info = { userName: req.body.userName }
  User.find(info, (err, response) => {
    if (err) return next({
      log: err,
      message: 'Error with checking for user'
    })
    console.log('response length', response.length)
    if (response.length === 0) return next()
    else res.send("UserName already exist")
    // res.send('Stop here')
  })
}

// send a error back to the front end 

module.exports = userControllers;