const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at ${PORT}`));

app.post('/send-webhook' (req,res) => {
    res.send("EHHLo)
});
