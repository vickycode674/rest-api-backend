const express = require('express');
const router = express.Router();
const dataController = require('./controllers/dataController');

router.get('/somepath', dataController.getData); // Ensure this is correct
