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
    let cmd = req.body.event.text.substring(15).split(/ (.+)/)
    let subCmd = cmd[1].substring(15).split(/ (.+)/)
    let slackReq = {
        text: ':bb-here::bb-who-find:\n ' + cmd[0] + '\n ' + subCmd[0] + '/2020' + Date.parse(subCmd[0] + '/2020')
    }
    if (req.body.event.channel === bb2) {
        axios.post('https://hooks.slack.com/services/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', JSON.stringify(slackReq))
        res.send(req.body);
    }
});
app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!')
});