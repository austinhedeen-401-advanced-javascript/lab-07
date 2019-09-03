'use strict';

/**
 * Adds a requestTime property to the request object referencing the time of
 * the request.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
  req.requestTime = new Date();
  next();
};
