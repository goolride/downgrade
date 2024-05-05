const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json());

// Your existing /send-webhook endpoint
app.post('/send-webhook', (req, res) => {
    const { title, content, reason } = req.body;

    if (!title || !content || !reason) {
        return res.status(400).json({ error: 'Title, content, and reason are required' });
    }

    // Replace YOUR_DISCORD_WEBHOOK_URL_HERE with your actual Discord webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1233966353581477928/-9BcPdqgj7G-BEdN4oIBVf0cRq85JwwTPD4_F9Xgx2m3cTIsN4USkiE6LYfizmI-F4AJ';

    const payload = {
        content: `Title: ${title}\nContent: ${content}\nReason: ${reason}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(() => {
        res.status(200).json({ message: 'Message sent successfully' });
    })
    .catch((error) => {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
