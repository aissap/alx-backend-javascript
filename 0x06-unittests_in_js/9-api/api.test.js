const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    request(url, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

describe('Cart page', () => {
  const url = 'http://localhost:7865/cart';

  it('Correct status code when :id is a number?', (done) => {
    request(`${url}/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number?', (done) => {
    request(`${url}/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number?', (done) => {
    request(`${url}/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Correct result when :id is NOT a number?', (done) => {
    request(`${url}/hello`, (error, response, body) => {
      expect(body).to.include('Cannot GET /cart/hello');
      done();
    });
  });
});