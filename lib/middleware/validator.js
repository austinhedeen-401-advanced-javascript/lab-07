'use strict';

module.exports = (req, res, next) => {
  // TESTING - Coin flip validation: true 50% of the time
  // req.valid = Boolean(Math.floor(Math.random() * 2));

  const object = req.body;

  // Simple validation assuring a 'name' property exists
  if (typeof object === 'object' && object.hasOwnProperty('name') && typeof object.name === 'string') {
    req.valid = true;
  } else {
    req.valid = false;
  }

  next();
};
