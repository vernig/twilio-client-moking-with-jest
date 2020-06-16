jest.mock('../__mocks__/twilio');

const sendSMS = require('../twilio-sendSMS')

it('sends an sms', () => {
  expect.assertions(1)
  return sendSMS('+447777777777', '+448888888888').then(sms => expect(sms.sid).toEqual('SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'))
})
