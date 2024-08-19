// Download the helper library from https://www.twilio.com/docs/node/install
import twilio from 'twilio';

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

client.calls.create({
  from: process.env.TWILIO_FROM_NUMBER,
  to: process.env.TWILIO_TO_NUMBER,
  url: process.env.TWILIO_CALL_URL,
}).then(call => {
  console.log(call.sid);
}).catch(error => {
  console.error(error);
});
