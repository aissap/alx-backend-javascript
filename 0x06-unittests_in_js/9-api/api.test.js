const { expect } = require('chai');
const request = require('request');
const server = require('./api');

describe('Integration Testing for /cart/:id endpoint', () => {
  after(() => {
    server.close();
  });
  it('Returns correct payment methods when :id is a number', (done) => {
    const id = 123;
    request(`http://localhost:7865/cart/${id}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${id}`);
      done();
    });
  });

  it('Returns 404 status when :id is not a number', (done) => {
    const id = 'hello';
    request(`http://localhost:7865/cart/${id}`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Cannot GET /cart/hello');
      done();
    });
  });
});