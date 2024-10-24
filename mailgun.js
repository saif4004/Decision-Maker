const formData = require('form-data');
const Mailgun = require('mailgun.js');
  const DOMAIN =  'sandboxa15e8ec9fb314669bf271a56672a5f4c.mailgun.org';
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({username: 'api', key: process.env.API_KEY});
  const sendEmail = function (email,pollStatus,pollID) {
    console.log("POLL ID: ", pollID)
    tempEmail = email;
    let messageData = {};
    if (pollStatus) {
   messageData = {
    from: "saif4004@gmail.com",
    to: email,
    subject: "Your poll created",
    text: `http://localhost:8080/polls/${pollID}`,
  };
} else {
    messageData = {
    from: "saif4004@gmail.com",
    to: email,
    subject: "Someone Voted",
    text: "LINK voted!",
   }
}
  client.messages.create(DOMAIN, messageData)
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.error("ERROR: ",err);
  })

  }
module.exports = {sendEmail};
