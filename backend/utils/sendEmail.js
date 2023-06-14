const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

const sendMultipleEmail = (details) => {
  try {
    details.users.forEach(async (user) => {
      let info = await transporter.sendMail({
        from: `${process.env.PRODUCT_NAME}<${process.env.SMTP_MAIL}>`,
        to: user.email,
        subject: details.subject,
        html: details.message,
      });
      console.log("Message sent: %s", info.messageId);
    });
  } catch (err) {
    console.log(err);
  }
};

const sendSingleEmail = async (details) => {
  try {
    let info = await transporter.sendMail({
      from: `${process.env.PRODUCT_NAME} <${process.env.SMTP_MAIL}>`,
      to: details.email,
      subject: details.subject,
      html: details.message,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  sendMultipleEmail,
  sendSingleEmail,
};
