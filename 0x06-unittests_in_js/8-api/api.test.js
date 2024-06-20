const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', () => {
  let baseUrl = 'http://localhost:7865';

  before((done) => {
    app.on('listening', () => {
      done();
    });
  });

  it('Correct status code and result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after(() => {
    app.close();
  });
});
