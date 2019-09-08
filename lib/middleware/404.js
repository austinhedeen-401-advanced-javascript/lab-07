'use strict';
/**
 * @module
 */

/**
 * If a route is requested that has not been defined, log the occurrence and
 * respond with a 404 error.
 *
 * @param request
 * @param response
 */
const handle404 = (request, response) => {
  console.log('Unknown Route');
  response.status(404);
  response.send('Not Found');
};

module.exports = handle404;
