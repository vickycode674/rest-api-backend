const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dataRoutes = require('./routes/dataRoutes');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', dataRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
