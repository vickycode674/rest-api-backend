const express = require('express');
const router = express.Router();
const { processData, getOperationCode } = require('../controllers/dataController');

router.post('/bfhl', processData);
router.get('/bfhl', getOperationCode);

module.exports = router;
