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
    res.locals.product = response.rows;
    return next();
  })
}

// gets the item by category
storeController.getByCategory = (req, res, next) => {
  const { category } = req.params;
  const product = 'SELECT * FROM store WHERE category = $1'
  db.query(product, [category], (err, response) => {
    if (err) next({
      log: err,
      message: 'Error with getting products by category'
    })
    res.locals.product = response.rows;
    return next();
  })
}

// gets the item by id
storeController.getById = (req, res, next) => {
  const { id } = req.params;
  const item = 'SELECT * FROM store where id = $1'
  db.query(item, [id], (err, response) => {
    if (err) next({
      log: err,
      message: 'Error with getting products by Id'
    })
    res.locals.product = response.rows;
    return next();
  })
}



module.exports = storeController;