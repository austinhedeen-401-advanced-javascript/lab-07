'use strict';

const express = require('express');

// Middleware
const requestTime = require('./middleware/request-time.js');
const handle404 = require('./middleware/404');
const handle500 = require('./middleware/error');

// Routes
const categoryRouter = require('./routes/category-routes.js');

const app = express();

app.use('/docs', express.static('./docs'));

app.use(express.json());
app.use(requestTime);

app.use(categoryRouter);

app.use(handle404);
app.use(handle500);

/**
 * Start the server on a given port.
 *
 * @param port
 */
const start = port => {
  app.listen(port, () => console.log(`Listening on ${port}`));
};

module.exports = {
  server: app,
  start
};
