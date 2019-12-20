const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.get('/', (req, res) => {
  return 'Hello World';
  // console.log('here');
  // // using Twilio SendGrid's v3 Node.js Library
  // // https://github.com/sendgrid/sendgrid-nodejs
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = {
  //   to: 'tester@gmail.com',
  //   from: 'test@gmail.com',
  //   subject: 'Sending with Twilio SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  // };
  // sgMail.send(msg);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
