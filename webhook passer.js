// Import necessary modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port provided by the hosting environment or default to 3000

// Middleware to parse JSON bodies
app.use(express.json());

// POST request handling
app.post('/your-post-endpoint', (req, res) => {
  console.log('Received a POST request');
  console.log('Request body:', req.body);

  // Respond with a message
  res.send('POST request received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
