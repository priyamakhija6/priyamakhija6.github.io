const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON data in request bodies

// Serve static files (e.g., for React frontend)
app.use(express.static(path.join(__dirname, 'client/build')));

// Function to send email
const sendEmail = async (firstName, lastName, email, message) => {
    try {
        // Create a Nodemailer transporter using environment variables
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Setup email data
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: process.env.RECIPIENT_EMAIL,
            subject: 'Contact Form Submission',
            text: `You got a new message from 
            Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// API endpoint to handle form submission
app.post('/submit', async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;
        await sendEmail(firstName, lastName, email, message);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while sending the email');
    }
});

// For all other requests, serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = sendEmail;
