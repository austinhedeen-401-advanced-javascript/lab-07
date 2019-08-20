'use strict';

const express = require('express');

const requestTime = require('./middleware/request-time');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error-handler');
const validator = require('./middleware/validator');

const app = express();

let db = [];

app.use(express.json());
app.use(requestTime);

// Route to Get All Categories
app.get('/categories', logger('Get all categories'), (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Create a Category
app.post('/categories', logger('Create a category'), validator, (req, res, next) => {
  console.log(req.valid);
  if (!req.valid) {
    throw new Error();
    return;
  }
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
});

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

module.exports = {
  app,
  start: () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};
