'use strict';

const app = require('../server');

let db = [];

// Route to Get All Categories
const get = (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
};

// Route to Create a Category
const post = (req, res, next) => {
  console.log(req.valid);
  if (!req.valid) {
    throw new Error();
    return;
  }
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
};

module.exports = {
  get,
  post
};
