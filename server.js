const express = require('express');
const app = express();
app.listen(3000,() => console.log('listening at 3000'))l
app.use(express.static('public'));

app.post('/send-webhook', (request,response) => {
    console.log(request);
});
