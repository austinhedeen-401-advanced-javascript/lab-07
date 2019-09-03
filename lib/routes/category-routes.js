'use strict';

const express = require('express');

const logger = require('../middleware/logger.js');
const validator = require('../middleware/validator.js');

const apiRouter = express.Router();

let db = [];

// Route to Get All Categories
apiRouter.get('/categories', logger('Get all categories'), (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Create a Category
apiRouter.post('/categories', logger('Create a category'), validator, (req, res, next) => {
  if (!req.valid) {
    next('Invalid ')
  }
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
});

module.exports = apiRouter;
