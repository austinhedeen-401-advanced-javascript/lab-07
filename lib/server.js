'use strict';

const express = require('express');

// Middleware
const requestTime = require('./middleware/request-time');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error-handler');
const validator = require('./middleware/validator');

// Routes
const categoryRoutes = require('./routes/category-routes');

const app = express();

app.use(express.json());
app.use(requestTime);

app.get('/categories', logger('Get all categories'), categoryRoutes.get);
app.post('/categories', logger('Get all categories'), validator, categoryRoutes.post);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

module.exports = {
  app,
  start: () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};
