const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.post('/send-webhook' (req,res) => {
    res.send(req.body)
});
