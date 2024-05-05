const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
app.use(express.static('public'));
app.use(express.json());

app.post('/send-webhook', async (req, res) => {
    const { message } = req.body; // Assuming the request body has a 'message' field

    if (!message) {
        return res.status(400).send('Message field is required');
    }

    try {
        const webhookUrl = 'https://discord.com/api/webhooks/1233966353581477928/-9BcPdqgj7G-BEdN4oIBVf0cRq85JwwTPD4_F9Xgx2m3cTIsN4USkiE6LYfizmI-F4AJ';
        await axios.post(webhookUrl, { content: message });
        res.status(200).send('Webhook sent successfully');
    } catch (error) {
        console.error('Error sending webhook:', error);
        res.status(500).send('Failed to send webhook');
    }
});
