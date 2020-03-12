const User = require('../models/userModels');

const cartController = {}

cartController.updateCart = (req, res, next) => {
  const user = {
    userName: req.body.userName,
  }
  const cartUpdate = {
    cart: req.body.cart,
  }
  console.log('this is the cart: ', req.body.cart)
  User.update(user, cartUpdate, (err, response) => {
    if (err) next({
      log: err,
      message: 'update cart error'
    })
    return next();
  })
}

module.exports = cartController;

