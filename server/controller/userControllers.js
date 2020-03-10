const User = require('../models/userModels')
const userControllers = {}


// Adds the user to the table
userControllers.addUser = (req, res, next) => {
  const newUser = {
    userName: req.body.userName,
    password: req.body.password,
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
userControllers.checkUser = (req, res, next) => {
  const user = {
    userName: req.body.userName,
    password: req.body.password,
  }
  User.find(user, (err, response) => {
    console.log(response)
    if (err) return next({
      log: err,
      message: 'Error with finding user'
    })
    return next();
  })
}


module.exports = userControllers;