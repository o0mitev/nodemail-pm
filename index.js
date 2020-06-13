const nodemailer = require('nodemailer');
const emails = require('./fake_mails.json');

let arrayOfEmails = emails.map(item => {
  return item.email
})

const transporter = nodemailer.createTransport({
  maxMessages: Infinity,
  maxConnections: 20,
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c1c8ff06d98bb5",
    pass: "c8f622854344c3"
  }
});

var mailOptions = {
  from: 'mitev.berlin@gmail.com',
  to: arrayOfEmails,
  subject: 'Ha it works',
  text: 'Hello',
  html: `
  <h1>Plamen 4 was here </h1>
  <p>and left you a message</p>
  
  `
};

transporter.sendMail(mailOptions, function(error, info) {
  if(error) {
    console.log(error);
  } else {
    console.log(`Email sent:  ${info.response}`);
  }
})

