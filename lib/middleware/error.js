'use strict';
/**
 * @module
 */

/**
 * Error middleware to handle any errors found during the request-response cycle.
 * Responds to the request with a 500 error.
 *
 * @param error
 * @param request
 * @param response
 */
const handleError = (error, request, response) => {
  console.log(error);
  response.status(500);
  response.send('Internal Server Error');
};

module.exports = handleError;
