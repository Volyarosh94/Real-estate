const nodeMailer = require("nodemailer");
const {ECOM_EMAIL, ECOM_PASSWORD} = require("../../config/config");
const {} = require("../config/config");


exports.sendEmail = (mailingData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: ECOM_EMAIL,
      pass: ECOM_PASSWORD,
    },
  });
  return transporter
    .sendMail(mailingData)
    .then((info) => {
      console.log(`Message sent: ${info.response}`);
    })
    .catch((err) => {
      console.log(`Problem sending email: ${err}`);
      err.message = "There was a problem while sending a email";
      throw err;
    });
};
