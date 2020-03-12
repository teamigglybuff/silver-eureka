const bcrypt = require('bcrypt');

const saltRounds = 2;
const authController = {};

authController.encrypt = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hashed) => {
    if (err) return next({
      log: err,
      message: 'Error with hashing'
    })
    req.body.password = hashed;
    return next();
  })
}


// need to set cookies after login 
authController.setCookies = (req, res, next) => {
  res.cookie('isLogged', true, { maxAge: 1000 * 60 * 15 });
  return next();
}

// could add code later if needed
authController.checkCookies = (req, res, next) => {


}


module.exports = authController;