const express = require('express');
const storeController = require('../controller/storeController');
const router = express.Router();


// Gets the whole store
router.get('/', storeController.getStore, (req, res, next) => {
  res.status(200).json(res.locals.product);
})

// Gets products by category
router.get('/:category', storeController.getByCategory, (req, res, next) => {
  res.status(200).json(res.locals.product);
})

// Gets the product by id
router.get('/:category/:id', storeController.getById, (req, res, next) => {
  res.status(200).json(res.locals.product);
})


module.exports = router;