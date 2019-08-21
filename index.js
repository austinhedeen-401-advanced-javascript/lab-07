'use strict';

const server = require('./lib/server');

const PORT = process.env.PORT || 8080;

server.start(PORT);
