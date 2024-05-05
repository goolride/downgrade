app.post('/send-webhook', (req, res) => {
    const { title, content, reason } = req.body;

    if (!title || !content || !reason) {
        return res.status(400).json({ error: 'Title, content, and reason are required' });
    }

    // Replace YOUR_DISCORD_WEBHOOK_URL_HERE with your actual Discord webhook URL
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
