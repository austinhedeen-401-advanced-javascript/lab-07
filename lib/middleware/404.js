'use strict';

/**
 * If a route is requested that has not been defined, log the occurrence and
 * respond with a 404 error.
 *
 * @param req
 * @param res
 */
module.exports = (req, res) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('Not Found');
};
