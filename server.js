const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-webhook', (req, res) => {
    const { title, content, reason } = req.body;

    if (!title || !content || !reason) {
        return res.status(400).json({ error: 'Title, content, and reason are required' });
    }

    const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL_HERE';

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
