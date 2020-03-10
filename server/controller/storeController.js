const db = require('../models/storeModels');
const storeController = {}

// Gets all the items within the store
storeController.getStore = (req, res, next) => {
  const store = 'SELECT * FROM store'
  db.query(store, (err, response) => {
    if (err) next({
      log: err,
      message: 'Error with getting the store'
    })
    res.locals.store = response.rows;
    return next();
  })
}

// req.body.param.category
// req.body.param.id


// gets the item by category
storeController.getByCategory = (req, res, next) => {
  const category = req.body.param.category;
  const product = 'SELECT * FROM store WHERE category = $1'
  db.query(product, [category], (err, response) => {
    if (err) next({
      log: err,
      message: 'Error with getting products by category'
    })
    res.locals.category = response.rows;
    return next();
  })
}


module.exports = storeController;