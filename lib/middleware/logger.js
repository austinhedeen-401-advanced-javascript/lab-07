'use strict';
/**
 * @module
 */

/**
 * Returns a middleware function which logs the request time, method, path, and
 * given message to the console.
 *
 * @param message - The custom message to log with this middleware
 * @returns {Function} The middleware function
 */
const log = message => {
  return (req, res, next) => {
    console.log(`${req.requestTime} ${req.method} ${req.path}`);
    console.log(`--> ${message}`);
    next();
  };

};

module.exports = log;
