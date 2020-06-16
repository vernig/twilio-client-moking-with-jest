require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function sendSMS(sender, recipient) {
  return client.messages
    .create({ from: sender, body: 'Hello World', to: recipient })
}

module.exports = sendSMS;
