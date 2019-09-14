import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENGRID_PASSWORD
    }
  };
  console.log(process.env.SENDGRID_USERNAME);
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

const sendSecretMail = (adress, secret) => {
  const email = {
    from: "captain_kbg@naver.com",
    to: adress,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello! Your login secret it 「<b>${secret}</b>」.<br/>Copy paste on the app/website to log in`
  };
  return sendMail(email).catch( e => {console.log(e)});
};

export default sendSecretMail;