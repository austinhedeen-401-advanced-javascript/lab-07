'use strict';

const handle404 = (req, res, next) => {
  res.status(404);
  return res.send('Not found');
};

const handle500 = (err, req, res, next) => {
  if (!req.valid) {
    res.status(500);
    res.send("Invalid category");
  } else {
    next(err);
  }
};

module.exports = {
  handle404,
  handle500
};
