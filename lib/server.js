'use strict';

const express = require('express');

// Middleware
const requestTime = require('./middleware/request-time');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const { handle404, handle500 } = require('./middleware/handle-status');

// Routes
const categoryRoutes = require('./routes/category-routes');

const app = express();

app.use(express.json());
app.use(requestTime);

app.get('/categories', logger('Get all categories'), categoryRoutes.get);
app.post('/categories', logger('Create a category'), validator, categoryRoutes.post);

app.use(handle404);
app.use(handle500);

const PORT = process.env.PORT || 8080;

module.exports = {
  server: app,
  start: () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};
