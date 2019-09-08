'use strict';
/**
 * @module
 */

/**
 * Validate the client request to assure a 'name' property exists.
 * @param request
 * @param result
 * @param next
 */
const validator = (request, result, next) => {
  // TESTING - Coin flip validation: true 50% of the time
  // request.valid = Boolean(Math.floor(Math.random() * 2));

  const object = request.body;

  // Simple validation assuring a 'name' property exists
  request.valid =
    typeof object === 'object'
    && object.hasOwnProperty('name')
    && typeof object.name === 'string';

  next();
};

module.exports = validator;
