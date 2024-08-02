const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dataRoutes = require('./routes/dataRoutes');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', dataRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
