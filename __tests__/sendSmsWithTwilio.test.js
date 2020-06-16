'use strict';
// jest.mock('../twilio');
// There's no need to explictely call jest.mock() since `twilio` 
// is a node modules and the `__mocks__` folder is placed ajacent 
// to `node_modules` folder. 
// See https://jestjs.io/docs/en/manual-mocks#mocking-node-modules

const sendSMS = require('../sendSmsWithTwilio')

it('sends an sms', () => {
  expect.assertions(1)
  return sendSMS('+447777777777', '+448888888888').then(sms => expect(sms.sid).toEqual('SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'))
})
