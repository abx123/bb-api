const express = require('express')
const axios = require('axios')
const app = express();
const port = process.env.PORT || 8000

const bb2 = 'G01FLHXFZTM'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to learn backend with express!')
});

app.post('/test', (req, res) => {
    axios.post('https://novel-fac48.firebaseio.com/test.json', req.body.event)
        .then()
        // let cmd = { text: req.body.event.text.substring(15).split(' ') }
    let slackReq = { text: ':bb-here::bb-who-find:' + req.body.event.text.substring(15).split(' ')[0] }
    if (req.body.event.channel === bb2) {
        axios.post('https://hooks.slack.com/services/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', JSON.stringify(slackReq))
            .then(
                axios.post('https://hooks.slack.com/services/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', JSON.stringify({ text: req.body.event.text.substring(15).split(' ')[0] }))
            )
        res.send(req.body);
    }
});
app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!')
});