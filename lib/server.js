'use strict';

const express = require('express');

const requestTime = require('./middleware/request-time');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error-handler');

const app = express();

let db = [];

app.use(express.json());
app.use(requestTime);
app.use(errorHandler);

// Route to Get All Categories
app.get('/categories', logger('Get all categories'), (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Create a Category
app.post('/categories', logger('Create a category'), (req, res, next) => {
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
});

const PORT = process.env.PORT || 8080;

module.exports = {
  app,
  start: () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};
