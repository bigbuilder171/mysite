const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// @route   POST /api/contact
// @desc    Send contact form email
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject || 'No Subject'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
});

module.exports = router;
