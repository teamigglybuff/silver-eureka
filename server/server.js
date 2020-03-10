const express = require('express');
const path = require('path');
const productsRouter = require('./routes/productsApi.js');
const mongoose = require('mongoose');
const userControllers = require('./controller/userControllers');

const app = express();
const PORT = 3000;




app.use(express.json());

app.use(express.static('public'));

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

const mongoUri = 'mongodb+srv://weeyum:Vc19woUSWjVBAiKv@silvereureka-8q8fd.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use((req, res, next) => {
  console.log('-----FLOW TEST-----')
  console.log()
  console.log('Endpoint ', req.url)
  console.log('Method ', req.method)
  console.log('Body ', req.body)
  console.log('Query ', req.query)
  return next();
})

// TODO should I send anything back here? 
// Creates a new user
app.post('/createUser', userControllers.addUser, (req, res, next) => {
  res.status(200).json("user created!");
})

app.get('/getUser', userControllers.checkUser, (req, res, next) => {
  res.status(200).json("User found!")
})

app.use('/products', productsRouter);


// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'An error has happened in the middleware',
    status: 400,
    message: 'Unknown error within middleware'
  }
  const newErr = Object.assign(defaultErr, err);
  return res.status(newErr.status).json(newErr.message);
})


app.listen(PORT, () => console.log('server listening on port ', PORT));
