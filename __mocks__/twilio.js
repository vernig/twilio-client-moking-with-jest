const messageResponse = {
  account_sid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  api_version: '2010-04-01',
  body: 'body',
  date_created: 'Thu, 30 Jul 2015 20:12:31 +0000',
  date_sent: 'Thu, 30 Jul 2015 20:12:33 +0000',
  date_updated: 'Thu, 30 Jul 2015 20:12:33 +0000',
  direction: 'outbound-api',
  error_code: null,
  error_message: null,
  from: '+15017122661',
  messaging_service_sid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  num_media: '0',
  num_segments: '1',
  price: null,
  price_unit: null,
  sid: 'SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  status: 'sent',
  subresource_uris: {
    media:
      '/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json',
  },
  to: '+15558675310',
  uri:
    '/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json',
};

class Twilio {
  constructor(sid, token, opts) {
    this.messages = {
      create: () => {
        return new Promise((resolve, reject) => {
          process.nextTick(() => {
            resolve(messageResponse);
          });
        });
      },
    };
  }
}

var initializer = function (sid, token, opts) {
  return new Twilio(sid, token, opts)
}

module.exports = initializer;
