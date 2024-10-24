const formData = require('form-data');
const Mailgun = require('mailgun.js');
  const DOMAIN =  'sandboxa15e8ec9fb314669bf271a56672a5f4c.mailgun.org';
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({username: 'api', key: process.env.API_KEY});
  const sendEmail = function () {
  const messageData = {
    from: "saif4004@gmail.com",
    to: "a_millaresthomson@outlook.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
  };
  client.messages.create(DOMAIN, messageData)
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.error("ERROR: ",err);
  })
}

module.exports = {sendEmail};




