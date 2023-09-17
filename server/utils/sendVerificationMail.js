const { createMailTransporter } = require("./createMailTransporter");

const sendVerificationMail = (user) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: '"News App" <abhishekerugadindla@gmail.com>',
    to: user.email,
    subject: "Verify your email...",
    html: `<a href="http://localhost:3000/verify-email/${user.emailToken}">Verify Your Email</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Verification email sent");
    }
  });
};

module.exports = { sendVerificationMail };
