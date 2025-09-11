# Gmail Email Setup Guide

## Current Issue
Your contact form is working, but Gmail is rejecting the email credentials with error:
```
535-5.7.8 Username and Password not accepted
```

## Solution: Set Up Gmail App Password

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with your Gmail account (`vasurastogi213@gmail.com`)
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the setup process to enable 2FA

### Step 2: Generate App Password
1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. Select **Mail** as the app
4. Select **Other (Custom name)** as the device
5. Enter "Portfolio Contact Form" as the name
6. Click **Generate**
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables

**For Local Development:**
Update your `server/.env` file:
```
PORT=5000
EMAIL_USER=vasurastogi213@gmail.com
EMAIL_PASS=your_16_character_app_password_here
CONTACT_EMAIL=vasurastogi213@gmail.com
```

**For Production (Render.com):**
1. Go to your Render dashboard
2. Find your `personal-portfolio-3w8q` service
3. Go to **Environment** tab
4. Update the `EMAIL_PASS` variable with your new app password
5. Save the changes

### Step 4: Alternative Email Services

If Gmail continues to cause issues, consider these alternatives:

#### Option 1: Use SendGrid (Recommended)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get your API key
3. Update the email configuration

#### Option 2: Use Mailgun
1. Sign up at [Mailgun](https://www.mailgun.com/)
2. Get your API credentials
3. Update the email configuration

#### Option 3: Use EmailJS (Client-side)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Configure Gmail service
3. Update the contact form to use EmailJS

## Updated Email Configuration

The email configuration has been improved with:
- Better SMTP settings
- TLS configuration
- Connection verification
- Error handling

## Testing

After updating the credentials:
1. Deploy your server with the new environment variables
2. Test the contact form
3. Check server logs for email verification messages
4. Verify emails are received

## Troubleshooting

**If you still get authentication errors:**
1. Double-check the app password (no spaces, exactly 16 characters)
2. Ensure 2FA is enabled on your Google account
3. Try generating a new app password
4. Check that the email address is correct

**If emails are not being sent:**
1. Check server logs for detailed error messages
2. Verify environment variables are set correctly
3. Test with a different email service
4. Check spam/junk folders

## Security Notes

- Never commit app passwords to version control
- Use environment variables for all sensitive data
- Regularly rotate app passwords
- Monitor email sending for unusual activity
