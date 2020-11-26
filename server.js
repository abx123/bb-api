const express = require('express')
const axios = require('axios')
const app = express();
const port = process.env.PORT || 8000


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to learn backend with express!')
});

app.post('/test', (req, res) => {
    axios.post('https://novel-fac48.firebaseio.com/test.json', req.body)
        .then()
    res.send(req.body);
});
app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!')
});