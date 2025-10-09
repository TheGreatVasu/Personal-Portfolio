const nodemailer = require('nodemailer');

// Email service configuration
const createEmailTransporter = () => {
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  
  let transporterConfig;

  switch (emailService.toLowerCase()) {
    case 'gmail':
      transporterConfig = {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        tls: {
          rejectUnauthorized: false
        }
      };
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        transporterConfig.auth = {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        };
      }
      break;

    case 'sendgrid':
      transporterConfig = {
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY
        }
      };
      break;

    case 'mailgun':
      transporterConfig = {
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAILGUN_SMTP_USER,
          pass: process.env.MAILGUN_SMTP_PASS
        }
      };
      break;

    case 'outlook':
      transporterConfig = {
        service: 'hotmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      };
      break;

    default:
      // Fallback to Gmail
      transporterConfig = {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        tls: {
          rejectUnauthorized: false
        }
      };
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        transporterConfig.auth = {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        };
      }
  }

  return nodemailer.createTransport(transporterConfig);
};

// Create and verify transporter
const transporter = createEmailTransporter();

// Verify connection configuration
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      console.error('Email configuration error:', error);
      console.error('Please check your email service configuration and credentials');
    } else {
      console.log('Email server is ready to take our messages');
      console.log(`Using email service: ${process.env.EMAIL_SERVICE || 'gmail'}`);
    }
  });
} else {
  console.warn('Email credentials not set. Skipping SMTP verification. Set EMAIL_USER and EMAIL_PASS to enable email sending.');
}

module.exports = transporter;
