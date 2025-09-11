const transporter = require('../config/mailConfig');

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, phone, date, bookingType, message } = req.body;

    // Email to the website owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vasurastogi213@gmail.com', // Custom email receiver
      subject: `New Contact Form Message from ${name} - ${bookingType || 'General Inquiry'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${date ? `<p><strong>Booking Date:</strong> ${new Date(date).toLocaleDateString()}</p>` : ''}
        ${bookingType ? `<p><strong>Booking Type:</strong> ${bookingType}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent from your portfolio website contact form</small></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Vasu Rastogi - CEO @Rastogi Coders',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #0a0a0f;">Thank you for reaching out!</h3>
          <p>Dear ${name},</p>
          <p>I have received your message and will get back to you as soon as possible.</p>
          ${date && bookingType ? `
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #0a0a0f; margin: 0 0 10px 0;">Your Booking Details:</h4>
              <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
              <p style="margin: 5px 0;"><strong>Type:</strong> ${bookingType}</p>
            </div>
          ` : ''}
          <p>Best regards,<br><strong>Vasu Rastogi</strong><br>CEO @Rastogi Coders<br>Software Engineer</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    });
  }
};

module.exports = {
  sendContactEmail
};
