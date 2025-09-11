const validateForm = (req, res, next) => {
  const { name, email, phone, date, bookingType, message } = req.body;

  // Validate name
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters long' });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  // Validate phone (now required)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phone || !phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
    return res.status(400).json({ error: 'Please provide a valid phone number' });
  }

  // Validate booking date (now required)
  if (!date) {
    return res.status(400).json({ error: 'Please select a booking date' });
  }

  // Validate booking type (now required)
  if (!bookingType) {
    return res.status(400).json({ error: 'Please select a booking type' });
  }

  // Validate message
  if (!message || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters long' });
  }

  next();
};

module.exports = validateForm;
