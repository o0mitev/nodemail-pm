// Using nodemailer for sending emails: 
// https://nodemailer.com/
const nodemailer = require('nodemailer');

// A json file with fake emails
const emails = require('./fake_mails.json');
let arrayOfEmails = emails.map(item => item.email);
console.log(`Emails: ${arrayOfEmails.length}`);

// A transporter object 
const transporter = nodemailer.createTransport({
  pool: true,
  maxMessages: Infinity,
  maxConnections: 20,
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c1c8ff06d98bb5",
    pass: "c8f622854344c3"
  }
});

// Email
var mailOptions = {
  from: 'mitev.berlin@gmail.com',
  to: arrayOfEmails,
  subject: 'Fake Email',
  text: 'Fake emails from Plamen Mitev',
  html: 
  `
  <h1>Plamen Mitev</h1>
  <p>30 years old</p>
  
  `
};

// Sending emails
transporter.sendMail(mailOptions, function(error, info) {
  if(error) {
    console.log(error);
  } else {
    console.log(`Email sent:  ${info.response}`);
  };
});

