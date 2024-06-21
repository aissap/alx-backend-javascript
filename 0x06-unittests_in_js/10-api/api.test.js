const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('POST /login', () => {
  it('responds with Welcome <username> when userName is provided in the request body', (done) => {
    const userData = { userName: 'Betty' };
    request(app)
      .post('/login')
      .send(userData)
      .expect(200)
      .expect('Welcome Betty')
      .end(done);
  });

  it('responds with 400 Bad Request when userName is missing from the request body', (done) => {
    request(app)
      .post('/login')
      .expect(400)
      .end(done);
  });
});

describe('GET /available_payments', () => {
  it('responds with correct payment methods object', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
      .end(done);
  });
});