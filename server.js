const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
app.use(express.static('public'));
app.use(express.json());

app.post('/send-webhook', async (req, res) => {
    try {
        const response = await axios.post('https://discord.com/api/webhooks/1233966353581477928/-9BcPdqgj7G-BEdN4oIBVf0cRq85JwwTPD4_F9Xgx2m3cTIsN4USkiE6LYfizmI-F4AJ', req.body);
        console.log(response.data);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});
