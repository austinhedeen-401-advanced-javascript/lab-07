'use strict';

module.exports = (err, req, res, next) => {
  console.log("errorHandler called");
  if (!req.valid) {
    res.status(500);
    res.send("Invalid category");
  } else {
    next(err);
  }
};
