const sgMail = require("@sendgrid/mail");

require("dotenv").config();

sgMail.setApiKey(process.env.SG_Key);
const msg = {
  to: process.env.emailEscritor, // Change to your recipient
  from: process.env.emailRecebedor, // Change to your verified sender
  subject: "Assunto do email.",
  text: "Texto teste ddo email.",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
