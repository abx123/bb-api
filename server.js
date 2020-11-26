const express = require('express')
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to learn backend with express!')
});

app.post('/test', (req, res) => {
    res.send(req.body);
});
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});