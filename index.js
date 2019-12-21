const express = require('express');
const app = express();
const dotenv = require('dotenv');
const axios = require('axios');
const bodyParser = require('body-parser');
var cors = require('cors');

dotenv.config();

app.use(bodyParser.json());
app.use(cors());

app.post('/leads/new', (req, res) => {
  let email = req.body.email;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
    }
  };
  axios
    .put(
      'https://api.sendgrid.com/v3/marketing/contacts',
      {
        contacts: [{ email }]
      },
      config
    )
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
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

var port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
