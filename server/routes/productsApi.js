const express = require('express');
const storeController = require('../controller/storeController');
const cartController = require('../controller/cartControllers');
const router = express.Router();


// Gets the whole store
router.get('/', storeController.getStore, (req, res, next) => {
  res.status(200).json(res.locals.product);
});

// Gets products by category
router.get('/:category', storeController.getByCategory, (req, res, next) => {
  res.status(200).json(res.locals.product);
});

// Update cart
router.post('/cart', cartController.updateCart, (req, res, next) => {
  res.sendStatus(200);
})

// Gets the product by id
router.get('/:category/:id', storeController.getById, (req, res, next) => {
  res.status(200).json(res.locals.product);
});



module.exports = router;