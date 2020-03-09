const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(express.static('public'));

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.listen(PORT, () => console.log('server listening on port ', PORT));
