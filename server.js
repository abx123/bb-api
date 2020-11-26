const express = require('express')
const app = express();
const port = process.env.PORT || 8000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to learn backend with express!')
});

app.post('/test', (req, res) => {
    res.send(req.body);
});
app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!')
});