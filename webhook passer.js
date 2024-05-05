const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST request handler
app.post('/discord-webhook', (req, res) => {
    // Access the embed data sent in the request body
    const embedData = req.body.embeds[0]; // Assuming only one embed is sent

    // Process the embed data as needed
    console.log('Received embed data:', embedData);

    // Send a response (optional)
    res.send('Embed data received successfully');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
