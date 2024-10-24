const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.API_KEY});

mg.messages.create('sandbox-123.mailgun.org', {
  from: "Excited User <mailgun@sandbox-123.mailgun.org>",
  to: ["test@example.com"],
  subject: "Hello",
  text: "Testing some Mailgun awesomness!",
  html: "<h1>Testing some Mailgun awesomness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.error(err)); // logs any error
