'use strict';

/**
 * Error middleware to handle any errors found during the request-response cycle.
 * Responds to the request with a 500 error.
 *
 * @param err
 * @param req
 * @param res
 * @param next
 */
module.exports = (err,req,res,next) => {
  console.log(err);
  res.status(500);
  res.send('Internal Server Error');
};
