const formData = require('form-data');
const Mailgun = require('mailgun.js');
  const DOMAIN = 'sandboxeab42fea3ab24812b11fbc04f944438b.mailgun.org';
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
