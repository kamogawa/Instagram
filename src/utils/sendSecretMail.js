import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const sendSecretMail = (address, secret) => {
  const email = {
    from: "captain_kbg@naver.com",
    to: address,
    subject: "Login Secret for Instagram",
    html: `${secret} copy this`

  }
}