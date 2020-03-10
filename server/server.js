const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api')

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(express.static('public'));

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.use('/api', apiRouter);



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
