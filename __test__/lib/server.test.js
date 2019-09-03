'use strict';

const { server } = require('../../lib/server.js');
const supergoose = require('../supergoose.js');
const mockRequest = supergoose(server);

describe('web server', () => {

  it('should respond properly on request to /categories', () => {

    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(0);
      });

  });

  it('should respond properly on post to /categories', () => {

    return mockRequest
      .post('/categories')
      .send({name:'Test', description:'test stuff'})
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toBe('Test');
      });

  });

  it('should now respond to /categories request with our record', () => {

    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(1);
        expect(results.body.results[0].name).toEqual('Test');
      });

  });

  it('should respond properly on an invalid post to /categories', () => {

    return mockRequest
      .post('/categories')
      .send({})
      .then(results => {
        expect(results.status).toBe(500);
      });

  });

  it('should respond properly to unknown resources', () => {
    return mockRequest
      .get('/asdf')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });

});
