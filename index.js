const express = require('express');
const router = express.Router();
const chromeMonitoring = require('./chrome_monitoring');

router.use('', chromeMonitoring);

module.exports = router;
