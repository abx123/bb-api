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
    // axios.post('https://novel-fac48.firebaseio.com/test.json', req.body.event)
    //     .then()
    // let cmd = req.body.event.text.substring(15).split(/ (.+)/)
    // let subCmd = cmd[1].split(/ (.+)/)
    // let date = subCmd[1].split(/ (.+)/)
    // let test = date[0] + '/2020'
    // let slackReq = {
    //     text: ':bb-here::bb-who-find:\n ' + cmd[0] + '\n ' + subCmd[0] + '\n' + Date.parse(date[0] + '/' + new Date().getFullYear()) + '\n' + test
    // }
    // if (req.body.event.channel === bb2) {
    //     axios.post('https://hooks.slack.com/services/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', JSON.stringify(slackReq))
    //     res.send(req.body);
    // }

    cmdtxt = req.body.event.text.substring(15)
    let command = cmdtxt.split(' ')
    let replyObj = { text: ':bb-no-understand:' }
    switch (true) {
        case (command.length == 1):
            console.log('command[0]:' + '!')
            replyObj.text = 'command:' + command[0]
            if (command[0] == "") {
                replyObj.text = ':bb-here::bb-who-find:'
            }
            break;
        case (command.length == 2):
            replyObj.text = 'command:' + command[0] + '\n subcmd:' + command[1]
            break;
        case (command.length == 3):
            replyObj.text = 'command:' + command[0] + '\n subcmd:' + command[1] + '\n date:' + command[2]
            break;
        case (command.length > 3):
            console.log('>3', command.length)
            var prefix = cmdtxt.match(/(.*?\s){3}/g)
            replyObj.text = 'command:' + command[0] + '\n subcmd:' + command[1] + '\n date:' + command[2] + '\n text:' + cmdtxt.substring(prefix.length)
            break;
        default:
            break;
    }
    console.log('command', command, 'cmdlength', command.length)
    axios.post('https://hooks.slack.com/services/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', JSON.stringify(replyObj))
    res.send(req.body);
});
app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!')
});