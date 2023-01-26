const express = require("express");
const axios = require("axios");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/gap_inquiry", async (req, res) => {
  const mail = req.body.mail;
  const message = req.body.message;

  const msg = {
    to: "engsephy@gmail.com", // Change to your recipient
    from: "forms@gaprecruitment.co.ke", // Change to your verified sender
    subject: "Inquiries Gap Recruitment.",
    text: message,
    html: mail,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200);
      console.log("Email sent");
      console.log("mail sent:", mail);
      console.log("msg.txt sent:", msg.text);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});

// async function main() {
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     service: "Outlook365",
//     host: "smtp.office365.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     requireTLS: true,
//     tls: {
//       ciphers: "SSLv3",
//       rejectUnauthorized: false,
//     },
//     auth: {
//       user: "e",
//       pass: "a",
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" >', // sender address
//     to: "", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// }

// main().catch(console.error);

// const port = 8000;
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
