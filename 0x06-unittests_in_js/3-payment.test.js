const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with type SUM, 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct sum to the console', () => {
    const consoleStub = sinon.stub(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.calledWithExactly('The total is: 120')).to.be.true;
    consoleStub.restore();
  });
});