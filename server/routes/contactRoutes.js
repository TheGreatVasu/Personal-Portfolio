const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../Controllers/contactController');
const validateForm = require('../middleware/validateForm');

router.post('/send', validateForm, sendContactEmail);

module.exports = router;
