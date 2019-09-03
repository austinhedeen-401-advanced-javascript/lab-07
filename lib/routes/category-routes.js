'use strict';

const express = require('express');

const logger = require('../middleware/logger.js');
const validator = require('../middleware/validator.js');

const apiRouter = express.Router();

let db = [];

/**
 * Get an object of the result count and a list of categories.
 * @route GET /categories
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
apiRouter.get('/categories', logger('Get all categories'), (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

/**
 * Create a category and return the created record.
 * @route POST /categories
 * @returns {object} 200 - A category object
 * @returns {Error}  500 - Server error
 */
apiRouter.post('/categories', logger('Create a category'), validator, (req, res, next) => {
  if (!req.valid) {
    next('Invalid Request')
  }
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
});

module.exports = apiRouter;
