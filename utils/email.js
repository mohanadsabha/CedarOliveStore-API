const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // Create Transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Define email options
    const mailOptions = {
        from: 'Mohannad Abusabha <mohannad.naxol@gmail.com>',
        to: options.email,
        subject: options.subject,
        html: options.message,
    };

    // Send Email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
