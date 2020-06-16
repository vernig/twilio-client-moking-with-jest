# Mock Twilio client with Jest 

This repo shows how to mock Twilio client in testing with jest

# Usage

Use the following command to send an sms and prove that `twilio-sendSMS` works. 
```
node send <sender_number> <recipient_number>
```

# Test

To test the module `twilio-sendSMS` with Jest use: 
```
yarn test
```
No message should be sent. 