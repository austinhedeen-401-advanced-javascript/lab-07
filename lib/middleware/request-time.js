'use strict';
/**
 * @module
 */

/**
 * Adds a requestTime property to the request object referencing the time of
 * the request.
 *
 * @param request
 * @param result
 * @param next
 */
const requestTime = (request, result, next) => {
  request.requestTime = new Date();
  next();
};

module.exports = requestTime;
