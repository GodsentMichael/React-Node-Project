const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth:{
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = {
        // from: process.env.SMTP_MAIL, 
        from: `Godsent Stores <${process.env.SMTP_MAIL}>`,
        to: options.email,
        subject: options.subject,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    /* Add your custom styles here */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #555;
                    }
                    .button {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #007bff;
                        color: #fff;
                        text-decoration: none;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>${options.subject}</h1>
                    <p>${options.message}</p>
                    <a class="button" href="#">Click Here</a>
                </div>
            </body>
            </html>
        `,
    };
    
    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;