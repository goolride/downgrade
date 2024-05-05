function sendWebhookToServer(title, content, reason) {
    const data = { title, content, reason };
    fetch('https://gooride.com/send-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Webhook sent to server');
        } else {
            console.error('Failed to send webhook to server');
        }
    })
    .catch(error => {
        console.error('Error sending webhook to server:', error.message);
    });
}

// Example usage
sendWebhookToServer('Title', 'Content', 'Reason');
