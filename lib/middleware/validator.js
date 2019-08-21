'use strict';

module.exports = (req, res, next) => {
  // TESTING - Coin flip validation: true 50% of the time
  // req.valid = Boolean(Math.floor(Math.random() * 2));

  // TODO - Implement actual validation
  req.valid = true;
  next();
};
