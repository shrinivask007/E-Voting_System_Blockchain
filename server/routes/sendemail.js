const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'test.demo.123.user@gmail.com',
        pass: 'bndscrbepnngswfp'
    }
});

// POST route to send an email
router.post('/', (req, res) => {
    const { email, firstName, idNumber } = req.body;

    const mailOptions = {
        from: 'test.demo.123.user@gmail.com',
        to: email,
        subject: 'Auto Generated Mail - Vote Confirmation',
        text: `Hello ${firstName},\n\nYour vote has been successfully recorded. Aadhar Number: ${idNumber}.\nThank you for voting!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.status(200).send('Email sent successfully!');
    });
});

module.exports = router;

