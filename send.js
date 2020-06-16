const send = require('./sendSmsWithTwilio');

send(process.argv[2], process.argv[3])
  .then((sms) => console.log('Message sent: ', sms.sid))
  .catch((error) => console.log(error));
