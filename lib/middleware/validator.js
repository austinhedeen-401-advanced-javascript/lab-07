'use strict';

module.exports = (req, res, next) => {
  // Equal probability to be true or false
  req.valid = Boolean(Math.floor(Math.random() * 2));
  next();
};
