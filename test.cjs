const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const cors = require('cors)
app.use(cors())

app.use(bodyParser.json());

app.post('/send-webhook', async (req, res) => {
    try {
        const { title, content, reason } = req.body;
        const embed = {
            title,
            color: 0x000000,
            fields: [{ name: content, value: reason, inline: false }]
        };
        const data = { embeds: [embed] };
        await axios.post('https://discord.com/api/webhooks/1233966353581477928/-9BcPdqgj7G-BEdN4oIBVf0cRq85JwwTPD4_F9Xgx2m3cTIsN4USkiE6LYfizmI-F4AJ"', data);
        res.status(200).send('Webhook sent successfully');
    } catch (error) {
        console.error('Failed to send webhook:', error.message);
        res.status(500).send('Failed to send webhook');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
