const express = require('express');
const router = express.Router();

router.post('/test', (request, response) => {
    let result = '';
    response.send(result);
});

module.exports = router;