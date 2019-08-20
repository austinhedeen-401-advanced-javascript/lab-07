'use strict';

module.exports = message => {
  return (req, res, next) => {
    console.log(`${req.requestTime} ${req.method} ${req.path}`);
    console.log(`--> ${message}`);
    next();
  };
};
