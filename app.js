const express = require("express");
const axios = require("axios");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

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
    from: "engsephy@gmail.com", // Change to your verified sender
    subject: "Inquiries Gap Recruitment.",
    text: message,
    html: mail,
  };
  //   await axios
  //     .post(sgMail.send(msg))
  //     .then(() => {
  //       res.status(200);
  //       console.log("Email sent");
  //       console.log("mail sent:", mail);
  //       console.log("msg.txt sent:", msg.text);
  //     })
  //     .catch((error) => {
  //       res.status(400).json(error.message);
  //     });

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

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
