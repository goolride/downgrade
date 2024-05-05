const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST request handler
app.post('/https://discord.com/api/webhooks/1233966353581477928/-9BcPdqgj7G-BEdN4oIBVf0cRq85JwwTPD4_F9Xgx2m3cTIsN4USkiE6LYfizmI-F4AJ', (req, res) => {
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
