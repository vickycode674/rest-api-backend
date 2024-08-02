const express = require('express');
const router = express.Router();
const { processData, getOperationCode } = require('../controllers/dataController');

router.post('/data', processData);
router.get('/data', getOperationCode);

module.exports = router;
